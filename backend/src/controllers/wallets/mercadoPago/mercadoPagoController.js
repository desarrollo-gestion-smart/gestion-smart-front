const jwt = require("jsonwebtoken");
const axios = require("axios");
const User = require("../../../models/users"); // Suponiendo un modelo User



const generateMercadoPagoState = (req, res) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Usuario no autenticado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Genera el `state` con el `userId`
    const state = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    res.status(200).json({ state });
  } catch (error) {
    console.error("Error al generar el state:", error);
    res.status(500).json({ error: "Error al generar el state" });
  }
};

// Ruta para generar el state
router.get("/generate-mercadopago-state", generateMercadoPagoState);


const mercadopagoController = {
  callback: async (req, res) => {
    const { code, state } = req.query;

    if (!code || !state) {
      return res.status(400).json({ error: "Faltan parámetros (code o state)" });
    }

    try {
      const decodedState = jwt.verify(state, process.env.JWT_SECRET);
      const userId = decodedState.userId;

      const response = await axios.post(
        "https://api.mercadopago.com/oauth/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env.MP_CLIENT_ID,
          client_secret: process.env.MP_CLIENT_SECRET,
          redirect_uri: process.env.MP_REDIRECT_URI,
          code,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      const { access_token, refresh_token, user_id, expires_in } = response.data;

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            "wallet.mercadoPago": {
              accessToken: access_token,
              refreshToken: refresh_token,
              userId: user_id,
              expiresIn: expires_in,
              linkedAt: new Date(),
            },
          },
        },
        { new: true, upsert: true }
      );

      res.status(200).json({
        redirectUrl: "https://gestion-smart.com/apps/wallet/vinculate?success=true",
      });
    } catch (error) {
      res.status(500).json({
        redirectUrl: "https://gestion-smart.com/apps/wallet/vinculate?success=false",
        error: error.response?.data || error.message,
      });
    }
  },

  walletStatus: async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Token de autorización faltante" });
    }

    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId);
      if (!user || !user.wallet?.mercadoPago) {
        return res.status(404).json({ error: "Wallet no vinculada" });
      }

      res.status(200).json({ walletStatus: user.wallet.mercadoPago });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = mercadopagoController;
