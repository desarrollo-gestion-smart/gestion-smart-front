import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
  Chip,
} from "@mui/material";

// Importa los logos directamente
import paypalLogo from "../../assets/images/pay/paypal.png";
import mercadoPagoLogo from "../../assets/images/pay/mp.png";
import payoneerLogo from "../../assets/images/pay/payoneer.png";
import skillLogo from "../../assets/images/pay/skrill.png";
import payuLogo from "../../assets/images/pay/payu.png";
import epaycoLogo from "../../assets/images/pay/epayco.png";

// Lista de métodos de pago
const paymentMethods = [
  {
    name: "Mercado Pago",
    logo: mercadoPagoLogo,
    description: "Conecta tu cuenta de Mercado Pago.",
    connectUrl: "https://www.mercadopago.com.ar/connect",
    available: true,
  },
  {
    name: "PayPal",
    logo: paypalLogo,
    description: "Vincula tu cuenta de PayPal.",
    connectUrl: "https://www.paypal.com/connect",
    available: false,
  },
  {
    name: "Payoneer",
    logo: payoneerLogo,
    description: "Conecta tu cuenta de Payoneer.",
    connectUrl: "https://connect.stripe.com/oauth",
    available: false,
  },
  {
    name: "Skill",
    logo: skillLogo,
    description: "Conecta tu cuenta de Skill.",
    connectUrl: "https://www.skill.com/connect",
    available: false,
  },
  {
    name: "PayU",
    logo: payuLogo,
    description: "Vincula tu cuenta de PayU.",
    connectUrl: "https://www.payu.com/connect",
    available: false,
  },
  {
    name: "ePayco",
    logo: epaycoLogo,
    description: "Conecta tu cuenta de ePayco.",
    connectUrl: "https://www.epayco.com/connect",
    available: false,
  },
];

const PaymentCards = () => {
  const [walletStatus, setWalletStatus] = useState(null); // Estado inicial de la wallet
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const checkWalletStatus = async () => {
      const token = localStorage.getItem("token"); // Obtener el token desde el localStorage

      try {
        const response = await fetch(
          "https://gestion-smart.com/api/mercadopago/wallet-status",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        

        if (!response.ok) {
          throw new Error("Error al verificar la wallet");
        }

        const data = await response.json();

        setWalletStatus(data); // Guardar el estado de la wallet
      } catch (error) {
        console.error("Error al obtener el estado de la wallet:", error.message);
      } finally {
        setLoading(false); // Deshabilitar el estado de carga
      }
    };

    checkWalletStatus();
  }, []);


  useEffect(() => {
    const processCallback = async () => {
        const query = new URLSearchParams(window.location.search);
        const code = query.get('code');
        const state = query.get('state');

        if (code && state) {
            try {
                // Enviar el código y estado al backend para procesarlos
                const response = await axios.post('/api/mercadopago/callback', {
                  code,
                  state,
              });
                console.log(response)
                // Supongamos que el backend responde con una URL a la que redirigir
                const { redirectUrl } = response.data;
                window.location.href = "redirectUrl"; // Redirección usando window.location
                console.log(response.data)
            } catch (error) {
                console.error('Error al procesar el callback de MercadoPago:', error);
                // Redirigir a una página de error utilizando window.location
                // window.location.href = '/mercadopago/error';
            }
        } else {
            // Parámetros faltantes, redirigir a error
            // window.location.href = '/mercadopago/error';
        }
    };

    processCallback();
}, []);

  const handleConnect = async (url) => {
    if (url.includes("mercadopago")) {
      const clientId = "275793137258734";
      const redirectUri = "https://gestion-smart.com/vinculate/mercadopago/callback";
      const token = localStorage.getItem("token");

      const authorizationUrl = `https://auth.mercadopago.com/authorization?client_id=${clientId}&response_type=code&platform_id=mp&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&state=${encodeURIComponent(token)}`;

      const popup = window.open(authorizationUrl, "_blank");

      // Verifica cierre de ventana
      const pollTimer = setInterval(() => {
        if (popup.closed) {
          clearInterval(pollTimer);
          window.location.reload(); // Refresca la página para actualizar el estado
        }
      }, 500);
    }
  };

  if (loading) {
    return <Typography variant="h6">Cargando...</Typography>;
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={3} justifyContent="center">
        {paymentMethods.map((method, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.3s ease",
                opacity: method.available ? 1 : 0.6,
                pointerEvents: method.available ? "auto" : "none",
                position: "relative",
                "&:hover": method.available ? { transform: "scale(1.05)" } : {},
              }}
            >
              {!method.available && (
                <Chip
                  label="Próximamente"
                  sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#97C703",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                />
              )}
              <CardMedia
                component="img"
                height="140"
                image={method.logo}
                alt={method.name}
                sx={{
                  objectFit: "contain",
                  marginTop: "10px",
                  ...(method.name === "ePayco" && { width: "60%", margin: "auto" }),
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                  {method.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {method.description}
                </Typography>

                {walletStatus?.walletLinked && method.name === "Mercado Pago" ? (
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ fontWeight: "bold", mt: 2 }}
                  >
                    Vinculado <br /> ID: {walletStatus.mercadoPagoId}
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleConnect(method.connectUrl)}
                    disabled={!method.available}
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      padding: "8px 16px",
                    }}
                  >
                    Vincular cuenta
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PaymentCards;
