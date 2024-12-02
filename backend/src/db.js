
const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://desarrollo:ADelgado.dev@cluster0.xvocm.mongodb.net/gestionSmart?retryWrites=true&w=majority';

 const connectDB = async () =>{ 

try{
    await mongoose.connect(MONGODB_URI)
   console.log('Conectado a MongoDB')
} catch(error) {
    console.error('Error al conectar a MongoDB:')
};

};


module.exports = connectDB;
