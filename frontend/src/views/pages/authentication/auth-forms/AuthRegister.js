import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

const JWTRegister = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Debe ser un correo válido').max(255).required('El correo es obligatorio'),
        password: Yup.string().max(255).required('La contraseña es obligatoria'),
        firstName: Yup.string().max(255).required('El nombre es obligatorio'),
        lastName: Yup.string().max(255).required('El apellido es obligatorio'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        console.log('[DEBUG] Enviando datos de registro:', values);
        console.log(`Datos de login enviados:`, {
          email: values.email,
          password: values.password
        });
        try {
          const response = await fetch('https://vigilant-prosperity-production.up.railway.app/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstname: values.firstname, // Ajustar a `firstname`
              lastname: values.lastname,   // Ajustar a `lastname`
              email: values.email,
              password: values.password,
          }),
          });

          const data = await response.json();
          console.log('[DEBUG] Respuesta del servidor:', data);

          if (response.ok) {
            setStatus({ success: true });
            setSubmitting(true);
            setSuccessMessage('Usuario registrado exitosamente');
            setErrorMessage('');
          } else {
            setErrors({ submit: data.message || 'Error en la respuesta del servidor' });
            setSubmitting(false);
            console.log('[DEBUG] Error de registro:', data.message);
          }
        } catch (error) {
          setErrors({ submit: 'Error al registrar el usuario' });
          setSubmitting(false);
          console.error('[DEBUG] Error al enviar los datos:', error);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit} {...others}>
          <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre"
                margin="normal"
                name="firstName"
                type="text"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Apellido"
                margin="normal"
                name="lastName"
                type="text"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Correo electrónico"
            margin="normal"
            name="email"
            type="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            label="Contraseña"
            margin="normal"
            name="password"
            type="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Registrarme
          </Button>

          {successMessage && (
            <Typography color="success.main" variant="body2" sx={{ mt: 2 }}>
              {successMessage}
            </Typography>
          )}

          {errors.submit && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {errors.submit}
            </Typography>
          )}
        </form>
      )}
    </Formik>
  );
};

export default JWTRegister;
