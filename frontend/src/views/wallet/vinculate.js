import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
  Chip,
  TextField,
  Modal,
  Fade,
  Backdrop,
  Stack,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning"; // Importa el ícono de advertencia

// Importa los logos directamente
import paypalLogo from "../../assets/images/pay/paypal.png";
import mercadoPagoLogo from "../../assets/images/pay/mp.png";
import payoneerLogo from "../../assets/images/pay/payoneer.png";
import skillLogo from "../../assets/images/pay/skrill.png"; // Logo de Skill
import payuLogo from "../../assets/images/pay/payu.png"; // Logo de PayU
import epaycoLogo from "../../assets/images/pay/epayco.png"; // Logo de ePayco

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
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleConnect = (url) => {
    if (url.includes("mercadopago") && (!credentials.username || !credentials.password)) {
      alert("Por favor, completa usuario y contraseña para conectar Mercado Pago.");
      return;
    }
    setModalOpen(true); // Abre el modal
  };

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

                {method.name === "Mercado Pago" && (
                  <>
                    <TextField
                      label="Usuario"
                      name="username"
                      value={credentials.username}
                      onChange={handleInputChange}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      label="Contraseña"
                      name="password"
                      type="password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  </>
                )}

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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: 2,
              p: 4,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <WarningIcon sx={{ color: "#f44336", fontSize: 40 }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Importante
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ mb: 2 }}>
              El proceso de vinculación puede demorar hasta 24 horas. En este transcurso, nuestro
              equipo realizará la vinculación de su billetera y, de acuerdo a ello, puede llegarle
              un correo de parte de Mercado Pago dándole aviso. Le recomendamos que, luego de la
              vinculación, cambie su contraseña para evitar inconvenientes.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="outlined"
                onClick={() => setModalOpen(false)}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#000",
                  borderColor: "#000",
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  setModalOpen(false);
                  alert("Continuar con el proceso...");
                }}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  backgroundColor: "#97C703",
                  "&:hover": { backgroundColor: "#82AF02" },
                }}
              >
                Continuar
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default PaymentCards;
