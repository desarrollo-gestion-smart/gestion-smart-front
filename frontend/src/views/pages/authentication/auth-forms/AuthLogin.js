import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    Typography,
    CircularProgress,  // Importar CircularProgress
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import useScriptRef from 'hooks/useScriptRef';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const JWTLogin = ({ loginProp, ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const navigate = useNavigate();

    const [checked, setChecked] = React.useState(true);
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false); // Estado de carga

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Función para almacenar el token y userId en localStorage
    function setItemAndLog(key, value) {
        localStorage.setItem(key, value);
        console.log(`Se ha guardado en localStorage: ${key} = ${value}`);
    }

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
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                setLoading(true);  // Iniciar la carga
                try {
                    const response = await fetch("http://vigilant-prosperity-production.up.railway.app/api/users/login", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: values.email,
                            password: values.password
                        })
                    });

                    const data = await response.json();
                    console.log('Respuesta de la API:', data);  // Verifica toda la respuesta

                    if (response.ok) {
                        const token = data.token || data.accessToken || data.jwt; // Ajusta según el nombre correcto
                        const userId = data.userId; // Asegúrate de que el backend esté devolviendo el `userId`

                        if (token && userId) {
                            // Guarda el token y el userId en localStorage
                            localStorage.setItem('token', token);
                            localStorage.setItem('userId', userId);
                            console.log('Login exitoso, redirigiendo al dashboard');
                            navigate('/dashboard/default');  // Redirigir al dashboard o la página deseada
                        } else {
                            console.log('Token o userId no encontrado en la respuesta de la API.');
                        }
                    } else {
                        setErrors({ submit: data.message || 'Error en el login' });
                        console.log('Credenciales incorrectas');
                    }

                    setStatus({ success: true });
                    setSubmitting(false);
                } catch (err) {
                    console.error('Error al hacer login:', err);
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                } finally {
                    setLoading(false);  // Detener la carga
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
                            label="Contraseña"
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
                                        name="remember"
                                    />
                                }
                                label="Recordar sesión"
                            />
                        </Grid>

                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={isSubmitting || loading}  // Desactivar el botón mientras está cargando
                            >
                                {loading ? <CircularProgress size={24} color="primary" /> : 'Iniciar sesión'}
                            </Button>
                        </Grid>
                    </Grid>

                    {errors.submit && (
                        <Box mt={2} textAlign="center" color="error.main">
                            <Typography variant="h6">{errors.submit}</Typography>
                        </Box>
                    )}
                </form>
            )}
        </Formik>
    );
};

JWTLogin.propTypes = {
    loginProp: PropTypes.func
};

export default JWTLogin;
