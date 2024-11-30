// const bcrypt = require('bcrypt');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const jwtSecret = 'tu_secreto_jwt';

async function loginUser(req, res) {
  const { email, password } = req.body;

  console.log('[DEBUG] Datos recibidos del login:', { email, password });

  try {
    // Verificar que se recibieron los campos
    if (!email || !password) {
      console.log('[DEBUG] Campos faltantes en login');
      return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
    }

    // Buscar el usuario por correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      console.log('[DEBUG] Usuario no encontrado');
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña proporcionada con el hash almacenado
    // const isMatch = await bcrypt.compare(password, user.password);
    console.log('[DEBUG] password:', password);
    console.log('[DEBUG] password user:', user.password);
    // console.log('[DEBUG] Resultado de la comparación de contraseñas:', isMatch);

    // Si las contraseñas no coinciden
    // if (!isMatch) {
    //   console.log('[DEBUG] Contraseña incorrecta');
    //   return res.status(400).json({ message: 'Contraseña incorrecta' });
    // }

    // Si la contraseña es correcta, generar el token
    const payload = {
      id: user._id,
      email: user.email,
      status: user.status,
    };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
    console.log('[DEBUG] Token JWT generado:', token);

    // Devolver el token al usuario
    return res.json({
      message: 'Login exitoso',
      token,
      userId: user._id,
      email: user.email,
      status: user.status,
    });

  } catch (error) {
    console.error('[ERROR] Error en el login:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = { loginUser };
