const jwt = require('jsonwebtoken');
const dontenv = require('dotenv')

dontenv.config();


const authrequired = (req, res, next) => {
  const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No autorizado" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET );
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Token inválido:', error.message);
        res.status(403).json({ message: "Token inválido o expirado" });
    }
};

module.exports = authrequired;
