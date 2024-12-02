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
  CircularProgress,
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

  // Función para verificar el estado de la billetera
  

  useEffect(() => {
    const checkWalletStatus = async () => {
      const token = localStorage.getItem("token");
      console.log("Token obtenido:", token);

      if (!token) {
        console.error("Token no disponible en localStorage.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://vigilant-prosperity-production.up.railway.app/api/mercadopago/wallet-status",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Respuesta de la API:", response.data);

        if (response.status === 200 && response.data.walletStatus) {
          setWalletStatus(response.data.walletStatus); // Ajuste aquí
        } else {
          console.error("Estructura inesperada en la respuesta de la API:", response.data);
        }
      } catch (error) {
        console.error("Error al obtener el estado de la wallet:", error);
        // Detalles adicionales para la depuración
        if (error.response) {
          console.error("Respuesta del servidor:", error.response);
        } else if (error.request) {
          console.error("No se recibió respuesta del servidor:", error.request);
        } else {
          console.error("Error al configurar la solicitud:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    checkWalletStatus();
  }, []);
  // Lógica para conectar Mercado Pago
  const handleConnect = (url) => {
    if (url.includes("mercadopago")) {
      const clientId = "275793137258734";
      const redirectUri =
        "https://gestion-smart-testing.com/vinculate/mercadopago/callback";
      const token = localStorage.getItem("token");

      const authorizationUrl = `https://auth.mercadopago.com/authorization?client_id=${clientId}&response_type=code&platform_id=mp&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&state=${encodeURIComponent(token)}`;

      const popup = window.open(authorizationUrl, "_blank");

      if (!popup) {
        alert("Por favor, habilita las ventanas emergentes en tu navegador.");
        return;
      }

      const pollTimer = setInterval(() => {
        if (popup.closed) {
          clearInterval(pollTimer);
          window.location.reload();
        }
      }, 500);
    }
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          Cargando...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      {loading ? (
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Cargando...
          </Typography>
        </Box>
      ) : (
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
                    ...(method.name === "ePayco" && {
                      width: "60%",
                      margin: "auto",
                    }),
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {method.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {method.description}
                  </Typography>

                  {walletStatus?.accessToken && method.name === "Mercado Pago" ? (
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ fontWeight: "bold", mt: 2 }}
                    >
                      Vinculado <br /> ID: {walletStatus.userId} <br />
                      Fecha de vinculación:{" "}
                      {walletStatus.linkedAt
                        ? new Date(walletStatus.linkedAt).toLocaleDateString()
                        : "Fecha no disponible"}
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
      )}
    </Box>
  );
};

export default PaymentCards;
