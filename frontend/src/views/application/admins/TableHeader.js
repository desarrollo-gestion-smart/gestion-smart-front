import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>#</TableCell>
      <TableCell>Usuario</TableCell>
      <TableCell>Nombre</TableCell>
      <TableCell>Apellido</TableCell>
      <TableCell>Teléfono</TableCell>
      <TableCell>Status</TableCell>
      <TableCell>Acciones</TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;
