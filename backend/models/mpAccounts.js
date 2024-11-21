const mongoose = require('mongoose');

// Esquema para almacenar los tokens de Mercado Pago de cada vendedor
const vendedorSchema = new mongoose.Schema({
  vendedor_id: { type: String, required: true, unique: true }, // ID del vendedor
  access_token: { type: String, required: true },  // Token de acceso
  refresh_token: { type: String, required: true }, // Token de actualización
  date_updated: { type: Date, default: Date.now },  // Fecha de actualización de los tokens
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);
module.exports = Vendedor;
