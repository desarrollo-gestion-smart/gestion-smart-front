import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Grid } from '@mui/material';

const AuthLogin = ({ mockCredentials }) => {
    const navigate = useNavigate();

    // Estado para almacenar los valores ingresados
    const [values, setValues] = useState({
        email: 'info@codedthemes.com',
        password: '123456'
    });

    // Estado para manejar los errores de autenticación
    const [error, setError] = useState('');

    // Manejar el cambio en los campos de texto
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar si las credenciales coinciden con las mockeadas
        if (values.email === mockCredentials.email && values.password === mockCredentials.password) {
            // Redirigir a /dashboard si las credenciales son correctas
            navigate('/dashboard');
        } else {
            // Mostrar error si las credenciales son incorrectas
            setError('Email o contraseña incorrectos');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Contraseña"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Grid>
                {error && (
                    <Grid item xs={12}>
                        <Typography color="error">{error}</Typography>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Iniciar sesión
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default AuthLogin;
