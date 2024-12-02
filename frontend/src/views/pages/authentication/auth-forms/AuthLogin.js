import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Typography,
} from '@mui/material';

const JWTLogin = () => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Debe ser un email válido').max(255).required('El email es obligatorio'),
                password: Yup.string().max(255).required('La contraseña es obligatoria'),
            })}
            onSubmit={async (values, { setErrors, setSubmitting }) => {
                try {
                    const response = await fetch('https://vigilant-prosperity-production.up.railway.app/api/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(values),
                    });

                    if (response.ok) {
                        const { token, user } = await response.json();
                        console.log('Token recibido:', token);

                        // Guardar el token en localStorage
                        if (token) {
                            localStorage.setItem('token', token);
                            console.log('Token guardado en localStorage:', token);

                            // Redirigir al dashboard
                            navigate('/dashboard/default');
                        } else {
                            setErrors({ submit: 'No se recibió un token válido. Inténtalo de nuevo.' });
                        }
                    } else {
                        setErrors({ submit: 'Usuario o contraseña incorrectos.' });
                    }

                    setSubmitting(false);
                } catch (err) {
                    console.error('Error en el login:', err.message);
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <FormControl
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                        sx={{ marginBottom: '16px' }}
                    >
                        <InputLabel>Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText>{errors.email}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                    >
                        <InputLabel>Contraseña</InputLabel>
                        <OutlinedInput
                            id="password"
                            type="password"
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        {touched.password && errors.password && (
                            <FormHelperText>{errors.password}</FormHelperText>
                        )}
                    </FormControl>

                    {errors.submit && (
                        <Box sx={{ marginTop: '16px' }}>
                            <Typography color="error">{errors.submit}</Typography>
                        </Box>
                    )}

                    <Box sx={{ marginTop: '16px' }}>
                        <Button
                            color="primary"
                            disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Iniciar Sesión
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default JWTLogin;
