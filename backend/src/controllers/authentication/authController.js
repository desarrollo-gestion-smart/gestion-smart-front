const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users');
const dotenv = require('dotenv')
// Registro de usuario


dotenv.config()
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El email ya está registrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            status: 'active',
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: {
                id: savedUser._id.toString(),
                firstname: savedUser.firstname,
                lastname: savedUser.lastname,
                email: savedUser.email,
            },
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error en el registro', error: err.message });
    }
};

// Logueo de usuario
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar usuario por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Comparar contraseñas
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Generar token JWT con el _id convertido a string
        const token = jwt.sign(
            { userId: user._id.toString(), email: user.email }, // Convertir _id a string
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        
        return res.status(200).json({
            token,
            userId: user._id.toString(), 
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error en el logueo', error: err.message });
    }
};
module.exports = {
    registerUser,
    loginUser,
};
