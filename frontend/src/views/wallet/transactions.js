import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    IconButton
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// assets
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';

// Casos ficticios de transacciones
const transactions = [
    { id: 953698, name: 'Juan', whatsapp: '+123456789', amount: 120.50, paymentMethod: 'Credit Card', status: 'Aceptado', date: '2024-11-01' },
    { id: 753159, name: 'Ana', whatsapp: '+987654321', amount: 75.00, paymentMethod: 'PayPal', status: 'Rechazado', date: '2024-11-02' },
    { id: 896587, name: 'Carlos', whatsapp: '+345678912', amount: 200.00, paymentMethod: 'Debit Card', status: 'Pendiente', date: '2024-11-03' },
    { id: 158965, name: 'Juan', whatsapp: '+123456789', amount: 120.50, paymentMethod: 'Credit Card', status: 'Pendiente', date: '2024-11-01' },
    { id: 751257, name: 'Ana', whatsapp: '+987654321', amount: 75.00, paymentMethod: 'PayPal', status: 'Rechazado', date: '2024-11-02' },
    { id: 258789, name: 'Carlos', whatsapp: '+345678912', amount: 200.00, paymentMethod: 'Debit Card', status: 'Pendiente', date: '2024-11-03' },
];

// Helper functions for sorting
const descendingComparator = (a, b, orderBy) => (b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0);

const getComparator = (order, orderBy) => order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);

const stableSort = (array, comparator) => {
    const stabilizedArray = array.map((el, index) => [el, index]);
    stabilizedArray.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        return order !== 0 ? order : a[1] - b[1];
    });
    return stabilizedArray.map((el) => el[0]);
};

// Table header configuration
const headCells = [
    { id: 'id', numeric: true, label: 'ID', align: 'center' },
    { id: 'name', numeric: false, label: 'Customer Name', align: 'left' },
    { id: 'whatsapp', numeric: false, label: 'WhatsApp', align: 'left' },
    { id: 'amount', numeric: true, label: 'Amount', align: 'right' },
    { id: 'paymentMethod', numeric: false, label: 'Payment Method', align: 'left' },
    { id: 'status', numeric: false, label: 'Status', align: 'center' },
    { id: 'date', numeric: true, label: 'Date', align: 'center' },
    { id: 'actions', numeric: false, label: 'Actions', align: 'center' }
];

// EnhancedTableHead component for rendering table headers with sorting
const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
    const createSortHandler = (property) => (event) => onRequestSort(event, property);

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ padding: '6px', whiteSpace: 'nowrap', maxWidth: 80 }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id && (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            )}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

// Mapping status to colors and styles
const statusStyles = {
    Aceptado: { backgroundColor: '#32CD32', color: 'black', borderRadius: '14px', padding: '2px 6px' },
    Rechazado: { backgroundColor: '#FF6347', color: 'black', borderRadius: '14px', padding: '2px 6px' },
    Pendiente: { backgroundColor: '#FFA500', color: 'black', borderRadius: '14px', padding: '2px 6px' }
};

// Main component with pagination, sorting, and status styling
const TransactionTable = () => {
    const theme = useTheme();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TableContainer>
                <Table size="small">
                    <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    <TableBody>
                        {stableSort(transactions, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((transaction) => (
                                <TableRow hover key={transaction.id}>
                                    <TableCell align="center" sx={{ padding: '6px' }}>{transaction.id}</TableCell>
                                    <TableCell align="left" sx={{ padding: '6px' }}>{transaction.name}</TableCell>
                                    <TableCell align="left" sx={{ padding: '6px' }}>{transaction.whatsapp}</TableCell>
                                    <TableCell align="right" sx={{ padding: '6px' }}>{transaction.amount}</TableCell>
                                    <TableCell align="left" sx={{ padding: '6px' }}>{transaction.paymentMethod}</TableCell>
                                    <TableCell align="center" sx={{ padding: '6px' }}>
                                        <Box sx={statusStyles[transaction.status]}>{transaction.status}</Box>
                                    </TableCell>
                                    <TableCell align="center" sx={{ padding: '6px' }}>{transaction.date}</TableCell>
                                    <TableCell align="center" sx={{ padding: '6px' }}>
                                        <IconButton color="primary" size="small">
                                            <VisibilityTwoToneIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton color="secondary" size="small">
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={transactions.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default TransactionTable;
