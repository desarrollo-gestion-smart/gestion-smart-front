import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Avatar, Box, Button } from '@mui/material';
import { EditOutlined, DeleteOutline } from '@mui/icons-material'; // Cambié los iconos a versiones más pequeñas
import axios from 'axios';
import { motion } from 'framer-motion'; // Importamos framer-motion
import { useNavigate } from 'react-router-dom'; // Usamos useNavigate en lugar de useHistory

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // Inicializamos el hook useNavigate

    // Obtener usuarios desde la API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://gestion-smart-backend.onrender.com/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Funciones para manejar acciones de editar y eliminar
    const handleEdit = (id) => {
        console.log('Edit user with id:', id);
        // Redirigir o abrir modal para editar el usuario
    };

    const handleDelete = (id) => {
        console.log('Delete user with id:', id);
        // Lógica para eliminar el usuario
    };

    // Función para aplicar estilos según el estado
    const getStatusStyle = (status) => {
        if (status === 'active') {
            return { color: 'green', fontWeight: 'bold' };
        } else if (status === 'inactive') {
            return { color: 'gray', fontWeight: 'bold' };
        } else {
            return { color: 'blue', fontWeight: 'bold' };
        }
    };

    // Función para generar las iniciales del usuario
    const getInitials = (firstName, lastName) => {
        return (firstName[0] + lastName[0]).toUpperCase();
    };

    // Función para redirigir a la página de registro
    const handleAddUser = () => {
        navigate('/pages/register/register2'); // Redirige a la página /register/register2
    };

    return (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell>
                                    <Avatar>{getInitials(user.firstName, user.lastName)}</Avatar> {/* Muestra las iniciales si no hay imagen */}
                                </TableCell>
                                <TableCell>{user.firstName}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.country || "no values"}</TableCell> {/* Muestra "no values" si country está vacío */}
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <motion.div
                                        style={getStatusStyle(user.status || "active")}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {user.status || "active"}
                                    </motion.div>
                                </TableCell>
                                <TableCell>
                                    {/* Botones de editar y eliminar con iconos pequeños */}
                                    <IconButton onClick={() => handleEdit(user._id)} color="primary" size="small">
                                        <EditOutlined fontSize="small" />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(user._id)} color="secondary" size="small" style={{ marginLeft: 10 }}>
                                        <DeleteOutline fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Botón Agregar nuevo usuario en la esquina inferior derecha */}
            <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'limegreen',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkgreen',
                        },
                    }}
                    onClick={handleAddUser} // Llamamos a la función para redirigir
                >
                    Agregar nuevo usuario
                </Button>
            </Box>
        </Box>
    );
};

export default UserTable;
