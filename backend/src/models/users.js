const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
         type: String 
        },
    lastname: {
         type: String
         },
    email: {
         type: String,
        unique: true
        },
    password: { 
        type: String
     },
    country: { 
        type: String 
    },
    status: {
         type: String, 
         enum: ['active', 'inactive']
         },
    whatsapp: {
         type: String, 
         required: false 
        }, 
    wallet: {
        mercadoPago: {
            accessToken: { type: String },
            refreshToken: { type: String },
            userId: { type: String },
            expiresIn: { type: Number },
            linkedAt: { type: Date },
        },
    },
     
    
},{
    timestamps: true
});


const User = mongoose.model('User', userSchema);
module.exports = User;
