import React, { useState } from "react";
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem as MuiMenuItem,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import UserModal from "./AddUserModal"
const exportToCSV = (data, filename) => {
  const csvContent = [
    [
      "ID",
      "Usuario",
      "Nombre",
      "Apellido",
      "Correo Electrónico",
      "Teléfono",
      "Estado",
    ].join(","),
    ...data.map((user) =>
      [
        user.id,
        user.username,
        user.nombre,
        user.apellido,
        user.email,
        user.telefono,
        user.status,
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const AddUserModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Agregar Nuevo Usuario
        </Typography>
        <TextField
          label="Nombre"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Correo Electrónico"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Teléfono"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Estado</InputLabel>
          <Select label="Estado">
            {["Active", "Pending", "Rejected"].map((status) => (
              <MuiMenuItem key={status} value={status}>
                {status}
              </MuiMenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Guardar
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const TableActions = ({ data, onApplyFilters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
          gap: "10px",
        }}
      >
        <Tooltip title="Descargar">
          <IconButton
            color="primary"
            onClick={() => exportToCSV(data, "usuarios.csv")}
          >
            <DownloadIcon />
          </IconButton>
        </Tooltip>

        {/* Filtro desplegable */}
        <Tooltip title="Filtrar">
          <IconButton color="secondary" onClick={handleFilterClick}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>

        {/* Menú de Filtros */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          <MenuItem>
            <TextField
              label="Usuario"
              size="small"
              onChange={(e) => onApplyFilters("username", e.target.value)}
              fullWidth
              margin="dense"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              label="Nombre"
              size="small"
              onChange={(e) => onApplyFilters("nombre", e.target.value)}
              fullWidth
              margin="dense"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              label="Apellido"
              size="small"
              onChange={(e) => onApplyFilters("apellido", e.target.value)}
              fullWidth
              margin="dense"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              label="Correo Electrónico"
              size="small"
              onChange={(e) => onApplyFilters("email", e.target.value)}
              fullWidth
              margin="dense"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <FormControl fullWidth size="small" margin="dense">
              <InputLabel>Estado</InputLabel>
              <Select
                label="Estado"
                onChange={(e) => onApplyFilters("status", e.target.value)}
              >
                <MuiMenuItem value="">Todos</MuiMenuItem>
                {["Active", "Pending", "Rejected"].map((status) => (
                  <MuiMenuItem key={status} value={status}>
                    {status}
                  </MuiMenuItem>
                ))}
              </Select>
            </FormControl>
          </MenuItem>
        </Menu>

        {/* Botón para abrir el modal */}
        {/* <Tooltip title="Agregar nuevo usuario administrador">
          <IconButton
            color="success"
            sx={{ borderRadius: "50%", backgroundColor: "#e0f2f1" }}
            onClick={handleOpenModal}
          >
            <AddIcon />
          </IconButton>
        </Tooltip> */}
      </div>

      {/* Modal para agregar usuario */}
      <UserModal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default TableActions;
