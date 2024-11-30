const User = require('../models/users');
const nodemailer = require('nodemailer');

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  service: 'Ferozo',
  auth: {
    user: 'desarrollo@gestion-smart-web.com',
    pass: 'Ezequiel5454@',
  },
});

// Endpoint para registrar un usuario
async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Validar los campos recibidos
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }

    // Comprobar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'El correo electrónico ya está registrado' });
    }

    // Crear el nuevo usuario (no es necesario hacer el hashing de la contraseña, el modelo lo hace automáticamente)
    const newUser = new User({ firstName, lastName, email, password });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    // Enviar correo de confirmación (opcional)
    const mailOptions = {
      from: 'desarrollo.gestion.smart@gmail.com',
      to: email,
      subject: 'Registro exitoso',
      text: `Hola ${firstName} ${lastName},\n\nTu cuenta ha sido creada exitosamente.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar correo:', error);
      } else {
        console.log('Correo enviado:', info.response);
      }
    });

    return res.status(201).json({ success: true, message: 'Usuario registrado correctamente' });

  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
}

module.exports = { registerUser };
