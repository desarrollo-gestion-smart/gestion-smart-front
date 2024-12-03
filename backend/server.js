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
const authrequired = require ("./src/middlewares/validateToken")
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

app.get('/api/mercadopago/callback', authrequired, async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Authorization code not provided' });
  }

  const userId = req.user?.userId;


  try {
    const response = await axios.post(
        'https://api.mercadopago.com/oauth/token',
        new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: process.env.MP_CLIENT_ID,
          client_secret: process.env.MP_CLIENT_SECRET,
          redirect_uri: process.env.MP_REDIRECT_URI,
          code,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
    );

    const { access_token, refresh_token, user_id, expires_in } = response.data;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if (user.wallet?.mercadoPago?.accessToken) {
      return res.status(400).json({ message: 'Ya tienes una billetera vinculada' });
    }

    await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            'wallet.mercadoPago': {
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

   // res.status(200).json({ message: 'Wallet linked successfully' });
    res.redirect('https://gestion-smart-testing.com/apps/wallet/vinculate?success=true');

  } catch (error) {

    console.error('Error exchanging code for token:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error linking wallet' });

  }
});
app.get('/api/mercadopago/wallet-status', authrequired, async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const walletLinked = !!user.wallet?.mercadoPago?.accessToken;
    const mercadoPagoId = walletLinked ? user.wallet.mercadoPago.userId : null;

    res.status(200).json({ walletLinked, mercadoPagoId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al verificar el estado de la wallet' });
  }
});
module.exports = app