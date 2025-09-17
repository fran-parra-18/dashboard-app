import { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import { formatDate } from "@fullcalendar/core"
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar;

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateString}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.AllDay
            });
        };
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }
    return (
        <Box m="20px">
            <Header title="calendar" subtitle="Full calendar interative page" />

            <Box display="flex" justifyContent="space-between">
                <Box
                    flex="1 1 20%"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((e) => (
                        <ListItem
                            key={e.id}
                            sx={{
                                backgroundColor: colors.blueAccent[500],
                                margin: "10px 0",
                                borderRadius: "2px"
                            }}
                        >
                            <ListItemText
                                primary={e.title}
                                secondary={
                                    <Typography>
                                        {formatDate(e.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </Typography>
                                }
                                
                            />
                        </ListItem>
                        ))}
                    </List>
                </Box>
                {/*Calendar */}

                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar 
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left:"prev,next,today",
                        center:"title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(e)=> setCurrentEvents(e)}
                    initialEvents={[
                        {id:"1234", title:"All-day event", date: "2025-09-14"},
                        {id:"4321", title:"Timed Event", date: "2025-09-28"}
                    ]}
                    />
                </Box>


            </Box>
        </Box>
    )
};

export default Calendar