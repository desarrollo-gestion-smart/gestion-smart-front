import React, { useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const FilterDialog = ({ data, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    username: "",
    nombre: "",
    apellido: "",
    email: "",
    status: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const uniqueValues = (field) =>
    Array.from(new Set(data.map((item) => item[field])));

  const applyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  return (
    <>
      <DialogTitle>Filtrar datos</DialogTitle>
      <DialogContent>
        <TextField
          label="Usuario"
          name="username"
          value={filters.username}
          onChange={handleFilterChange}
          fullWidth
          margin="normal"
          autoComplete="off"
          inputProps={{
            tabIndex: 1,
          }}
        />
        <TextField
          label="Nombre"
          name="nombre"
          value={filters.nombre}
          onChange={handleFilterChange}
          fullWidth
          margin="normal"
          autoComplete="off"
          inputProps={{
            tabIndex: 2,
          }}
        />
        <TextField
          label="Apellido"
          name="apellido"
          value={filters.apellido}
          onChange={handleFilterChange}
          fullWidth
          margin="normal"
          autoComplete="off"
          inputProps={{
            tabIndex: 3,
          }}
        />
        <TextField
          label="Correo Electrónico"
          name="email"
          value={filters.email}
          onChange={handleFilterChange}
          fullWidth
          margin="normal"
          autoComplete="new-email" // Valor personalizado para evitar autocompletado
          inputProps={{
            tabIndex: 4,
          }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Estado</InputLabel>
          <Select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            inputProps={{
              tabIndex: 5,
            }}
          >
            <MenuItem value="">Todos</MenuItem>
            {uniqueValues("status").map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={applyFilters} variant="contained" color="primary">
          Aplicar
        </Button>
      </DialogActions>
    </>
  );
};

export default FilterDialog;
