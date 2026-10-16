import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import esLocale from "@fullcalendar/core/locales/es";
import {
    Box,
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import Header from "../../components/Header";
import { initialEvents } from "../../data/mockData";

const formatEventDate = (event) =>
    event.start.toLocaleDateString("es-AR", {
        weekday: "short",
        day: "numeric",
        month: "short",
        ...(event.allDay ? {} : { hour: "2-digit", minute: "2-digit" }),
    });

const Calendar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const calendarRef = useRef(null);
    const [currentEvents, setCurrentEvents] = useState([]);
    const [newEventRange, setNewEventRange] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [eventToDelete, setEventToDelete] = useState(null);

    const handleDateSelect = (selected) => {
        setNewEventRange(selected);
        setNewTitle("");
    };

    const closeCreateDialog = () => {
        newEventRange?.view.calendar.unselect();
        setNewEventRange(null);
    };

    const createEvent = (e) => {
        e.preventDefault();
        const title = newTitle.trim();
        if (!title) return;
        newEventRange.view.calendar.addEvent({
            id: `${newEventRange.startStr}-${title}`,
            title,
            start: newEventRange.startStr,
            end: newEventRange.endStr,
            allDay: newEventRange.allDay,
        });
        closeCreateDialog();
    };

    const deleteEvent = () => {
        eventToDelete.remove();
        setEventToDelete(null);
    };

    const upcoming = [...currentEvents].sort((a, b) => a.start - b.start);

    const p = theme.palette;
    const calendarSx = {
        "& .fc": {
            "--fc-border-color": p.divider,
            "--fc-page-bg-color": p.background.paper,
            "--fc-neutral-bg-color": p.surfaceMuted,
            "--fc-today-bg-color": alpha(p.primary.main, 0.08),
            "--fc-highlight-color": alpha(p.primary.main, 0.15),
            "--fc-button-text-color": p.text.primary,
            "--fc-button-bg-color": "transparent",
            "--fc-button-border-color": p.divider,
            "--fc-button-hover-bg-color": p.action.hover,
            "--fc-button-hover-border-color": p.divider,
            "--fc-button-active-bg-color": alpha(p.primary.main, 0.14),
            "--fc-button-active-border-color": alpha(p.primary.main, 0.4),
            "--fc-event-bg-color": p.primary.main,
            "--fc-event-border-color": p.primary.main,
            "--fc-event-text-color": p.primary.contrastText,
            "--fc-list-event-hover-bg-color": p.action.hover,
            fontFamily: theme.typography.fontFamily,
        },
        "& .fc a": { color: "inherit", textDecoration: "none" },
        "& .fc .fc-toolbar": { flexWrap: "wrap", gap: 1 },
        "& .fc .fc-toolbar-title": { fontSize: { xs: 17, md: 20 }, fontWeight: 700 },
        "& .fc .fc-toolbar-title::first-letter": { textTransform: "uppercase" },
        "& .fc .fc-button": {
            borderRadius: "10px",
            fontWeight: 600,
            fontSize: 13,
            textTransform: "capitalize",
            boxShadow: "none !important",
        },
        "& .fc .fc-button-primary:not(:disabled).fc-button-active": { color: p.primary.main },
        "& .fc .fc-col-header-cell-cushion": { py: 1, color: p.text.secondary, fontWeight: 600, textTransform: "capitalize" },
        "& .fc .fc-daygrid-day-number": { fontSize: 13, p: 1 },
        "& .fc .fc-daygrid-event, & .fc .fc-timegrid-event": { borderRadius: "6px", px: 0.5 },
        "& .fc-theme-standard .fc-scrollgrid": { borderRadius: "12px", overflow: "hidden" },
    };

    return (
        <Box>
            <Header title="Calendario" subtitle="Hacé clic en un día para agendar un evento; clic en un evento para borrarlo" />

            <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, lg: 9 }}>
                    <Card sx={{ p: { xs: 1.5, md: 2.5 }, ...calendarSx }}>
                        <FullCalendar
                            ref={calendarRef}
                            locale={esLocale}
                            height={isMobile ? "auto" : "72vh"}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                            headerToolbar={
                                isMobile
                                    ? { left: "prev,next", center: "title", right: "dayGridMonth,listMonth" }
                                    : { left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth" }
                            }
                            initialView="dayGridMonth"
                            editable
                            selectable
                            selectMirror
                            dayMaxEvents
                            select={handleDateSelect}
                            eventClick={({ event }) => setEventToDelete(event)}
                            eventsSet={setCurrentEvents}
                            initialEvents={initialEvents}
                        />
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, lg: 3 }}>
                    <Card sx={{ p: 2.5 }}>
                        <Typography variant="h6" mb={1.5}>Próximos eventos</Typography>
                        {upcoming.length === 0 && (
                            <Typography variant="body2" color="text.secondary">
                                No hay eventos agendados.
                            </Typography>
                        )}
                        <Box display="flex" flexDirection="column" gap={1}>
                            {upcoming.map((event) => (
                                <Box
                                    key={event.id}
                                    component="button"
                                    type="button"
                                    onClick={() => calendarRef.current?.getApi().gotoDate(event.start)}
                                    sx={{
                                        all: "unset",
                                        cursor: "pointer",
                                        display: "flex",
                                        gap: 1.5,
                                        alignItems: "center",
                                        p: 1.25,
                                        borderRadius: 2.5,
                                        bgcolor: alpha(p.primary.main, 0.08),
                                        "&:hover": { bgcolor: alpha(p.primary.main, 0.14) },
                                        "&:focus-visible": { outline: `2px solid ${p.primary.main}` },
                                    }}
                                >
                                    <EventNoteOutlinedIcon color="primary" fontSize="small" />
                                    <Box minWidth={0}>
                                        <Typography variant="body2" fontWeight={700} noWrap>{event.title}</Typography>
                                        <Typography variant="caption" color="text.secondary" sx={{ textTransform: "capitalize" }}>
                                            {formatEventDate(event)}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Card>
                </Grid>
            </Grid>

            <Dialog open={Boolean(newEventRange)} onClose={closeCreateDialog} fullWidth maxWidth="xs">
                <form onSubmit={createEvent}>
                    <DialogTitle>Nuevo evento</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            fullWidth
                            label="Título del evento"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            sx={{ mt: 1 }}
                        />
                    </DialogContent>
                    <DialogActions sx={{ px: 3, pb: 2 }}>
                        <Button onClick={closeCreateDialog} color="inherit">Cancelar</Button>
                        <Button type="submit" variant="contained" disabled={!newTitle.trim()}>Agendar</Button>
                    </DialogActions>
                </form>
            </Dialog>

            <Dialog open={Boolean(eventToDelete)} onClose={() => setEventToDelete(null)} maxWidth="xs">
                <DialogTitle>¿Eliminar evento?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Se va a eliminar «{eventToDelete?.title}» del calendario.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={() => setEventToDelete(null)} color="inherit">Cancelar</Button>
                    <Button onClick={deleteEvent} color="error" variant="contained">Eliminar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Calendar;
