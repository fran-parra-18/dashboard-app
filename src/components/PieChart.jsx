import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import { useNivoTheme } from "./charts/useNivoTheme";
import ChartLegend from "./charts/ChartLegend";
import ChartTooltip from "./charts/ChartTooltip";
import { paymentMethodShare } from "../data/mockData";

const PieChart = ({ isDashboard = false, centerLabel = "de las ventas" }) => {
    const theme = useTheme();
    const nivoTheme = useNivoTheme();
    const colors = theme.palette.chart;
    const top = paymentMethodShare[0];

    // Texto en el centro de la dona con el medio de pago más usado
    const CenterLayer = ({ centerX, centerY }) => (
        <g>
            <text
                x={centerX}
                y={centerY - 8}
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: isDashboard ? 22 : 30, fontWeight: 800, fill: theme.palette.text.primary }}
            >
                {top.value}%
            </text>
            <text
                x={centerX}
                y={centerY + (isDashboard ? 14 : 20)}
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: 12, fill: theme.palette.text.secondary }}
            >
                {top.label} {centerLabel}
            </text>
        </g>
    );

    return (
        <Box display="flex" flexDirection="column" height="100%">
            <Box flex={1} minHeight={0}>
                <ResponsivePie
                    data={paymentMethodShare}
                    theme={nivoTheme}
                    colors={colors}
                    margin={{ top: 12, right: 12, bottom: 12, left: 12 }}
                    innerRadius={0.72}
                    padAngle={1.5}
                    cornerRadius={6}
                    activeOuterRadiusOffset={6}
                    borderWidth={0}
                    enableArcLinkLabels={false}
                    enableArcLabels={false}
                    valueFormat={(v) => `${v}%`}
                    tooltip={({ datum }) => (
                        <ChartTooltip rows={[{ color: datum.color, label: datum.label, value: datum.formattedValue }]} />
                    )}
                    layers={["arcs", "arcLabels", "arcLinkLabels", "legends", CenterLayer]}
                    role="img"
                />
            </Box>
            <ChartLegend items={paymentMethodShare.map((d, i) => ({ label: `${d.label} · ${d.value}%`, color: colors[i] }))} />
        </Box>
    );
};

export default PieChart;
