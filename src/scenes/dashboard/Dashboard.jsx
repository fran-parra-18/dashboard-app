import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import StatCard from "../../components/StatCard";
import ProgressCircle from "../../components/ProgressCircle";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import { kpis, paymentMethods, recentSales } from "../../data/mockData";
import { downloadCsv, formatCurrency, formatDate, formatNumber } from "../../utils/format";

const currentMonth = new Date().toLocaleDateString("es-AR", { month: "long", year: "numeric" });

const downloadReport = () =>
    downloadCsv("ventas-recientes.csv", recentSales, [
        { label: "Venta", value: (s) => s.id },
        { label: "Cliente", value: (s) => s.client },
        { label: "Fecha", value: (s) => formatDate(s.date, { dateStyle: "short" }) },
        { label: "Medio de pago", value: (s) => paymentMethods[s.method] },
        { label: "Importe", value: (s) => s.amount },
    ]);

const Dashboard = () => {
    const { monthlyGoal } = kpis;
    const goalProgress = Math.round((monthlyGoal.current / monthlyGoal.target) * 100);

    return (
        <Box>
            <Header
                title="Inicio"
                subtitle={`Resumen de tu negocio · ${currentMonth}`}
                action={
                    <Button variant="contained" startIcon={<DownloadRoundedIcon />} onClick={downloadReport}>
                        Descargar reporte
                    </Button>
                }
            />

            <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard label="Ventas del mes" value={formatCurrency(kpis.monthlySales.value)} delta={kpis.monthlySales.delta} icon={PaymentsOutlinedIcon} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard label="Tickets emitidos" value={formatNumber(kpis.tickets.value)} delta={kpis.tickets.delta} icon={ReceiptOutlinedIcon} color="secondary" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard label="Clientes nuevos" value={formatNumber(kpis.newClients.value)} delta={kpis.newClients.delta} icon={PersonAddAltOutlinedIcon} color="info" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard label="Ticket promedio" value={formatCurrency(kpis.averageTicket.value)} delta={kpis.averageTicket.delta} icon={ShoppingBagOutlinedIcon} color="warning" />
                </Grid>

                <Grid size={{ xs: 12, lg: 8 }}>
                    <SectionCard
                        title="Evolución de ventas"
                        subtitle="Facturación mensual comparada con el período anterior"
                        action={<Button component={Link} to="/reportes/ventas" size="small">Ver reporte</Button>}
                    >
                        <Box height={300}>
                            <LineChart isDashboard />
                        </Box>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, lg: 4 }}>
                    <SectionCard title="Últimas ventas" subtitle="Movimientos de los últimos días" sx={{ maxHeight: { lg: 412 } }}>
                        <Box sx={{ overflowY: "auto", mx: -1, flex: 1 }}>
                            {recentSales.map((sale) => (
                                <Box
                                    key={sale.id}
                                    display="flex"
                                    alignItems="center"
                                    gap={1.5}
                                    px={1}
                                    py={1.25}
                                    sx={{ borderRadius: 2, "&:hover": { bgcolor: "action.hover" } }}
                                >
                                    <Avatar
                                        sx={(theme) => ({
                                            width: 38,
                                            height: 38,
                                            fontSize: 14,
                                            fontWeight: 700,
                                            bgcolor: alpha(theme.palette.primary.main, 0.12),
                                            color: "primary.main",
                                        })}
                                    >
                                        {sale.client.split(" ").map((w) => w[0].toUpperCase()).join("").slice(0, 2)}
                                    </Avatar>
                                    <Box flex={1} minWidth={0}>
                                        <Typography variant="body2" fontWeight={700} noWrap>{sale.client}</Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {sale.id} · {paymentMethods[sale.method]} · {formatDate(sale.date, { day: "2-digit", month: "short" })}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" fontWeight={700}>{formatCurrency(sale.amount)}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                    <SectionCard title="Objetivo del mes" subtitle={`Meta: ${formatCurrency(monthlyGoal.target)}`}>
                        <Box flex={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2} py={1}>
                            <ProgressCircle value={goalProgress} size={170} thickness={4.5}>
                                <Typography variant="h2" component="p">{goalProgress}%</Typography>
                                <Typography variant="caption" color="text.secondary">alcanzado</Typography>
                            </ProgressCircle>
                            <Box textAlign="center">
                                <Typography variant="h5">{formatCurrency(monthlyGoal.current)}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Faltan {formatCurrency(monthlyGoal.target - monthlyGoal.current)} para llegar a la meta
                                </Typography>
                            </Box>
                        </Box>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                    <SectionCard title="Unidades por categoría" subtitle="Últimos 6 meses">
                        <Box height={300}>
                            <BarChart isDashboard />
                        </Box>
                    </SectionCard>
                </Grid>

                <Grid size={{ xs: 12, lg: 4 }}>
                    <SectionCard title="Medios de pago" subtitle="Participación en las ventas del mes">
                        <Box height={300}>
                            <PieChart isDashboard />
                        </Box>
                    </SectionCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
