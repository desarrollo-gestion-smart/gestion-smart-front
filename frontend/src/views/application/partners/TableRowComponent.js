import React from "react";
import { TableRow, TableCell, Avatar, IconButton, Chip } from "@mui/material";
import { MessageCircle, XCircle } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Pending":
      return "warning";
    case "Rejected":
      return "error";
    default:
      return "default";
  }
};

const TableRowComponent = ({ user }) => (
  <TableRow
    sx={{
      "&:nth-of-type(odd)": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    }}
  >
    <TableCell>{String(user.id).padStart(2, "0")}</TableCell>
    <TableCell>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar src={user.avatar} alt={`${user.nombre} ${user.apellido}`} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 500 }}>{user.username}</span>
          <span style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>
            {user.email}
          </span>
        </div>
      </div>
    </TableCell>
    <TableCell>{user.nombre}</TableCell>
    <TableCell>{user.apellido}</TableCell>
    <TableCell>{user.telefono}</TableCell>
    <TableCell>
      <Chip label={user.status} color={getStatusColor(user.status)} size="small" />
    </TableCell>
    <TableCell>
      <div style={{ display: "flex", gap: "8px" }}>
        <IconButton size="small" color="primary">
          <MessageCircle style={{ width: "20px", height: "20px" }} />
        </IconButton>
        <IconButton size="small" color="error">
          <XCircle style={{ width: "20px", height: "20px" }} />
        </IconButton>
      </div>
    </TableCell>
  </TableRow>
);

export default TableRowComponent;
