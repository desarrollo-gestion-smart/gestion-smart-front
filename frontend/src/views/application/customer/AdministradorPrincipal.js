import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Paper,
    Avatar,
    Box,
    Button,
    CircularProgress,
    TablePagination,
} from '@mui/material';
import { EditOutlined, DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();

    // Obtener usuarios desde la API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://gestion-smart-front-production.up.railway.app/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
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
        if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
            console.log('Delete user with id:', id);
            // Aquí puedes agregar lógica para eliminar al usuario de la base de datos
        }
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
        navigate('/pages/register/register2');
    };

    // Manejadores para paginación
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ position: 'relative', minHeight: '100vh', padding: '20px' }}>
            {loading ? (
                <Box textAlign="center" padding={5}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Box sx={{ marginBottom: 2, textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'limegreen',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkgreen',
                                },
                            }}
                            onClick={handleAddUser}
                        >
                            Agregar nuevo usuario
                        </Button>
                    </Box>

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
                                {users
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((user) => (
                                        <TableRow key={user._id}>
                                            <TableCell>
                                                <Avatar>{getInitials(user.firstName, user.lastName)}</Avatar>
                                            </TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.lastName}</TableCell>
                                            <TableCell>{user.country || 'no values'}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <motion.div
                                                    style={getStatusStyle(user.status || 'active')}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {user.status || 'active'}
                                                </motion.div>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleEdit(user._id)} color="primary" size="small">
                                                    <EditOutlined fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleDelete(user._id)}
                                                    color="secondary"
                                                    size="small"
                                                    style={{ marginLeft: 10 }}
                                                >
                                                    <DeleteOutline fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        component="div"
                        count={users.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            )}
        </Box>
    );
};

export default UserTable;
