// Redirect.js
import React, { useEffect } from 'react';
import axios from 'axios';

const Redirect = () => {
  useEffect(() => {
    // Captura el código de autorización desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');  // Extrae el valor de 'code' de la URL

    if (code) {
      // Si encontramos el 'code', lo enviamos al backend para obtener el 'access_token'
      axios.post('https://gestion-smart.com/api/mercadopago/auth', { code })
        .then(response => {
          // Aquí manejas el 'access_token' recibido desde el backend
          console.log('Token de acceso:', response.data.access_token);
          // Aquí puedes guardar el token en el estado o en el almacenamiento local
        })
        .catch(error => {
          console.error('Error al obtener el token:', error);
        });
    } else {
      console.error('No se recibió el código de autorización');
    }
  }, []);

  return (
    <div>
      <h1>Vinculando cuenta...</h1>
    </div>
  );
};

export default Redirect;
