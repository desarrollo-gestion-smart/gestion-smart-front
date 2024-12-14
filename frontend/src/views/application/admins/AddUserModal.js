import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import CountrySelect from "./CountrySelect";
import AvatarUploader from "./AvatarUploader";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AddUserModal = ({ open, onClose, onSave }) => {
  const [username, setUsername] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pais, setPais] = useState("");
  const [telefono, setTelefono] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [areaCode, setAreaCode] = useState("");

  const CountrySelection = [
    { value: "AR", areaCode: "+54" },
    { value: "BO", areaCode: "+591" },
    { value: "BR", areaCode: "+55" },
    { value: "CL", areaCode: "+56" },
    { value: "CO", areaCode: "+57" },
    { value: "CR", areaCode: "+506" },
    { value: "CU", areaCode: "+53" },
    { value: "DO", areaCode: "+1-809" },
    { value: "EC", areaCode: "+593" },
    { value: "GT", areaCode: "+502" },
    { value: "HN", areaCode: "+504" },
    { value: "MX", areaCode: "+52" },
    { value: "NI", areaCode: "+505" },
    { value: "PA", areaCode: "+507" },
    { value: "PE", areaCode: "+51" },
    { value: "PR", areaCode: "+1-787" },
    { value: "PY", areaCode: "+595" },
    { value: "SV", areaCode: "+503" },
    { value: "UY", areaCode: "+598" },
    { value: "VE", areaCode: "+58" },
    { value: "AD", areaCode: "+376" },
    { value: "AL", areaCode: "+355" },
    { value: "AT", areaCode: "+43" },
    { value: "BA", areaCode: "+387" },
    { value: "BE", areaCode: "+32" },
    { value: "BG", areaCode: "+359" },
    { value: "CH", areaCode: "+41" },
    { value: "CY", areaCode: "+357" },
    { value: "CZ", areaCode: "+420" },
    { value: "DE", areaCode: "+49" },
    { value: "DK", areaCode: "+45" },
    { value: "ES", areaCode: "+34" },
    { value: "FI", areaCode: "+358" },
    { value: "FR", areaCode: "+33" },
    { value: "GR", areaCode: "+30" },
    { value: "HR", areaCode: "+385" },
    { value: "HU", areaCode: "+36" },
    { value: "IE", areaCode: "+353" },
    { value: "IS", areaCode: "+354" },
    { value: "IT", areaCode: "+39" },
    { value: "NL", areaCode: "+31" },
    { value: "NO", areaCode: "+47" },
    { value: "PL", areaCode: "+48" },
    { value: "PT", areaCode: "+351" },
    { value: "SE", areaCode: "+46" },
    { value: "UA", areaCode: "+380" },
    { value: "UK", areaCode: "+44" },
  ];


  const AreaSelector = ({ value, onChange }) => {
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
        {CountrySelection.map((country) => (
          <MenuItem key={country.value} value={country.value}>
            {country.areaCode}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
  };

  const handlePaisChange = (value) => {
    const selectedCountry = CountrySelection.find(
      (country) => country.value === value
    );
    setPais(value);
    setAreaCode(selectedCountry?.areaCode || "");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSave({ username, apellido, email, password, pais, telefono, avatar });
      onClose();
    }, 2000);
  };


  const [AreaSelected, setAreaSelected] = useState("");

  const handleAreaChange = (area) => {
    setAreaSelected(areaCode);
    console.log("codigo de area seleccionado", area);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Agregar nuevo usuario</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Componente Avatar */}
          <Grid item xs={12}>
            <AvatarUploader avatar={avatar} onImageChange={handleImageChange} />
          </Grid>

          {/* Detalles del usuario */}
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Apellido"
              fullWidth
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Correo Electrónico"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              type="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              type="password"
            />
          </Grid>

          {/* Selector de País */}
          <Grid item xs={12}>
            <CountrySelect
              value={pais}
              onChange={handlePaisChange}
              countries={CountrySelection}
            />
          </Grid>

          {/* Código de área y Teléfono */}
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>

          <InputLabel id="area-code-select-label">Código de Área</InputLabel>
    <Select
      sx={{width:'100%'}}
      labelId="Código de Área"
      value={areaCode}
      onChange={(e) => {
        const selectedCountry = CountrySelection.find(
          (country) => country.areaCode === e.target.value
        );
        if (selectedCountry) {
          setPais(selectedCountry.value);
          setAreaCode(selectedCountry.areaCode);
        }
      }}
      
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 200, 
            width: 300, 
          },
        },
      }}
    >
      {CountrySelection.map((country) => (
        <MenuItem key={country.value} value={country.areaCode}>
          <img
            src={`https://flagcdn.com/w40/${country.value.toLowerCase()}.png`}
            alt={country.value}
            style={{ marginRight: 8, width: 20, height: 15 }}
          />
          {country.areaCode}
        </MenuItem>
      ))}
    </Select>
    </FormControl> 
          </Grid>
          <Grid item xs={8} sm={6}>
          <FormControl fullWidth>
            <TextField
              label="Teléfono"
              fullWidth
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              variant="outlined"
            />
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={24} /> : null}
        >
          {loading ? "Guardando..." : "Guardar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserModal;
