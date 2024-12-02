const express = require("express");
const router = express.Router();
const mercadopagoController = require("../../../controllers/wallets/mercadoPago/mercadoPagoController");

router.get("/mercadopago/callback", mercadopagoController.callback);
router.get("/wallet-status", mercadopagoController.walletStatus);

module.exports = router;
