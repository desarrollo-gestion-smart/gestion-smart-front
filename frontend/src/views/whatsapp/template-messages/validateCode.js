// 'use client'

// import React, { useState } from 'react';
// import {
//   ThemeProvider,
//   createTheme,
//   styled,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Paper
// } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import axios from 'axios';
// import QRCode from 'react-qr-code'; // Asegúrate de importar el componente QRCode
// import { useLocation, useNavigate } from 'react-router-dom';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#97C703',
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
// });

// const Container = styled(Box)(({ theme }) => ({
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'relative',
//   background: '#FFFFFF',
//   '&::before, &::after': {
//     content: '""',
//     position: 'absolute',
//     borderRadius: '50%',
//     background: theme.palette.primary.main,
//     opacity: 0.2,
//   },
//   '&::before': {
//     top: '10%',
//     left: '10%',
//     width: '250px',
//     height: '250px',
//   },
//   '&::after': {
//     bottom: '10%',
//     right: '10%',
//     width: '180px',
//     height: '180px',
//   },
// }));

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   width: '100%',
//   maxWidth: '450px',
//   padding: theme.spacing(5),
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   position: 'relative',
//   zIndex: 1,
// }));

// const CodeInputContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   width: '100%',
//   marginTop: theme.spacing(3),
//   marginBottom: theme.spacing(3),
// }));

// const CodeInput = styled(TextField)(({ theme }) => ({
//   width: '50px',
//   '& input': {
//     textAlign: 'center',
//     fontSize: '1.5rem',
//     padding: theme.spacing(2),
//   },
//   '& .MuiOutlinedInput-root': {
//     borderColor: theme.palette.primary.main,
//     borderRadius: '8px',
//     '&:hover': {
//       borderColor: theme.palette.primary.dark,
//     },
//     '&.Mui-focused': {
//       borderColor: theme.palette.primary.dark,
//     },
//   },
// }));

// const VerifyButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   backgroundColor: theme.palette.primary.main,
//   color: 'white',
//   padding: theme.spacing(1, 4),
//   fontSize: '1.2rem',
//   '&:hover': {
//     backgroundColor: theme.palette.primary.dark,
//   },
// }));

// const ErrorMessage = styled(Box)(({ theme }) => ({
//   color: 'red',
//   marginTop: theme.spacing(2),
//   fontSize: '1rem',
// }));

// const SuccessMessage = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: theme.spacing(3),
//   '& svg': {
//     fontSize: '3rem',
//     color: theme.palette.primary.main,
//     marginBottom: theme.spacing(1),
//   },
// }));

// export default function Component() {
//   const location = useLocation();
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [isVerified, setIsVerified] = useState(false);
//   const [error, setError] = useState('');
//   const phone = location.state?.phoneNumber;
//   const phoneNumber = encodeURIComponent(phone);
//   const [twilioLink, setTwilioLink] = useState('');

//   const handleChange = (index, value) => {
//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);
//     if (value && index < 5) {
//       const nextInput = document.getElementById(`code-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   const handleVerify = async () => {
//     const fullCode = code.join('');
//     const url = `http://localhost:5001/api/validateCode/${phoneNumber}/${fullCode}`;

//     // Obtener el token JWT almacenado en localStorage (o en el estado global si usas un contexto)
//     const token = localStorage.getItem('token');  // Asegúrate de que el token esté almacenado tras el login

//     if (!token) {
//       setError('No se encontró token de autenticación');
//       return;
//     }

//     try {
//       const response = await axios.post(url, {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`, // Enviar el JWT en el header
//         }
//       });
      
//       if (response.status === 200) {
//         setIsVerified(true);
//         setMessage('Código verificado correctamente');
//         setTwilioLink(`https://wa.me/+14155238886`); // Genera el enlace de Twilio
//         setError('');
//       }
//     } catch (error) {
//       console.error('Error al verificar el código:', error);
//       setIsVerified(false);
//       setMessage('');
//       setError('Código incorrecto. Por favor, intenta nuevamente.');
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <StyledPaper>
//           <Typography variant="h4" component="h1" gutterBottom>Verificación de Código</Typography>
//           <CodeInputContainer>
//             {code.map((digit, index) => (
//               <CodeInput
//                 key={index}
//                 id={`code-${index}`}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 inputProps={{ maxLength: 1 }}
//                 variant="outlined"
//               />
//             ))}
//           </CodeInputContainer>

//           {error && <ErrorMessage>{error}</ErrorMessage>}

//           {isVerified ? (
//             <SuccessMessage>
//               <CheckCircleOutlineIcon />
//               <Typography variant="h6">Código verificado correctamente</Typography>
//               <Typography variant="body1">
//                 <a href={twilioLink} target="_blank" rel="noopener noreferrer">compartir enlace</a>
//               </Typography>
//               <Box mt={2}>
//                 <QRCode value={twilioLink} />
//               </Box>
//             </SuccessMessage>
//           ) : (
//             <>
//               <VerifyButton onClick={handleVerify}>Verificar Código</VerifyButton>
//               {message && <Typography variant="body1">{message}</Typography>}
//             </>
//           )}
//         </StyledPaper>
//       </Container>
//     </ThemeProvider>
//   );
// }
