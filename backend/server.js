const express = require('express');
const cors = require('cors');
const mercadoPagoRoutes = require('./src/routes/wallets/mercadoPago/mercadoPagoRoutes')
const connectDB = require ('./src/db')
const authRoutes = require('./src/routes/authentication/auth.routes')
const app = express();
const morgan = require ('morgan')
const cookieParser = require ('cookie-parser')

app.use(
  cors({
    origin: [
      "https://gestion-smart.com",
      "https://gestion-smart-testing.com",
      "http://vigilant-prosperity-production.up.railway.app",
      "https://vigilant-prosperity-production.up.railway.app",
      "https://gestion-smart-testing.com/",
      "http://localhost:3000",  // El frontend local
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],  
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,  
  })
);


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

// base de datos
//autenticaciones
app.use('/api',authRoutes);





// Rutas existentes
// app.use('/api/users', authRoutes);
// app.get('/api/users', getUsers);
// app.use('/api', clientRoutes);


// uso de mercado pago
app.use("/api/mercadopago", mercadoPagoRoutes);

module.exports = app