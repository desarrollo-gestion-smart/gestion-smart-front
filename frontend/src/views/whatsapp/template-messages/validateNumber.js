import React, { useState } from 'react';
import { TextField, Button, Box, Typography, ThemeProvider, createTheme } from '@mui/material';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#25D366', // WhatsApp green
    },
    secondary: {
      main: '#34B7F1', // WhatsApp blue
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const WhatsAppVerifier = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [pairingCode, setPairingCode] = useState('');
  const [invitation, setInvitation] = useState('');

  const handleSubmit = async () => {
    if (phoneNumber) {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError(true);
        setMessage('No se ha encontrado el ID de usuario en el almacenamiento.');
        return;
      }

      const number = phoneNumber; // Se envía sin el '+'

      console.log('Información que se va a enviar:', { id: userId, number });

      try {
        const verifyRequest = fetch('https://backend-api-whatsapp-production.up.railway.app/api/v1/instances/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId, number }),
        });

        const verifyResponse = await verifyRequest;
        const verifyData = await verifyResponse.json();

        if (verifyResponse.ok && verifyData) {
          setSuccess(true);
          setMessage(`El código ha sido enviado a ${number}`);
          setPairingCode(verifyData.message.pairingCode || 'No pairing code');
          setInvitation(verifyData.invitation || '');
        } else {
          setError(true);
          setMessage(verifyData?.error || 'Hubo un error al enviar el código.');
        }
      } catch (error) {
        setError(true);
        setMessage('Hubo un error con la conexión al servidor.');
        console.error(error);
      }
    } else {
      setError(true);
      setMessage('Por favor, ingresa un número de WhatsApp válido.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#97C703',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          Verificar número de WhatsApp
        </Typography>
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            padding: '30px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              border: '2px solid #ddd',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '20px',
              backgroundColor: '#fafafa',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                marginRight: '8px',
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#555',
              }}
            >
              +
            </Typography>
            <TextField
              placeholder="ej: 541123654789"
              variant="standard"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))} // Solo números
              fullWidth
              InputProps={{
                disableUnderline: true,
                style: { fontSize: '16px', padding: '5px 0' },
              }}
              sx={{
                '& input::placeholder': {
                  fontStyle: 'italic',
                  color: '#aaa',
                },
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            sx={{
              padding: '10px 0',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '5px',
            }}
          >
            Enviar Código
          </Button>
          {message && (
            <Box
              sx={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#F9F9F9',
                color: '#000',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            >
              <Typography variant="body1">{message}</Typography>
            </Box>
          )}
          {pairingCode && (
            <Box
              sx={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#F9F9F9',
                color: '#000',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            >
              <Typography variant="h6">Ingrese este codigo en su Whatsapp: {pairingCode}</Typography>
            </Box>
          )}
          {invitation && (
            <Box
              sx={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#F9F9F9',
                color: '#000',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            >
              <Typography variant="h6">
                <a href={invitation} target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none' }}>
                  Invitación WhatsApp
                </a>
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default WhatsAppVerifier;
