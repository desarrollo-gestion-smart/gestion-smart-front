const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const authRoutes = require('./src/routes/authentication/auth.routes')
const app = express();
const morgan = require ('morgan')
const axios = require("axios");
const User = require('./src/models/users')
const dontenv = require('dotenv')
const jwt = require("jsonwebtoken");

//variables de ent
dontenv.config();

//cors
app.use(
  cors({
    origin: [
      "https://gestion-smart.com",
      "https://gestion-smart-testing.com",
      "http://vigilant-prosperity-production.up.railway.app",
      "https://vigilant-prosperity-production.up.railway.app",
      "https://gestion-smart-testing.com/",
      "http://localhost:3000",  // El frontend local
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],  
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true 
  })
);

//procesamiento
app.use(morgan('dev'));
app.use(express.json());

//autenticaciones
app.use('/api',authRoutes);


//wallets
app.get("/api/mercadopago/callback", async (req, res) => {
  const { code, state } = req.query;

  console.log("Callback recibido con parámetros:", { code, state });

  if (!code || !state) {
    console.error("Faltan parámetros: code o state");
    return res.status(400).json({ error: "Faltan parámetros (code o state)" });
  }

  try {
    console.log("Decodificando y verificando el token `state`...");
    const decodedState = jwt.verify(state, process.env.JWT_SECRET);
    console.log(decodedState.id)
    const { userId } = decodedState.id; 
    if (!userId) {
      console.error("El token `state` no contiene un `userId` válido:", decodedState);
      return res.status(400).json({ error: "El token `state` no contiene un `userId` válido." });
    }

    console.log("Token `state` validado. Usuario ID:", userId);

    const objectId = mongoose.Types.ObjectId(userId);
    console.log("Buscando usuario en la base de datos con ID:", objectId);

    const user = await User.findById(objectId);
    if (!user) {
      console.error("Usuario no encontrado en la base de datos:", userId);
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    console.log("Usuario encontrado:", user.email);


 



    // Solicitar el token de Mercado Pago
    console.log("Solicitando token de Mercado Pago...");
    const response = await axios.post(
      "https://api.mercadopago.com/oauth/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        redirect_uri: process.env.MP_REDIRECT_URI,
        code,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { access_token, refresh_token, user_id, expires_in } = response.data;
    console.log("Tokens obtenidos de Mercado Pago:", response.data);

    // Actualizar la billetera del usuario
    console.log("Actualizando la billetera del usuario...");
    await User.findByIdAndUpdate(
      objectId,
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

    console.log("Billetera vinculada exitosamente para el usuario:", userId);
    res.status(200).json({ redirectUrl: "https://gestion-smart-testing.com/apps/wallet/vinculate?success=true" });
  } catch (error) {
    console.error("Error en el procesamiento del callback:", error.message);

    if (error.name === "JsonWebTokenError") {
      console.error("Error en el token JWT:", error.message);
    }

    res.status(500).json({
      redirectUrl: "https://gestion-smart-testing.com/apps/wallet/vinculate?success=false",
      error: error.message,
    });
  }
});

app.get("/api/mercadopago/wallet-status", async (req, res) => {
  console.log("Solicitud a wallet-status recibida:", req.headers);

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.error("Token de autorización faltante");
    return res.status(401).json({ error: "Token de autorización faltante" });
  }

  try {
    const token = authHeader.split(" ")[1];
    console.log("Token recibido:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decodificado:", decoded);

    const user = await User.findById(decoded.userId);
    if (!user) {
      console.error("Usuario no encontrado");
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (!user.wallet || !user.wallet.mercadoPago) {
      console.error("Wallet no vinculada");
      return res.status(404).json({ error: "Wallet no vinculada" });
    }

    console.log("Estado de wallet:", user.wallet.mercadoPago);
    res.status(200).json({ walletStatus: user.wallet.mercadoPago });
  } catch (error) {
    console.error("Error al verificar el estado de la wallet:", error.message);
    res.status(500).json({ error: error.message });
  }
});
module.exports = app