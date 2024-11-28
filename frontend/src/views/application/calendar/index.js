import { useEffect, useRef, useState } from 'react';

// material-ui
import { Button, Dialog, Typography, Box } from '@mui/material';

// third-party
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';

// project imports
import Toolbar from './Toolbar';
import AddEventForm from './AddEventForm';
import CalendarStyled from './CalendarStyled';

import Loader from 'ui-component/Loader';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useDispatch, useSelector } from 'store';
import { getEvents, addEvent, updateEvent, removeEvent } from 'store/slices/calendar';

// assets
import AddAlarmTwoToneIcon from '@mui/icons-material/AddAlarmTwoTone';

const Calendar = () => {
    const dispatch = useDispatch();
    const calendarRef = useRef(null);
    const [loading, setLoading] = useState(true);

    // Bandera de "Próximamente"
    const [isComingSoon, setIsComingSoon] = useState(true);

    const [events, setEvents] = useState([]);
    const calendarState = useSelector((state) => state.calendar);

    useEffect(() => {
        dispatch(getEvents()).then(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setEvents(calendarState.events);
    }, [calendarState]);

    if (loading) return <Loader />;

    if (isComingSoon) {
        return (
            <MainCard title="Configuración">
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
                    <Typography variant="h2" color="#97C703">
                        Próximamente Disponible
                    </Typography>
                </Box>
            </MainCard>
        );
    }

    return (
        <MainCard
            title="Event Calendar"
            secondary={
                <Button color="secondary" variant="contained" disabled={isComingSoon}>
                    <AddAlarmTwoToneIcon fontSize="small" sx={{ mr: 0.75 }} />
                    Add New Event
                </Button>
            }
        >
            <CalendarStyled>
                <Toolbar />
                <SubCard>
                    <FullCalendar
                        plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
                        events={events}
                        ref={calendarRef}
                    />
                </SubCard>
            </CalendarStyled>
        </MainCard>
    );
};

export default Calendar;
