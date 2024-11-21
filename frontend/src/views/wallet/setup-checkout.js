// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const SetupCheckout = () => {
//     const [paymentLink, setPaymentLink] = useState(null);
//     const location = useLocation();
//   const accessToken = new URLSearchParams(location.search).get('access_token');



//   useEffect(() => {
//     if (accessToken) {
//       console.log("Token recibido:", accessToken);
//     }
//   }, [accessToken]);


//   useEffect(() => {
//     if (accessToken) {
//       // Usamos el access token para crear la preferencia de pago o cualquier otra acción
//       axios
//         .post('http://localhost:5001/api/create_preference', {
//           accessToken: accessToken,
//           title: 'Producto de prueba',
//           price: 100,
//         })
//         .then((response) => {
//           setPaymentLink(response.data.init_point);  // El link de pago generado
//         })
//         .catch((error) => {
//           console.error('Error al crear la preferencia de pago', error);
//         });
//     }
//   }, [accessToken]);

//   return (
//     <div>
//       <h1>Configuración de Checkout</h1>
//       {paymentLink ? (
//         <div>
//           <p>Pago generado, haz clic en el siguiente enlace para realizar el pago:</p>
//           <a href={paymentLink} target="_blank" rel="noopener noreferrer">
//             Ir al pago
//           </a>
//         </div>
//       ) : (
//         <p>Cargando el enlace de pago...</p>
//       )}
//     </div>
//   );
// };

// export default SetupCheckout;
