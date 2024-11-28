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
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();

    // Obtener clientes desde la API
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('https://gestion-smart-front-production.up.railway.app/api/clients');
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    // Funciones para manejar acciones de editar y eliminar
    const handleEdit = (id) => {
        console.log('Edit client with id:', id);
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
            console.log('Delete client with id:', id);
        }
    };

    // Generar iniciales
    const getInitials = (firstName, lastName) => {
        return (firstName[0] + lastName[0]).toUpperCase();
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
                    {/* <Box sx={{ marginBottom: 2, textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'limegreen',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkgreen',
                                },
                            }}
                            onClick={() => navigate('/pages/register/register2')}
                        >
                            Agregar nuevo cliente
                        </Button>
                    </Box> */}

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Avatar</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Apellido</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>WhatsApp</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clients
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((client) => (
                                        <TableRow key={client._id}>
                                            <TableCell>
                                                <Avatar>{getInitials(client.firstName, client.lastName)}</Avatar>
                                            </TableCell>
                                            <TableCell>{client.firstName}</TableCell>
                                            <TableCell>{client.lastName}</TableCell>
                                            <TableCell>{client.email}</TableCell>
                                            <TableCell>{client.whatsapp}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleEdit(client._id)} color="primary" size="small">
                                                    <EditOutlined fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleDelete(client._id)}
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
                        count={clients.length}
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
