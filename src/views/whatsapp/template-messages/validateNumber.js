import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

const VerifyWhatsAppNumber = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await axios.post('http://localhost:5001/verify-number', { number });
      setResult(response.data);
    } catch (error) {
      setResult({ exists: false, message: "Error al verificar el número" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>Verificar Número de WhatsApp Business</Typography>
      <TextField
        fullWidth
        label="Número de WhatsApp"
        variant="outlined"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleVerify}
        disabled={loading || !number}
      >
        {loading ? 'Verificando...' : 'Verificar Número'}
      </Button>
      {result && (
        <Alert severity={result.exists ? 'success' : 'error'} sx={{ mt: 2 }}>
          {result.message}
        </Alert>
      )}
    </Box>
  );
};

export default VerifyWhatsAppNumber;
