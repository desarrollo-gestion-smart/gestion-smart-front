import React, { useEffect, useState } from 'react';

// material-ui
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Divider,
    FormHelperText,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    Box
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| CREATE INVOICE ||============================== //

function CreateInvoice() {
    const [isComingSoon, setIsComingSoon] = useState(true);

    if (isComingSoon) {
        return (
            <MainCard title="Operadores">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="300px"
                    sx={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: 1,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h3" color="#97C703">
                        Próximamente Disponible
                    </Typography>
                </Box>
            </MainCard>
        );
    }

    return (
        <MainCard title="Create Invoice">
            <form>
                <Grid container spacing={gridSpacing}>
                    {/* Contenido original del componente */}
                    <Typography>Formulario de creación de facturas</Typography>
                </Grid>
            </form>
        </MainCard>
    );
}

export default CreateInvoice;
