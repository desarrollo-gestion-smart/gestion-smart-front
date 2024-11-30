import React, { useState } from 'react';
import { TextField, Button, Box, Typography, ThemeProvider, createTheme, CircularProgress } from '@mui/material';

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
  const [loading, setLoading] = useState(false); // Estado de carga
  const [checkingNumber, setCheckingNumber] = useState(false); // Estado de verificación del número

  const handleSubmit = async () => {
    if (phoneNumber) {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError(true);
        setMessage('No se ha encontrado el ID de usuario en el almacenamiento.');
        return;
      }

      setCheckingNumber(true); // Empieza la verificación del número
      const number = phoneNumber; // Se envía sin el '+'

      try {
        // Verificar si el número ya está vinculado
        const checkNumberResponse = await fetch('https://vigilant-prosperity-production.up.railway.app/api/v1/check-number', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ number }),
        });

        const checkNumberData = await checkNumberResponse.json();

        if (checkNumberResponse.ok && checkNumberData.isLinked) {
          setError(true);
          setMessage('Este número ya está vinculado a una cuenta.');
          setCheckingNumber(false);
          return;
        }

        // Si el número no está vinculado, enviamos el código
        setLoading(true); // Activar la carga

        const verifyRequest = fetch('https://vigilant-prosperity-production.up.railway.app/api/v1/instances/create', {
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
      } finally {
        setLoading(false); // Desactivar la carga
        setCheckingNumber(false); // Finaliza la verificación del número
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
              placeholder="ej: 5491123654789"
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
              position: 'relative',
            }}
            disabled={loading || checkingNumber} // Deshabilitar el botón mientras está cargando o verificando
          >
            {loading || checkingNumber ? (
              <>
                <CircularProgress size={24} sx={{ position: 'absolute', left: '50%', top: '50%', marginLeft: '-12px', marginTop: '-12px' }} />
                <Typography variant="button" sx={{ marginLeft: '35px' }}>Esperando respuesta...</Typography>
              </>
            ) : (
              'Enviar Código'
            )}
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
              <Typography variant="h6">Ingrese este código en su WhatsApp: {pairingCode}</Typography>
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
