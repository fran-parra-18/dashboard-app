import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";

const questions = [
    {
        question: "¿Cómo cargo un cliente nuevo?",
        answer: "Entrá en «Nuevo cliente» desde el menú (o desde el botón de la página Clientes), completá los datos y tocá «Guardar cliente». Va a aparecer al instante en la lista de clientes.",
    },
    {
        question: "¿Cómo descargo un reporte de ventas?",
        answer: "En Inicio, tocá «Descargar reporte» y se baja un archivo CSV con las últimas ventas que podés abrir con Excel o Google Sheets. En las tablas de Clientes, Equipo y Facturas también podés exportar con el botón de la barra de herramientas.",
    },
    {
        question: "¿Cómo busco o filtro en las tablas?",
        answer: "Cada tabla tiene un buscador rápido arriba a la derecha y botones para filtrar, ordenar y elegir qué columnas ver. Por ejemplo, en Facturas podés filtrar solo las que están vencidas.",
    },
    {
        question: "¿Cómo agendo un evento en el calendario?",
        answer: "Hacé clic en el día (o arrastrá sobre varios días) y escribí un título. Para borrar un evento, hacé clic sobre él y confirmá.",
    },
    {
        question: "¿Puedo usar el panel en modo oscuro?",
        answer: "Sí. Usá el botón del sol / luna en la barra superior. El panel recuerda tu elección la próxima vez que entres.",
    },
    {
        question: "¿Los datos que veo son reales?",
        answer: "No: este panel es una demostración y muestra datos de ejemplo. Los clientes y eventos que cargues se guardan solo mientras tengas la página abierta.",
    },
];

const FAQ = () => (
    <Box maxWidth={900}>
        <Header title="Preguntas frecuentes" subtitle="Respuestas rápidas para sacarle el jugo al panel" />
        {questions.map(({ question, answer }, i) => (
            <Accordion key={question} defaultExpanded={i === 0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2.5, py: 0.5 }}>
                    <Typography variant="h6" component="h2">{question}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2.5 }}>
                    <Typography color="text.secondary">{answer}</Typography>
                </AccordionDetails>
            </Accordion>
        ))}
    </Box>
);

export default FAQ;
