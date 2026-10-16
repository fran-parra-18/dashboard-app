import { Box, Card, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import LineChart from "../../components/LineChart";
import { monthlySales } from "../../data/mockData";
import { formatCurrency, formatPercent } from "../../utils/format";

const sum = (series) => series.data.reduce((total, point) => total + point.y, 0);
const [current, previous] = monthlySales;
const currentTotal = sum(current);
const growth = ((currentTotal - sum(previous)) / sum(previous)) * 100;
const best = current.data.reduce((max, point) => (point.y > max.y ? point : max));

const summary = [
    { label: "Ventas de los últimos 12 meses", value: formatCurrency(currentTotal) },
    { label: "Crecimiento vs. período anterior", value: formatPercent(growth), color: "success.main" },
    { label: `Mejor mes (${best.x})`, value: formatCurrency(best.y) },
];

const Line = () => (
    <Box>
        <Header title="Evolución de ventas" subtitle="Facturación mensual de los últimos 12 meses" />
        <Grid container spacing={2} mb={2.5}>
            {summary.map((item) => (
                <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
                    <Card sx={{ p: 2 }}>
                        <Typography variant="body2" color="text.secondary">{item.label}</Typography>
                        <Typography variant="h4" component="p" color={item.color} sx={{ mt: 0.5 }}>{item.value}</Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <SectionCard>
            <Box height={{ xs: 380, md: "58vh" }}>
                <LineChart />
            </Box>
        </SectionCard>
    </Box>
);

export default Line;
