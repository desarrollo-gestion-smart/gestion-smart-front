const express = require('express');
const { registerUser } = require('../services/userRegistration');
const { loginUser } = require('../services/loginouth');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para el login de usuario
router.post('/login', loginUser);


module.exports = router;
