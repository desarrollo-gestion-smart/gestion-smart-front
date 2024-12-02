import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const JWTLogin = ({ loginProp, ...others }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Debe ser un email válido').max(255).required('El Email / Usuario es obligatorio'),
                password: Yup.string().max(255).required('La contraseña es obligatoria')
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
            
                            // Opcional: Guardar datos adicionales del usuario
                            localStorage.setItem('userId', user.id);
                            console.log('Información del usuario guardada:', user);
            
                            // Redirigir al dashboard
                            navigate('/dashboard/default');
                        } else {
                            setErrors({ submit: 'No se pudo iniciar sesión. Inténtalo de nuevo.' });
                        }
                    } else {
                        setErrors({ submit: 'Usuario o contraseña incorrectos' });
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
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                        sx={{ ...theme.typography.customInput, color: '#000' }}
                    >
                        <InputLabel htmlFor="outlined-adornment-email-login">Correo / Usuario</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                            sx={{ color: '#000' }}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        sx={{ ...theme.typography.customInput, marginTop: '10px', color: '#000' }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password-login">Contraseña</InputLabel>
                        <OutlinedInput
                            sx={{ color: '#000' }}
                            id="outlined-adornment-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                        {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.password}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Mantenerme Logueado"
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="subtitle1"
                                component="a"
                                href="/pages/forgot-password/forgot-password3"
                                color="secondary"
                                sx={{ textDecoration: 'none' }}
                            >
                                ¿Olvidaste tu contraseña?
                            </Typography>
                        </Grid>
                    </Grid>

                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}
                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button color="secondary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                                Iniciar Sesión
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

JWTLogin.propTypes = {
    loginProp: PropTypes.number
};

export default JWTLogin;
