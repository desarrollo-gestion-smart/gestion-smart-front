const express = require('express');
const { registerUser, loginUser } = require('../../controllers/authentication/authController');

const router = express.Router();

// Ruta de registro
router.post('/register', registerUser);

// Ruta de logueo
router.post('/login', loginUser);

module.exports = router;
