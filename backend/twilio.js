require('dotenv').config(); // Cargar las variables de entorno

const express = require('express');
const twilio = require('twilio');
const app = express();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`Nueva solicitud: ${req.method} ${req.url}`);
    console.log('Cuerpo de la solicitud:', req.body);
    next();
});
// Ruta que recibe los mensajes entrantes
app.post('/receive-message', async (req, res) => {
    console.log('Mensaje recibido:');
    console.log('De:', req.body.From); // Número del remitente
    console.log('Mensaje:', req.body.Body); // Texto del mensaje

    const userPhoneNumber = req.body.From;
    const incomingMessage = req.body.Body;

    const template = {
        mensajeInicial: 'Hola, bienvenido a nuestro servicio! Elige una opción:',
    };

    try {
        await client.messages.create({
            body: template.mensajeInicial,
            from: TWILIO_PHONE_NUMBER,
            to: userPhoneNumber,
        });

        res.status(200).send('OK');
    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        res.status(500).send('Error al procesar el mensaje');
    }
});


// Iniciar el servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
