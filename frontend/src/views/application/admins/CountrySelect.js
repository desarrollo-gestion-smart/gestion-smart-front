// import {React from "react";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";



// const countries = [
//     // Países de Latinoamérica
//     { value: "AR", name: "Argentina", areaCode: "+54" },
//     { value: "BO", name: "Bolivia", areaCode: "+591" },
//     { value: "BR", name: "Brasil", areaCode: "+55" },
//     { value: "CL", name: "Chile", areaCode: "+56" },
//     { value: "CO", name: "Colombia", areaCode: "+57" },
//     { value: "CR", name: "Costa Rica", areaCode: "+506" },
//     { value: "CU", name: "Cuba", areaCode: "+53" },
//     { value: "DO", name: "República Dominicana", areaCode: "+1-809" },
//     { value: "EC", name: "Ecuador", areaCode: "+593" },
//     { value: "GT", name: "Guatemala", areaCode: "+502" },
//     { value: "HN", name: "Honduras", areaCode: "+504" },
//     { value: "MX", name: "México", areaCode: "+52" },
//     { value: "NI", name: "Nicaragua", areaCode: "+505" },
//     { value: "PA", name: "Panamá", areaCode: "+507" },
//     { value: "PE", name: "Perú", areaCode: "+51" },
//     { value: "PR", name: "Puerto Rico", areaCode: "+1-787" },
//     { value: "PY", name: "Paraguay", areaCode: "+595" },
//     { value: "SV", name: "El Salvador", areaCode: "+503" },
//     { value: "UY", name: "Uruguay", areaCode: "+598" },
//     { value: "VE", name: "Venezuela", areaCode: "+58" },
  
//     // Países de Europa
//     { value: "AD", name: "Andorra", areaCode: "+376" },
//     { value: "AL", name: "Albania", areaCode: "+355" },
//     { value: "AT", name: "Austria", areaCode: "+43" },
//     { value: "BE", name: "Bélgica", areaCode: "+32" },
//     { value: "BG", name: "Bulgaria", areaCode: "+359" },
//     { value: "CH", name: "Suiza", areaCode: "+41" },
//     { value: "CZ", name: "República Checa", areaCode: "+420" },
//     { value: "DE", name: "Alemania", areaCode: "+49" },
//     { value: "DK", name: "Dinamarca", areaCode: "+45" },
//     { value: "ES", name: "España", areaCode: "+34" },
//     { value: "FI", name: "Finlandia", areaCode: "+358" },
//     { value: "FR", name: "Francia", areaCode: "+33" },
//     { value: "GR", name: "Grecia", areaCode: "+30" },
//     { value: "HR", name: "Croacia", areaCode: "+385" },
//     { value: "HU", name: "Hungría", areaCode: "+36" },
//     { value: "IE", name: "Irlanda", areaCode: "+353" },
//     { value: "IS", name: "Islandia", areaCode: "+354" },
//     { value: "IT", name: "Italia", areaCode: "+39" },
//     { value: "NL", name: "Países Bajos", areaCode: "+31" },
//     { value: "NO", name: "Noruega", areaCode: "+47" },
//     { value: "PL", name: "Polonia", areaCode: "+48" },
//     { value: "PT", name: "Portugal", areaCode: "+351" },
//     { value: "SE", name: "Suecia", areaCode: "+46" },
//     { value: "UA", name: "Ucrania", areaCode: "+380" },
//     { value: "UK", name: "Reino Unido", areaCode: "+44" },
//   ];

// const CountrySelect = ({ value, onChange, countries }) => {
//     const [selectedCountry, setSelectedCountry] = useState("");

//     const handleCountryChange = (country) => {
//       setSelectedCountry(country);
//       console.log("País seleccionado:", country);
//     };
  
//     return (
//         <div style={{ padding: "20px" }}>
//           <h1>Selecciona un país</h1>
//           <CountrySelect
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             countries={countries}
//           />
//         </div>
//       );
// };

// export default CountrySelect;
import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const countries = [
  // Países de Latinoamérica
  { value: "AR", name: "Argentina" },
  { value: "BO", name: "Bolivia" },
  { value: "BR", name: "Brasil" },
  { value: "CL", name: "Chile" },
  { value: "CO", name: "Colombia" },
  { value: "CR", name: "Costa Rica" },
  { value: "CU", name: "Cuba" },
  { value: "DO", name: "República Dominicana" },
  { value: "EC", name: "Ecuador" },
  { value: "GT", name: "Guatemala" },
  { value: "HN", name: "Honduras" },
  { value: "MX", name: "México" },
  { value: "NI", name: "Nicaragua" },
  { value: "PA", name: "Panamá" },
  { value: "PE", name: "Perú" },
  { value: "PR", name: "Puerto Rico" },
  { value: "PY", name: "Paraguay" },
  { value: "SV", name: "El Salvador" },
  { value: "UY", name: "Uruguay" },
  { value: "VE", name: "Venezuela" },

  // Países de Europa
  { value: "AD", name: "Andorra" },
  { value: "AL", name: "Albania" },
  { value: "AT", name: "Austria" },
  { value: "BE", name: "Bélgica" },
  { value: "BG", name: "Bulgaria" },
  { value: "CH", name: "Suiza" },
  { value: "CZ", name: "República Checa" },
  { value: "DE", name: "Alemania" },
  { value: "DK", name: "Dinamarca" },
  { value: "ES", name: "España" },
  { value: "FI", name: "Finlandia" },
  { value: "FR", name: "Francia" },
  { value: "GR", name: "Grecia" },
  { value: "HR", name: "Croacia" },
  { value: "HU", name: "Hungría" },
  { value: "IE", name: "Irlanda" },
  { value: "IS", name: "Islandia" },
  { value: "IT", name: "Italia" },
  { value: "NL", name: "Países Bajos" },
  { value: "NO", name: "Noruega" },
  { value: "PL", name: "Polonia" },
  { value: "PT", name: "Portugal" },
  { value: "SE", name: "Suecia" },
  { value: "UA", name: "Ucrania" },
  { value: "UK", name: "Reino Unido" },
];

const CountrySelect = ({ value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined">
    <InputLabel id="country-select-label">País</InputLabel>
    <Select
      labelId="country-select-label"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label="País"
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 200, // Altura máxima del cuadro desplegable
            width: 250, // Ancho del cuadro desplegable
          },
        },
      }}
    >
      {countries.map((country) => (
        <MenuItem key={country.value} value={country.value}>
          {country.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
};

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    console.log("País seleccionado:", country);
  };

  return (
   
      <CountrySelect value={selectedCountry} onChange={handleCountryChange} />
    
  );
};

export default CountrySelector;
