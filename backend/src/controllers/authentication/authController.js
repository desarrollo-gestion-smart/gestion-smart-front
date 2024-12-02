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
     res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Solo en HTTPS en producción
        sameSite: "none", // Permitir cookies cross-origin
        path: "/",
      });
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
const login = async (req,res ) =>{

   const{
       
         email,
         password
        } = req.body

       try {
        const userFound = await User.findOne({email})
       if(!userFound){
        return res.status(400).json({message: "Usuario no encontrado"})
       }
       
       const isMatch = await bcrypt.compare(password, userFound.password)
       if (!isMatch){
        return res.status(400).json({message: "credenciales incorrectas"})
       }
       
        
       
    
    
     const token = await createAccesToken ({ id: userFound._id})
    res.cookie('token',token)
    res.json({

        id: userFound._id,
        firstname: userFound.firstname,
        lastname: userFound.lastname,
        email: userFound.email,
        createAt:userFound.createdAt
    })

    } catch (error) {
        res.status(500).json({message: error.message})
        
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