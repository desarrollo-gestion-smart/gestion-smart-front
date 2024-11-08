import React, { useState } from 'react';
import {
    Box,
    Typography,
    AppBar,
    Toolbar,
    Select,
    MenuItem,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    Avatar,
    Tooltip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import RefreshIcon from '@mui/icons-material/Refresh';

const initialTemplates = {
    bienvenida: {
        nombre: 'Mensaje de Bienvenida',
        mensajeInicial: 'Hola Bienvenido a Poseidon! Ya puedes comenzar a Jugar! Elige tu opcion',
        respuestas: [
            {
                texto: 'Quiero Registrarme',
                desencadenador: 'Formulario de registro Clientes'
            },
            {
                texto: 'Quiero cargar Créditos/Fichas',
                desencadenador: 'Indique el monto en $'
            },
            {
                texto: '¿Cuál es el mínimo que puedo apostar?',
                desencadenador: 'Pueden comenzar con el monto minimo de $3.000'
            },
            {
                texto: '¿Cuáles son los terminos y condiciones?',
                desencadenador: 'Link o pdf de terminos y condiciones'
            }
        ]
    }
};

const ChatSimulator = () => {
    const [messages, setMessages] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [templates, setTemplates] = useState(initialTemplates);
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [newTemplate, setNewTemplate] = useState({
        nombre: '',
        mensajeInicial: '',
        respuestas: []
    });

    const handleTemplateSelect = (templateKey) => {
        const template = templates[templateKey];
        setSelectedTemplate(templateKey);
        setMessages([{ text: template.mensajeInicial, sender: 'bot' }]);
    };

    const handleResponseClick = (response) => {
        setMessages((prev) => [...prev, { text: response.texto, sender: 'user' }]);
        setMessages((prev) => [...prev, { text: response.desencadenador, sender: 'bot' }]);
    };

    const handleEditTemplate = () => {
        const template = templates[selectedTemplate];
        setNewTemplate({
            nombre: template.nombre,
            mensajeInicial: template.mensajeInicial,
            respuestas: template.respuestas.map((resp) => ({ ...resp }))
        });
        setIsEditing(true);
    };

    const handleSaveTemplate = () => {
        const updatedTemplates = {
            ...templates,
            [selectedTemplate]: { ...newTemplate }
        };
        setTemplates(updatedTemplates);
        setIsEditing(false);
    };

    const handleAddResponse = () => {
        setNewTemplate((prev) => ({
            ...prev,
            respuestas: [...prev.respuestas, { texto: '', desencadenador: '' }]
        }));
    };

    const handleDeleteResponse = (index) => {
        setNewTemplate((prev) => ({
            ...prev,
            respuestas: prev.respuestas.filter((_, i) => i !== index)
        }));
    };

    const handleResponseChange = (index, field, value) => {
        setNewTemplate((prev) => ({
            ...prev,
            respuestas: prev.respuestas.map((resp, i) => (i === index ? { ...resp, [field]: value } : resp))
        }));
    };

    const handleCreateTemplate = () => {
        setNewTemplate({ nombre: '', mensajeInicial: '', respuestas: [] });
        setIsCreating(true);
    };

    const handleSaveNewTemplate = () => {
        const updatedTemplates = {
            ...templates,
            [newTemplate.nombre]: { ...newTemplate }
        };
        setTemplates(updatedTemplates);
        setIsCreating(false);
    };

    const handleResetTemplate = () => {
        setNewTemplate(initialTemplates[selectedTemplate]);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#fff', mt: 4 }}>
            <AppBar position="static" sx={{ bgcolor: '#fff' }}>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1, color: '#97c606' }}>
                        Configuración de Mensajes de Whatsapp
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={handleEditTemplate}
                        disabled={!selectedTemplate}
                        sx={{ color: '#000', bgcolor: '#C2C0A6', marginRight: '15px' }}
                    >
                        Editar Mensaje
                    </Button>
                    <Button onClick={handleCreateTemplate} sx={{ color: '#000', bgcolor: '#C2C0A6' }}>
                        Configurar Nuevo Mensaje
                    </Button>
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 2, mt: 2 }}>
                <Tooltip title="Selecciona un mensaje preconfigurado para usar en el chat">
                    <Select
                        value={selectedTemplate}
                        onChange={(e) => handleTemplateSelect(e.target.value)}
                        displayEmpty
                        fullWidth
                        sx={{ color: '#fff', bgcolor: '#C2C0A6' }}
                    >
                        <MenuItem value="" disabled>
                            Selecciona un Mensaje configurado
                        </MenuItem>
                        {Object.keys(templates).map((templateKey) => (
                            <MenuItem key={templateKey} value={templateKey}>
                                {templates[templateKey].nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </Tooltip>
            </Box>

            {/* Chat Container styled like a phone screen with adjusted dimensions */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '420px', // Slightly wider
                    height: '700px', // Slightly taller
                    bgcolor: '#E5E5E5',
                    borderRadius: '25px',
                    mx: 'auto',
                    mt: 2,
                    boxShadow: 3,
                    p: 2
                }}
            >
                <Box sx={{ flex: 1, overflowY: 'auto', p: 1 }}>
                    {messages.map((message, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                                mb: 1
                            }}
                        >
                            {message.sender === 'bot' ? (
                                <Avatar sx={{ bgcolor: '#333', mr: 1 }}>
                                    <SmartToyIcon />
                                </Avatar>
                            ) : (
                                <Avatar sx={{ bgcolor: '#97c606', ml: 1 }}>
                                    <PersonIcon />
                                </Avatar>
                            )}
                            <Box
                                sx={{
                                    maxWidth: '70%',
                                    p: 1.5,
                                    borderRadius: 2,
                                    bgcolor: message.sender === 'user' ? '#97c606' : '#333',
                                    color: message.sender === 'user' ? '#000' : '#fff'
                                }}
                            >
                                <Typography variant="body1">{message.text}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Quick Responses Container directly below each bot message */}
                <Box sx={{ p: 1, bgcolor: '#F0F0F0', borderRadius: 2, mt: 1 }}>
                    <Typography color="#97c606" variant="body2" sx={{ mb: 1 }}>
                        Respuestas rápidas:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {selectedTemplate &&
                            templates[selectedTemplate].respuestas.map((response, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleResponseClick(response)}
                                    sx={{
                                        m: 0.5,
                                        bgcolor: '#97c606',
                                        color: '#fff',
                                        ':hover': { bgcolor: '#6a9505' },
                                        borderRadius: '15px',
                                        fontSize: '0.8rem'
                                    }}
                                >
                                    {response.texto}
                                </Button>
                            ))}
                    </Box>
                </Box>
            </Box>

            {/* Dialog for editing a template */}
            <Dialog open={isEditing} onClose={() => setIsEditing(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Editar mensajes</DialogTitle>
                <DialogContent>
                    <Tooltip title="Título del mensaje configurado (solo lo verás tú)">
                        <TextField
                            fullWidth
                            label="Nombre del mensaje configurado"
                            value={newTemplate.nombre}
                            onChange={(e) => setNewTemplate({ ...newTemplate, nombre: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                    </Tooltip>
                    <Tooltip title="Aquí puedes editar el primer mensaje automático que recibirá el usuario">
                        <TextField
                            fullWidth
                            label="Mensaje Inicial"
                            value={newTemplate.mensajeInicial}
                            onChange={(e) => setNewTemplate({ ...newTemplate, mensajeInicial: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                    </Tooltip>
                    <Typography>Respuestas y Desencadenadores:</Typography>
                    {newTemplate.respuestas.map((response, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Tooltip title="Aquí puedes editar qué podrá responder el usuario">
                                <TextField
                                    label="Texto de Respuesta"
                                    value={response.texto}
                                    onChange={(e) => handleResponseChange(index, 'texto', e.target.value)}
                                    sx={{ mr: 1, flex: 1 }}
                                />
                            </Tooltip>
                            <Tooltip title="Aquí puedes editar un desencadenante a la respuesta del usuario">
                                <TextField
                                    label="Desencadenador"
                                    value={response.desencadenador}
                                    onChange={(e) => handleResponseChange(index, 'desencadenador', e.target.value)}
                                    sx={{ mr: 1, flex: 1 }}
                                />
                            </Tooltip>
                            <IconButton onClick={() => handleDeleteResponse(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <Button startIcon={<AddIcon />} onClick={handleAddResponse}>
                        Agregar Respuesta
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleResetTemplate} startIcon={<RefreshIcon />}>
                        Restablecer
                    </Button>
                    <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
                    <Button onClick={handleSaveTemplate}>Guardar</Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for creating a new template */}
            <Dialog open={isCreating} onClose={() => setIsCreating(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Configurar nuevo mensaje</DialogTitle>
                <DialogContent>
                    <Tooltip title="Título del mensaje configurado (solo lo verás tú)">
                        <TextField
                            fullWidth
                            label="Titulo del mensaje"
                            value={newTemplate.nombre}
                            onChange={(e) => setNewTemplate({ ...newTemplate, nombre: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                    </Tooltip>
                    <Tooltip title="Aquí puedes configurar el primer mensaje que enviarás al usuario de forma automática">
                        <TextField
                            fullWidth
                            label="Mensaje Inicial"
                            value={newTemplate.mensajeInicial}
                            onChange={(e) => setNewTemplate({ ...newTemplate, mensajeInicial: e.target.value })}
                            sx={{ mb: 2 }}
                        />
                    </Tooltip>
                    <Typography>Respuestas y Desencadenadores:</Typography>
                    {newTemplate.respuestas.map((response, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Tooltip title="Aquí puedes configurar una opción de respuesta del usuario">
                                <TextField
                                    label="Texto de Respuesta"
                                    value={response.texto}
                                    onChange={(e) => handleResponseChange(index, 'texto', e.target.value)}
                                    sx={{ mr: 1, flex: 1 }}
                                />
                            </Tooltip>
                            <Tooltip title="Aquí puedes configurar el mensaje que desencadena la respuesta del usuario">
                                <TextField
                                    label="Desencadenador"
                                    value={response.desencadenador}
                                    onChange={(e) => handleResponseChange(index, 'desencadenador', e.target.value)}
                                    sx={{ mr: 1, flex: 1 }}
                                />
                            </Tooltip>
                            <IconButton onClick={() => handleDeleteResponse(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                    <Button startIcon={<AddIcon />} onClick={handleAddResponse}>
                        Agregar Respuesta
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsCreating(false)}>Cancelar</Button>
                    <Button onClick={handleSaveNewTemplate}>Guardar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ChatSimulator;
