// import { Link } from 'react-router-dom';

// // material-ui
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {  Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// // project imports
// import AuthWrapper2 from '../AuthWrapper2';
// import AuthCardWrapper from '../AuthCardWrapper';
// import AuthLogin from '../auth-forms/AuthLogin';
// import Logo from 'ui-component/Logo';
// import BackgroundPattern2 from 'ui-component/cards/BackgroundPattern2';
// import AuthFooter from 'ui-component/cards/AuthFooter';
// import AuthSlider from 'ui-component/cards/AuthSlider';

// // assets
// import imgMain from 'assets/images/auth/img-a2-login.svg';

// // carousel items
// const items = [
//     {
//         title: 'Gestion Smart',
//         description: 'Una poderosa Herramienta para automatizar tus transacciones'
//     },
//     {
//         title: 'Gestion Smart',
//         description: 'Tus clientes a tu alcance con solo un click'
//     }
// ];

// // ================================|| AUTH2 - LOGIN ||================================ //

// const Login = () => {
//     // Definir el tema personalizado
//     const theme = createTheme({
//         palette: {
//             secondary: {
//                 main: '#1a73e8' // Color personalizado
//             }
//         }
//     });

//     const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
//     const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

//     return (
//         // Envolver con ThemeProvider para aplicar el tema personalizado
//         <ThemeProvider theme={theme}>
//             <AuthWrapper2>
//                 <Grid container justifyContent={matchDownSM ? 'center' : 'space-between'} alignItems="center">
//                     <Grid item md={6} lg={7} xs={12} sx={{ minHeight: '100vh' }}>
//                         <Grid
//                             sx={{ minHeight: '100vh' }}
//                             container
//                             alignItems={matchDownSM ? 'center' : 'flex-start'}
//                             justifyContent={matchDownSM ? 'center' : 'space-between'}
//                         >
//                             {/* Mover el logotipo dentro del Stack para que esté por encima del título */}
//                             <Grid
//                                 item
//                                 xs={12}
//                                 container
//                                 justifyContent="center"
//                                 alignItems="center"
//                                 sx={{ minHeight: { xs: 'calc(100vh - 68px)', md: 'calc(100vh - 152px)' } }}
//                             >
//                                 <Stack justifyContent="center" alignItems="center" spacing={1} m={2}>
//                                     {/* Logotipo aquí */}
//                                     <Link to="#" aria-label="theme-logo">
//                                         <Logo />
//                                     </Link>
//                                     <AuthCardWrapper border={matchDownMD}>
//                                         <Grid container spacing={2} justifyContent="center">
//                                             <Grid item>
//                                                 <Stack alignItems="center" justifyContent="center" spacing={1}>
//                                                     {/* Título debajo del logo */}
//                                                     <Typography
//                                                         color={theme.palette.secondary.main} // Uso del tema personalizado
//                                                         gutterBottom
//                                                         variant={matchDownSM ? 'h3' : 'h2'}
//                                                     >
//                                                         Hi, Welcome Back
//                                                     </Typography>
//                                                     <Typography
//                                                         variant="caption"
//                                                         fontSize="16px"
//                                                         textAlign={matchDownSM ? 'center' : 'inherit'}
//                                                     >
//                                                         Enter your credentials to continue
//                                                     </Typography>
//                                                 </Stack>
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <AuthLogin loginProp={2} />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <Divider />
//                                             </Grid>
//                                             <Grid item xs={12}>
//                                                 <Grid item container direction="column" alignItems="center" xs={12}>
//                                                     <Typography
//                                                         component={Link}
//                                                         to="/pages/register/register2"
//                                                         variant="subtitle1"
//                                                         sx={{ textDecoration: 'none' }}
//                                                     >
//                                                         Don&apos;t have an account?
//                                                     </Typography>
//                                                 </Grid>
//                                             </Grid>
//                                         </Grid>
//                                     </AuthCardWrapper>
//                                 </Stack>
//                             </Grid>
//                             <Grid item xs={12} sx={{ m: 3 }}>
//                                 <AuthFooter />
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                     <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
//                         <BackgroundPattern2>
//                             <Grid item container justifyContent="center">
//                                 <Grid item xs={12}>
//                                     <Grid item container justifyContent="center" sx={{ pb: 8 }}>
//                                         <Grid item xs={10} lg={8} sx={{ '& .slick-list': { pb: 2 } }}>
//                                             <AuthSlider items={items} />
//                                         </Grid>
//                                     </Grid>
//                                 </Grid>
//                                 <Grid item xs={12} sx={{ position: 'relative' }}>
//                                     <img
//                                         alt="Auth method"
//                                         src={imgMain}
//                                         style={{
//                                             maxWidth: '100%',
//                                             margin: '0 auto',
//                                             display: 'block',
//                                             width: 300,
//                                             position: 'relative',
//                                             zIndex: 5
//                                         }}
//                                     />
//                                 </Grid>
//                             </Grid>
//                         </BackgroundPattern2>
//                     </Grid>
//                 </Grid>
//             </AuthWrapper2>
//         </ThemeProvider>
//     );
// };

// export default Login;
