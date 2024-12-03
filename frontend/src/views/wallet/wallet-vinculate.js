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
  
      if (code && state) {
        try {
          const decodedState = JSON.parse(atob(state));
          const { userId, token } = decodedState;
  
          if (!userId || !token) {
            throw new Error("El token `state` no contiene `userId` o `token` válido.");
          }
  
          localStorage.setItem('userId', userId);
          console.log("User ID guardado en localStorage:", userId);
  
          const response = await axios.get(
            `https://vigilant-prosperity-production.up.railway.app/api/mercadopago/callback?code=${code}&state=${state}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          const { redirectUrl } = response.data;
          if (redirectUrl) {
            window.location.href = redirectUrl;
          }
        } catch (error) {
          console.error("Error al procesar el callback:", error.message);
          alert("Error al procesar la solicitud.");
        }
      } else {
        console.error("Faltan parámetros 'code' o 'state' en la URL.");
        alert("Faltan parámetros necesarios en la URL.");
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
