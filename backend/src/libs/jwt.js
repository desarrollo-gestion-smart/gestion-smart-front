const TOKEN_SECRET = require('../config');
const jwt = require('jsonwebtoken');

function createAccessToken(userId) {
    if (!userId) {
        throw new Error('El ID del usuario es obligatorio para generar el token');
    }

    return new Promise((resolve, reject) => {
        jwt.sign(
            { id: userId }, // Incluye solo el ID en el token
            TOKEN_SECRET,
            { expiresIn: "1d" }, // Configuración de expiración
            (err, token) => {
                if (err) {
                    console.error('Error al generar el token:', err);
                    return reject(err);
                }
                resolve(token); // Retorna el token firmado como cadena
            }
        );
    });
}

module.exports = createAccessToken;
