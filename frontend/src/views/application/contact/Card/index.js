import { useEffect, useState, Fragment } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, Typography, Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| CONTACT CARD ||============================== //

const ContactCardPage = () => {
    const theme = useTheme();

    // Bandera de "Próximamente"
    const [isComingSoon, setIsComingSoon] = useState(true);

    if (isComingSoon) {
        return (
            <MainCard title="Marketing">
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
                    <Typography variant="h3" color="textSecondary">
                        Próximamente Disponible
                    </Typography>
                </Box>
            </MainCard>
        );
    }

    return (
        <MainCard title="Contact Cards">
            <Grid container spacing={gridSpacing}>
                {/* Aquí se coloca el contenido original del componente */}
                <Typography>Este es el contenido original del componente.</Typography>
            </Grid>
        </MainCard>
    );
};

export default ContactCardPage;
