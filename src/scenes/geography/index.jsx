import { Box, Grid, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import GeographyChart from "../../components/GeographyChart";
import { countryNames, shipmentsByCountry } from "../../data/mockData";
import { formatNumber } from "../../utils/format";

const total = shipmentsByCountry.reduce((sum, c) => sum + c.value, 0);
const max = Math.max(...shipmentsByCountry.map((c) => c.value));

const Geography = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box>
            <Header title="Envíos por país" subtitle={`Pedidos de la tienda online en el último año · ${formatNumber(total)} envíos`} />
            <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, lg: 8 }}>
                    <SectionCard title="Mapa de envíos" subtitle="Cuanto más oscuro, más pedidos">
                        <Box height={{ xs: 380, md: "62vh" }} sx={{ borderRadius: 3, overflow: "hidden" }}>
                            <GeographyChart projectionScale={isMobile ? 210 : 330} />
                        </Box>
                    </SectionCard>
                </Grid>
                <Grid size={{ xs: 12, lg: 4 }}>
                    <SectionCard title="Ranking de países">
                        <Box display="flex" flexDirection="column" gap={1.75}>
                            {shipmentsByCountry.map((country, i) => (
                                <Box key={country.id}>
                                    <Box display="flex" justifyContent="space-between" mb={0.5}>
                                        <Typography variant="body2" fontWeight={600}>
                                            {i + 1}. {countryNames[country.id]}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {formatNumber(country.value)}
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={(country.value / max) * 100}
                                        sx={{ height: 6, borderRadius: 3, bgcolor: "surfaceMuted", "& .MuiLinearProgress-bar": { borderRadius: 3 } }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </SectionCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Geography;
