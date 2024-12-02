import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  CircularProgress,
} from '@mui/material';

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
  const [loading, setLoading] = useState(false);
  const [checkingNumber, setCheckingNumber] = useState(false);

  const handleSubmit = async () => {
    if (phoneNumber) {
      // Extraer ID de usuario desde localStorage
      const user = localStorage.getItem('userId');
      if (!user) {
        console.error('[ERROR] No se encontró el ID del usuario en localStorage.');
        setError(true);
        setMessage('No se ha encontrado información del usuario en el almacenamiento.');
        return;
      }

      let id;
      try {
        id = JSON.parse(user); // Intenta parsear el JSON
      } catch (e) {
        id = user; // Si no es un JSON, usa el valor tal como está
      }

      console.log('[DEBUG] ID extraído del localStorage:', id);

      if (!id) {
        console.error('[ERROR] ID del usuario no está disponible.');
        setError(true);
        setMessage('El ID del usuario no está disponible.');
        return;
      }

      console.log('User ID extraído:', id);

      setCheckingNumber(true);

      try {
        // Construir el payload para la solicitud
        const payload = { number: phoneNumber, id };
        console.log('[DEBUG] Payload que se enviará a la API:', payload);

        // Endpoint al que se enviará la solicitud
        const endpoint = 'https://backend-api-whatsapp-production.up.railway.app/api/v1/instances/create';
        console.log('[INFO] Endpoint de la API:', endpoint);

        // Llamada a la API
        const verifyResponse = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        // Respuesta de la API
        const verifyData = await verifyResponse.json();
        console.log('[DEBUG] Respuesta recibida de la API:', verifyData);

        if (verifyResponse.ok && verifyData) {
          const pairingCode =
            verifyData.message?.pairingCode ||
            verifyData.pairingCode ||
            'Código no disponible';
          setPairingCode(pairingCode);
          setInvitation(verifyData.invitation || '');
          setSuccess(true);
          setMessage(`El código ha sido enviado a ${phoneNumber}`);
        } else {
          console.error('[ERROR] La API respondió con un error:', verifyData);
          setError(true);
          setMessage(verifyData?.error || 'Hubo un error al enviar el código.');
        }
      } catch (error) {
        console.error('[ERROR] Error de conexión con la API:', error);
        setError(true);
        setMessage('Hubo un error con la conexión al servidor.');
      } finally {
        setLoading(false);
        setCheckingNumber(false);
      }
    } else {
      console.error('[ERROR] Número de WhatsApp no válido.');
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
              onChange={(e) =>
                setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))
              }
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
            disabled={loading || checkingNumber}
          >
            {loading || checkingNumber ? (
              <>
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-12px',
                    marginTop: '-12px',
                  }}
                />
                <Typography
                  variant="button"
                  sx={{ marginLeft: '35px' }}
                >
                  Esperando respuesta...
                </Typography>
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
              <Typography variant="h6">
                Ingrese este código en su WhatsApp: {pairingCode}
              </Typography>
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
                <a
                  href={invitation}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#000', textDecoration: 'none' }}
                >
                  Haga clic aquí para unirse a la invitación.
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
