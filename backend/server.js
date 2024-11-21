const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios'); // Para llamadas a APIs externas
const authRoutes = require('./controllers/authController');
const whatsappVerify = require('./whatsapp-verify/verify');
const checkCode = require('./whatsapp-verify/checkCode');
const sendEmail = require('./controllers/emailSendRegister');
const { registerUser, getUsers } = require('./controllers/userController');
const { handleIncomingWhatsApp } = require('./controllers/twilioController');
const twilio = require('twilio');
const diacritics = require('diacritics');
const payoneerRouter = require('./controllers/payoneer/walletVinculate'); 
// const mercadopagoRouter = require('./controllers/mercado-pago/mercadoPagoVinculate'); // Importa el router con las rutas de Mercado Pago


// Cargar variables de entorno
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a MongoDB
const MONGODB_URI = 'mongodb+srv://desarrollo:ADelgado.dev@cluster0.xvocm.mongodb.net/gestionSmart?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas existentes
app.use('/api/users', authRoutes);
app.use('/api/verify', whatsappVerify);
app.use('/api/validateCode', checkCode);
app.post('/api/twilio/receive-whatsapp', handleIncomingWhatsApp);
// app.use('/api', mercadopagoRouter); // Usa las rutas de Mercado Pago que definiste

app.post('/api/send-email', async (req, res) => {
  const emailData = req.body;
  console.log('Datos del correo recibidos:', emailData);
  try {
    await sendEmail(emailData);
    console.log('Correo enviado exitosamente');
    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
});

// Integrar el servicio de Payoneer
app.use('/api/payoneer', payoneerRouter);
// Datos iniciales para WhatsApp
const userData = {};
const initialTemplates = {
  bienvenida: {
    nombre: 'Mensaje de Bienvenida',
    mensajeInicial: 'Hola Bienvenido a Poseidon! Ya puedes comenzar a Jugar! Elige tu opción.',
    respuestas: [
      {
        texto: 'Quiero Registrarme',
        desencadenador: 'registro',
      },
      {
        texto: 'Quiero cargar Créditos/Fichas',
        desencadenador: 'cargarCredito',
      },
      {
        texto: 'Texto Personalizado',
        desencadenador: 'textoPersonalizado',
      },
      {
        texto: '¿Cuáles son los términos y condiciones?',
        desencadenador: 'Link',
      },
    ],
  },
};
const desencadenadoresDetalles = {
  registro: ['Nombre y Apellido', 'Correo Electrónico', 'Whatsapp'],
  cargarCredito: ['Monto a cargar', 'Método de pago'],
  textoPersonalizado: ['Texto del mensaje'],
  Link: ['Enlace a Políticas de Privacidad'],
};

// Normalización de texto
const normalizeText = (text) => {
  return diacritics.remove(text).toLowerCase();
};

// Webhook de WhatsApp
app.post('/webhook', (req, res) => {
  console.log('Encabezados:', req.headers);
  console.log('Cuerpo recibido:', req.body);

  const { From, Body } = req.body;

  if (!From || !Body) {
    console.error('Datos incompletos recibidos en el mensaje');
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  console.log(`Mensaje recibido de ${From}: ${Body}`);

  let respuestaBot = '';
  const userMessage = normalizeText(Body);
  console.log('userMessage:', userMessage);

  if (!userData[From]) {
    if (userMessage === 'hola' || userMessage === 'start') {
      respuestaBot = `Hola Bienvenido a Poseidon! Ya puedes comenzar a Jugar! Elige tu opción:

1 - Quiero Registrarme
2 - Quiero Cargar Créditos/Fichas
3 - Texto Personalizado
4 - ¿Cuáles son los términos y condiciones?`;

      sendMessageToUser(From, respuestaBot);
      userData[From] = { step: undefined }; // Inicializar el estado del usuario
    }
  } else {
    const userStep = userData[From]?.step;
    console.log('userStep:', userStep);

    if (userMessage === '1' && !userStep) {
      userData[From] = { step: 'name' };
      respuestaBot = 'Por favor, ingresa tu nombre:';
      sendMessageToUser(From, respuestaBot);
    } else if (userMessage === '1' && userStep) {
      respuestaBot = 'Ya has iniciado el registro. Por favor, ingresa el siguiente dato.';
      sendMessageToUser(From, respuestaBot);
    } else if (userStep === 'name') {
      userData[From].name = Body;
      userData[From].step = 'lastName';
      respuestaBot = 'Gracias. Ahora, por favor ingresa tu apellido:';
      sendMessageToUser(From, respuestaBot);
    } else if (userStep === 'lastName') {
      userData[From].lastName = Body;
      userData[From].step = 'email';
      respuestaBot = 'Perfecto. Ahora, por favor ingresa tu correo electrónico:';
      sendMessageToUser(From, respuestaBot);
    } else if (userStep === 'email') {
      userData[From].email = Body;
      userData[From].step = 'whatsapp';
      respuestaBot = `Gracias, ahora tomaremos este número de WhatsApp: ${From}. ¿Es correcto? Responde con "sí" para confirmar o "no" para modificarlo.`;
      sendMessageToUser(From, respuestaBot);
    } else if (userStep === 'whatsapp') {
      const normalizedResponse = normalizeText(Body);

      if (normalizedResponse === 'sí' || normalizedResponse === 'si') {
        userData[From].whatsappConfirmed = true;
        userData[From].step = 'done';
        respuestaBot = '¡Tu usuario ha sido registrado exitosamente!';
        sendMessageToUser(From, respuestaBot);
      } else if (normalizedResponse === 'no') {
        respuestaBot = 'Por favor, ingresa el número correcto de WhatsApp:';
        sendMessageToUser(From, respuestaBot);
      } else {
        respuestaBot = 'Respuesta no válida. Por favor responde con "sí" o "no".';
        sendMessageToUser(From, respuestaBot);
      }
    } else {
      respuestaBot = 'Mensaje no reconocido. Por favor, selecciona una opción válida.';
      sendMessageToUser(From, respuestaBot);
    }
  }

  res.status(200).json({ message: 'Respuesta enviada correctamente' });
});

// Función para enviar mensajes a través de Twilio
const sendMessageToUser = (to, message) => {
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    })
    .then((message) => {
      console.log('Mensaje enviado:', message.sid);
    })
    .catch((error) => {
      console.error('Error al enviar mensaje:', error);
    });
};

// Servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
