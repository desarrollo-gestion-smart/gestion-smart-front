// services/twilioService.js
const twilio = require('twilio');
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, TWILIO_SERVICE_SID } = process.env;

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

async function sendMessage(phoneNumber, message) {
    try {
        const response = await twilioClient.messages.create({
            body: message,
            from: TWILIO_PHONE_NUMBER,
            to: phoneNumber
        });
        console.log('Mensaje enviado:', response.sid);
        return response;
    } catch (error) {
        console.error('Error enviando mensaje:', error);
        throw error;
    }
}

async function verifyPhoneNumber(phoneNumber, code) {
    try {
        const verificationCheck = await twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
            .verificationChecks.create({ to: phoneNumber, code: code });
        return verificationCheck.status;
    } catch (error) {
        console.error('Error verificando número:', error);
        throw error;
    }
}

module.exports = {
    sendMessage,
    verifyPhoneNumber
};
