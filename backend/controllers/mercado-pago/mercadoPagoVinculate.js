// const express = require('express');
// const axios = require('axios');
// const crypto = require('crypto');
// const mercadopago = require('mercadopago'); // Importa el SDK de Mercado Pago

// const router = express.Router();

// // Configura tus credenciales de Mercado Pago
// const CLIENT_ID = '6740152728040642';
// const CLIENT_SECRET = '8o47ZWAF1yMsjNG2mrIIwZnCDarf8V2D';
// const REDIRECT_URI = 'https://7983-186-39-150-138.ngrok-free.app/api/callback';

// // Almacenamiento en memoria (objeto simple)
// let tempStore = {}; // Almacenamiento temporal en memoria

// // Paso 1: Redirigir al vendedor a la página de autorización
// router.get('/authorize', (req, res) => {
//   const codeVerifier = generateCodeVerifier();
//   generateCodeChallenge(codeVerifier).then((codeChallenge) => {
//     // Guardar el code_verifier en el almacenamiento temporal usando un identificador único
//     tempStore[req.sessionID] = { codeVerifier };

//     // Redirigir al vendedor para autorizar con PKCE
//     const authUrl = `https://auth.mercadopago.com.ar/authorization?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
//     console.log('Redirigiendo a Mercado Pago:', authUrl); // Debug log
//     res.redirect(authUrl);
//   });
// });

// // Función para generar el `code_verifier` (cadena aleatoria)
// function generateCodeVerifier() {
//   const verifier = crypto.randomBytes(32).toString('base64');
//   return verifier.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); // URL-safe base64 encoding
// }

// // Función para generar el `code_challenge` basado en el `code_verifier`
// function generateCodeChallenge(codeVerifier) {
//   return new Promise((resolve, reject) => {
//     const hash = crypto.createHash('sha256').update(codeVerifier).digest('base64');
//     const codeChallenge = hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); // URL-safe base64 encoding
//     resolve(codeChallenge);
//   });
// }

// // Paso 2: Recibir el código de autorización y obtener el access_token
// router.get('/callback', async (req, res) => {
//   const code = req.query.code; // El código de autorización
//   const codeVerifier = tempStore[req.sessionID]?.codeVerifier; // Recupera el code_verifier del almacenamiento temporal

//   console.log('Código recibido:', code); // Log para verificar el código recibido
//   console.log('Code Verifier en memoria:', codeVerifier); // Log para verificar el code_verifier en memoria

//   if (!code || !codeVerifier) {
//     return res.status(400).json({ message: 'No se recibió el código de autorización o code_verifier.' });
//   }

//   try {
//     // Ahora usamos axios para obtener el access_token
//     const response = await axios.post('https://api.mercadopago.com/oauth/token', null, {
//       params: {
//         grant_type: 'authorization_code',
//         code,
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         redirect_uri: REDIRECT_URI,
//         code_verifier: codeVerifier, // El code_verifier que guardaste en la memoria
//       },
//     });

//     // Verifica si la respuesta contiene el access_token
//     if (response.data.access_token) {
//       const accessToken = response.data.access_token;
//       console.log('Access Token recibido:', accessToken);
//       console.log(`Redirigiendo a: http://localhost:3000/apps/wallet/setup-checkout?access_token=${accessToken}`);

//       // Redirige a la página de configuración del checkout
//       return res.redirect(`http://localhost:3000/apps/wallet/setup-checkout?access_token=${accessToken}`);
//     } else {
//       console.error('No se recibió el access token');
//       return res.status(400).json({ message: 'No se recibió el access token' });
//     }
//   } catch (error) {
//     console.error('Error al obtener el token:', error.response || error.message);

//     return res.status(500).json({
//       message: 'Error al autorizar',
//       error: error.response ? error.response.data : error.message,
//     });
//   }
// });

// // Paso 3: Crear una preferencia de pago usando el access token del vendedor
// router.post('/create_preference', async (req, res) => {
//   const { accessToken } = req.body; // Obtén el token desde la solicitud del frontend (si es necesario)

//   if (!accessToken) {
//     return res.status(400).json({ message: 'El access token no está presente.' });
//   }

//   // Configura el token de acceso dinámicamente usando el access_token del vendedor
//   mercadopago.configurations.setAccessToken(accessToken);

//   const preference = {
//     items: [
//       {
//         title: 'Producto de prueba',
//         quantity: 1,
//         currency_id: 'ARS',  // O la moneda que desees
//         unit_price: 100,
//       },
//     ],
//     back_urls: {
//       success: 'http://localhost:5001/success',
//       failure: 'http://localhost:5001/failure',
//       pending: 'http://localhost:5001/pending',
//     },
//     auto_return: 'approved',
//   };

//   try {
//     const response = await mercadopago.preferences.create(preference);
//     res.status(200).json({ init_point: response.body.init_point });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Error al crear la preferencia de pago' });
//   }
// });

// module.exports = router;
