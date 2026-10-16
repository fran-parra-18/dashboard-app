import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import { useNivoTheme } from "./charts/useNivoTheme";
import ChartLegend from "./charts/ChartLegend";
import ChartTooltip from "./charts/ChartTooltip";
import { salesCategories, unitsByCategory } from "../data/mockData";
import { formatNumber } from "../utils/format";

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const nivoTheme = useNivoTheme();
    const colors = theme.palette.chart;

    return (
        <Box display="flex" flexDirection="column" height="100%">
            <Box flex={1} minHeight={0}>
                <ResponsiveBar
                    data={unitsByCategory}
                    keys={salesCategories}
                    indexBy="month"
                    theme={nivoTheme}
                    colors={colors}
                    margin={{ top: 8, right: 8, bottom: isDashboard ? 28 : 48, left: isDashboard ? 44 : 64 }}
                    padding={isDashboard ? 0.4 : 0.35}
                    innerPadding={2}
                    borderRadius={3}
                    valueFormat={(v) => `${formatNumber(v)} u.`}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 10,
                        legend: isDashboard ? undefined : "Mes",
                        legendPosition: "middle",
                        legendOffset: 38,
                    }}
                    axisLeft={{
                        tickSize: 0,
                        tickPadding: 8,
                        tickValues: 5,
                        format: (v) => (v >= 1000 ? `${v / 1000} mil` : v),
                        legend: isDashboard ? undefined : "Unidades vendidas",
                        legendPosition: "middle",
                        legendOffset: -54,
                    }}
                    gridYValues={5}
                    enableLabel={false}
                    tooltip={({ id, value, color, indexValue }) => (
                        <ChartTooltip title={indexValue} rows={[{ color, label: id, value: `${formatNumber(value)} u.` }]} />
                    )}
                    role="application"
                    ariaLabel="Unidades vendidas por categoría"
                    barAriaLabel={(e) => `${e.id}: ${e.formattedValue} en ${e.indexValue}`}
                />
            </Box>
            <ChartLegend items={salesCategories.map((label, i) => ({ label, color: colors[i] }))} />
        </Box>
    );
};

export default BarChart;
