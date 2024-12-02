const TOKEN_SECRET = require('../config');
const jwt = require('jsonwebtoken');


function createAccessToken(userId) {
    if (!userId) {
        throw new Error('El ID del usuario es obligatorio para generar el token');
    }

    // Retorna directamente el token como una promesa para mantener consistencia
    return jwt.sign({ id: userId }, TOKEN_SECRET, { expiresIn: '1d' });
}

module.exports = createAccessToken;

