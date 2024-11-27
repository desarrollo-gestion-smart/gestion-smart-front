// src/views/mercadopago/MercadoPagoCallback.js
import React, { useEffect } from "react";
import axios from "axios";
import { Typography, Box, CircularProgress } from "@mui/material";

const MercadoPagoCallback = () => {
  useEffect(() => {
    const processCallback = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");
      const state = query.get("state");

      console.log("Callback montado.");
      console.log("Code:", code);
      console.log("State:", state);

      if (code && state) {
        try {
          const token = localStorage.getItem("token");

          if (!token) {
            console.error("Token no encontrado.");
            window.location.href = "/mercadopago/error";
            return;
          }

          // Enviar la solicitud GET al backend
          const response = await axios.get(
            `https://gestion-smart-front-production.up.railway.app/api/mercadopago/callback?code=${code}&state=${state}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Respuesta del backend:", response.data);

          // Redirigir al usuario según la URL proporcionada por el backend
          if (response.data.redirectUrl) {
            window.location.href = response.data.redirectUrl;
          } else {
            console.error("No se recibió una URL de redirección válida.");
            window.location.href = "/mercadopago/error";
          }
        } catch (error) {
          console.error("Error al procesar el callback:", error.response?.data || error.message);
          window.location.href = "/mercadopago/error";
        }
      } else {
        console.log("Faltan parámetros 'code' o 'state' en la URL.");
        window.location.href = "/mercadopago/error";
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
