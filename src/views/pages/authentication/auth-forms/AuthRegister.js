import React, { useState } from 'react';
import { useDispatch } from 'store';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  Modal
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

const JWTRegister = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Debe ser un correo válido').max(255).required('El correo es obligatorio'),
          password: Yup.string().max(255).required('La contraseña es obligatoria'),
          firstName: Yup.string().max(255).required('El nombre es obligatorio'),
          lastName: Yup.string().max(255).required('El apellido es obligatorio')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const response = await fetch('http://localhost:5001/api/users/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
              }),
            });

            if (!response.ok) {
              throw new Error('Error en la respuesta del servidor');
            }

            const data = await response.json();

            if (data.success) {
              setStatus({ success: true });
              setSubmitting(false);
              setOpenModal(true);  
            } else {
              setErrors({ submit: 'Error al registrar el usuario' });
              setSubmitting(false);
            }
          } catch (error) {
            console.error('Error al registrar el usuario:', error);
            setErrors({ submit: 'Error al registrar el usuario' });
            setSubmitting(false);
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
                  sx={{ ...theme.typography.customInput }}
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
                  sx={{ ...theme.typography.customInput }}
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
            {errors.submit && (
              <Typography color="error" variant="body2">
                {errors.submit}
              </Typography>
            )}
          </form>
        )}
      </Formik>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Registro exitoso
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Tu cuenta ha sido creada, te enviamos un mail para confirmar tu registro
          </Typography>
          <Button onClick={handleCloseModal} color="primary" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default JWTRegister;
