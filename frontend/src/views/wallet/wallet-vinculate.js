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

      console.log("MercadoPagoCallback mounted.");
      console.log("Code:", code);
      console.log("State:", state);

      if (code && state) {
        try {
          const token = localStorage.getItem("token"); // Obtener el token JWT del localStorage

          if (!token) {
            console.error("Token no encontrado en localStorage.");
            // window.location.href = "/mercadopago/error"; // Redirigir a la página de error
            return;
          }

          // Enviar una solicitud GET al backend con los parámetros en la URL y el encabezado de autenticación
          const response = await axios.get(
            `https://vigilant-prosperity-production.up.railway.app/api/mercadopago/callback?code=${code}&state=${state}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Agregar token JWT en el encabezado
              },
            }
          );

                    console.log("Respuesta del backend:", response.data);
                   const { redirectUrl } = response.data;
                   console.log("Redirect URL:", redirectUrl);

          
          // Redirigir al usuario en la misma pestaña
          if (redirectUrl) {
            window.location.href = redirectUrl; // Redirigir al usuario a la URL proporcionada
          }
        } catch (error) {
          console.error(
            "Error al procesar el callback de MercadoPago:",
            error.response?.data || error.message
          );
          // window.location.href = "/mercadopago/error"; // Redirigir a la página de error
        }
      } else {
        console.log("Faltan parámetros 'code' o 'state' en la URL.");
        // window.location.href = "/mercadopago/error"; // Redirigir a la página de error
      }
    };

    processCallback();
  }, []);

  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", alignItems: "center", marginTop:'300px' }}>
      <CircularProgress />
      <Typography variant="h5" sx={{ mt: 2 }}>
       Procesando vinculacion
      </Typography>
    </Box>
  );
};

export default MercadoPagoCallback;
