import React, { useState } from 'react';
import { TextField, Button, Box, Typography, ThemeProvider, createTheme, Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

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
});

const countryCodes = [
  { "code": "+1", "label": "USA/Canada (+1)" },
  { "code": "+44", "label": "UK (+44)" },
  { "code": "+91", "label": "India (+91)" },
  { "code": "+81", "label": "Japan (+81)" },
  { "code": "+54", "label": "Argentina (+54)" },
  { "code": "+55", "label": "Brazil (+55)" },
  { "code": "+56", "label": "Chile (+56)" },
  { "code": "+57", "label": "Colombia (+57)" },
  { "code": "+58", "label": "Venezuela (+58)" },
  { "code": "+52", "label": "Mexico (+52)" },
];


const WhatsAppVerifier = () => {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (phoneNumber && countryCode) {
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;

      try {
        const response = await fetch(`http://localhost:5001/api/verify/${fullPhoneNumber}`, {
          method: 'POST',
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess(true);
          setMessage(`El código ha sido enviado a ${fullPhoneNumber}`);
          navigate('/whatsapp/verificationCode', { state: { phoneNumber: fullPhoneNumber } }); // Redirigir a la página de verificación
        } else {
          setError(true);
          setMessage(data.error || 'Hubo un error al enviar el código.');
        }
      } catch (error) {
        setError(true);
        setMessage('Hubo un error con la conexión al servidor.');
      }
    } else {
      setError(true);
      setMessage('Por favor, ingresa un número de WhatsApp válido con el código de país.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ backgroundColor: 'background.default', minHeight: '100vh', padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Verificar número de WhatsApp</Typography>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Autocomplete
            value={countryCode ? { code: countryCode, label: `Selecciona tu país` } : null}
            onChange={(event, newValue) => setCountryCode(newValue ? newValue.code : '')}
            options={[{ code: '', label: 'Selecciona tu país' }, ...countryCodes]}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label="Selecciona tu país" variant="outlined" fullWidth />}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Número de WhatsApp"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Enviar Código
          </Button>
          {message && <Box sx={{ marginTop: '20px', color: success ? 'green' : 'red' }}><Typography variant="body1">{message}</Typography></Box>}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default WhatsAppVerifier;