import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Tab, Tabs, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';

// tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

// ==============================|| ORDER DETAILS ||============================== //

const OrderDetails = () => {
    const theme = useTheme();

    // Bandera para "Próximamente"
    const [isComingSoon, setIsComingSoon] = useState(true);

    // set selected tab
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (isComingSoon) {
        return (
            <MainCard title="Order Details">
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
       <>
        <MainCard title="Order Details">
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
       </>
    );
};

export default OrderDetails;
