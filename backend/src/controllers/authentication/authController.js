const User = require ('../../models/users')
const bcrypt = require('bcrypt')
const createAccesToken = require ('../../libs/jwt')
const register = async (req,res) =>{
    const{
        firstname,
        lastname,
         email,
         password
        } = req.body

       try {
        passwordHash = await bcrypt.hash(password,10)
        const newUser= new User({
            firstname,
            lastname,
            email,
            password: passwordHash,
         })
 
        
       
      const userSaved =   await newUser.save()
    
    
     const token = await createAccesToken ({ id: userSaved._id})
     res.cookie('token', token, {
        httpOnly: false, // Ya está correcto para este caso
        secure: true, // Mantenlo si usas HTTPS
        sameSite: 'None', // Cambia a Lax o None si estás trabajando en dominios diferentes
      
     })
    res.json({

        id: userSaved._id,
        firstname: userSaved.firstname,
        lastname: userSaved.lastname,
        email: userSaved.email,
        createAt:userSaved.createdAt
    })

    } catch (error) {
        res.status(500).json({message: error.message})
        
       }
};
const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userFound = await User.findOne({ email });
  
      if (!userFound) {
        return res.status(400).json({ message: "Usuario no encontrado" });
      }
  
      const isMatch = await bcrypt.compare(password, userFound.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: "Credenciales incorrectas" });
      }
  
      const token = createAccesToken({ id: userFound._id });
  
      console.log('Token generado:', token);
  
      res.json({
        token, // Enviamos el token en la respuesta
        user: {
          id: userFound._id,
          firstname: userFound.firstname,
          lastname: userFound.lastname,
          email: userFound.email,
          createdAt: userFound.createdAt,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };

const logout = async(req,res) =>{
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.send(200).json
}

const profile = async (req,res) => {
const userFound = await User.findById(req.user.id)
if(!userFound) return res.status(400).json ({
    message: "User not found"
});
return res.json({
    id: userFound._id,
    firstname: userFound.firstname,
    lastname: userFound.lastname,
    email: userFound.email,
    createAt:userFound.createdAt
})
}

module.exports = {login, register, logout, profile};