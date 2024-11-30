const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    country: { type: String },
    status: { type: String, enum: ['active', 'inactive'] },
    whatsapp: { type: String, required: false }, // Campo para el número de WhatsApp
    wallet: {
        mercadoPago: {
            accessToken: { type: String },
            refreshToken: { type: String },
            userId: { type: String },
            expiresIn: { type: Number },
            linkedAt: { type: Date },
        },
    },
});

// Ya no hay necesidad de un middleware para hashear la contraseña
// Eliminamos la función pre-save que cifraba la contraseña

const User = mongoose.model('User', userSchema);
module.exports = User;
