// src/views/mercadopago/MercadoPagoCallback.js
import React, { useEffect } from "react";
import axios from "axios";
import { Typography, Box, CircularProgress } from "@mui/material";

const MercadoPagoCallback = () => {
  useEffect(() => {
    const processCallback = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get('code');
      const state = query.get('state');

      console.log("MercadoPagoCallback mounted.");
      console.log("Code:", code);
      console.log("State:", state);

      if (code && state) {
        try {
          const token = localStorage.getItem("token"); // Obtener el token JWT del localStorage

          // if (!token) {
          //   // console.error("Token no encontrado en localStorage.");
          //   window.location.href = '/mercadopago/error';
          //   return;
          // }

          // Enviar una solicitud POST al backend con los parámetros
          const response = await axios.post('/api/mercadopago/callback', { code, state }, {
            headers: {
              Authorization: `Bearer ${state}`,
            },
          });

          console.log("Respuesta del backend:", response.data);

          const { redirectUrl } = response.data;
          window.location.href = redirectUrl; // Redirigir al usuario

        } catch (error) {
          console.error('Error al procesar el callback de MercadoPago:', error.response?.data || error.message);
          window.location.href = '/mercadopago/error';
        }
      } else {
        console.log("Faltan parámetros 'code' o 'state' en la URL.");
        window.location.href = '/mercadopago/error';
      }
    };

    processCallback();
  }, []);

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Procesando tu pago....
      </Typography>
    </Box>
  );
};

export default MercadoPagoCallback;
