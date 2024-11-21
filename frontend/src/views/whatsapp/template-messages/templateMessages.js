import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    Button,
    TextField
} from '@mui/material';

const ChatSimulator = () => {
    const [messages, setMessages] = useState([]);
    const [templates, setTemplates] = useState({});
    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    // Obtener las plantillas desde el backend al cargar el componente
    useEffect(() => {
        console.log('Montando el componente y solicitando plantillas al backend...');
        fetch('http://localhost:5001/api/templates') // Endpoint del backend
            .then(res => {
                console.log('Respuesta recibida del backend:', res);
                return res.json();
            })
            .then(data => {
                console.log('Datos de plantillas recibidos:', data);
                setTemplates(data);
            })
            .catch(error => console.error('Error al cargar plantillas:', error));
    }, []);

    const handleTemplateSelect = (templateKey) => {
        console.log('Plantilla seleccionada:', templateKey);
        const template = templates[templateKey];
        setSelectedTemplate(templateKey);
        setMessages([{ text: template.mensajeInicial, sender: 'bot' }]);
    };

    const handleResponseClick = (respuesta) => {
        console.log('Respuesta seleccionada:', respuesta);
        setMessages(prevMessages => [
            ...prevMessages,
            { text: respuesta.texto, sender: 'user' },
            {
                text: respuesta.desencadenador
                    ? `Detalles: ${respuesta.desencadenador}`
                    : 'No hay más detalles.',
                sender: 'bot'
            }
        ]);
    };

    const handlePhoneNumberChange = (e) => {
        const phoneNumber = e.target.value;
        console.log('Número de teléfono ingresado:', phoneNumber);
        setUserPhoneNumber(phoneNumber);
    };

    return (
        <Box>
            <Typography variant="h4">Simulador de Chat</Typography>
            <Box>
                <TextField
                    label="Número de Teléfono"
                    value={userPhoneNumber}
                    onChange={handlePhoneNumberChange}
                    fullWidth
                />
                <Select
                    value={selectedTemplate}
                    onChange={(e) => handleTemplateSelect(e.target.value)}
                    displayEmpty
                    fullWidth
                >
                    <MenuItem value="" disabled>Selecciona una plantilla</MenuItem>
                    {Object.keys(templates).map((key) => (
                        <MenuItem key={key} value={key}>
                            {templates[key].nombre}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            <Box>
                {messages.map((msg, idx) => (
                    <Typography key={idx} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right' }}>
                        {msg.text}
                    </Typography>
                ))}
            </Box>
            {selectedTemplate &&
                templates[selectedTemplate].respuestas.map((respuesta, idx) => (
                    <Button
                        key={idx}
                        variant="contained"
                        onClick={() => handleResponseClick(respuesta)}
                        style={{ margin: '5px' }}
                    >
                        {respuesta.texto}
                    </Button>
                ))}
        </Box>
    );
};

export default ChatSimulator;
