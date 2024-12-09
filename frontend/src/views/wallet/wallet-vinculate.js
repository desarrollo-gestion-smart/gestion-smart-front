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
              // Enviar los parámetros `code` y `state` al backend
              const response = await axios.post(
                "https://vigilant-prosperity-production.up.railway.app/api/mercadopago/callback",
                { code, state }
              );
    
              const { redirectUrl } = response.data;
    
              if (redirectUrl) {
                window.location.href = redirectUrl;
              }
            } catch (error) {
              console.error("Error al procesar el callback:", error.message);
              alert("Error al procesar la solicitud. Por favor, inténtelo de nuevo.");
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
