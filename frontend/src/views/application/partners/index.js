import React, { useState } from "react";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import MainCard from "ui-component/cards/MainCard";
import TableHeader from "./TableHeader";
import TableActions from "./TableActions";
import TableRowComponent from "./TableRowComponent";
import AddUserModal from "./AddUserModal"; 
const users = [
  {
    id: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    username: "curtis_weaver",
    email: "curtis.weaver@example.com",
    nombre: "Curtis",
    apellido: "Weaver",
    telefono: "+1 (555) 123-4567",
    status: "Active",
  },
  {
    id: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    username: "xavier_thompson",
    email: "xavier.thompson@example.com",
    nombre: "Xavier",
    apellido: "Thompson",
    telefono: "+1 (555) 234-5678",
    status: "Pending",
  },
  {
    id: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    username: "lola_fisher",
    email: "lola.fisher@example.com",
    nombre: "Lola",
    apellido: "Fisher",
    telefono: "+1 (555) 345-6789",
    status: "Rejected",
  },
  {
    id: 4,
    avatar: "/placeholder.svg?height=40&width=40",
    username: "milton_cruz",
    email: "milton.cruz@example.com",
    nombre: "Milton",
    apellido: "Cruz",
    telefono: "+1 (555) 456-7890",
    status: "Pending",
  },
  {
    id: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    username: "lysanne_becker",
    email: "lysanne.becker@example.com",
    nombre: "Lysanne",
    apellido: "Becker",
    telefono: "+1 (555) 567-8901",
    status: "Active",
  },
];

const UserTable = () => {
  const [displayedUsers, setDisplayedUsers] = useState(users);

  const handleApplyFilters = (field, value) => {
    const filteredData = users.filter((user) => {
      return value === "" || user[field].toLowerCase().includes(value.toLowerCase());
    });
    setDisplayedUsers(filteredData);
  };

  return (
    <MainCard title="Partners">
      <TableContainer component={Paper} sx={{ maxWidth: 1200, margin: "auto" }}>
        <TableActions data={users} onApplyFilters={handleApplyFilters} />
        <Table sx={{ minWidth: 650 }}>
          <TableHeader />
          <TableBody>
            {displayedUsers.map((user) => (
              <TableRowComponent key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default UserTable;