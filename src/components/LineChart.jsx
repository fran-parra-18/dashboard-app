import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { Box, useTheme } from "@mui/material";
import { useNivoTheme } from "./charts/useNivoTheme";
import ChartLegend from "./charts/ChartLegend";
import ChartTooltip from "./charts/ChartTooltip";
import { monthlySales } from "../data/mockData";
import { formatCompactCurrency, formatCurrency } from "../utils/format";

const LineChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const nivoTheme = useNivoTheme();
    const colors = [theme.palette.chart[0], theme.palette.chart[1]];

    return (
        <Box display="flex" flexDirection="column" height="100%">
            <Box flex={1} minHeight={0}>
                <ResponsiveLine
                    data={monthlySales}
                    theme={nivoTheme}
                    colors={colors}
                    margin={{ top: 12, right: 16, bottom: isDashboard ? 28 : 48, left: isDashboard ? 56 : 72 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
                    curve="monotoneX"
                    lineWidth={3}
                    enableArea
                    areaOpacity={0.18}
                    defs={[
                        linearGradientDef("areaGradient", [
                            { offset: 0, color: "inherit" },
                            { offset: 100, color: "inherit", opacity: 0 },
                        ]),
                    ]}
                    fill={[{ match: "*", id: "areaGradient" }]}
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
                        format: formatCompactCurrency,
                        legend: isDashboard ? undefined : "Ventas",
                        legendPosition: "middle",
                        legendOffset: -62,
                    }}
                    enableGridX={false}
                    gridYValues={5}
                    pointSize={isDashboard ? 0 : 8}
                    pointColor={theme.palette.background.paper}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "seriesColor" }}
                    enableSlices="x"
                    sliceTooltip={({ slice }) => (
                        <ChartTooltip
                            title={slice.points[0].data.xFormatted}
                            rows={slice.points.map((point) => ({
                                color: point.seriesColor ?? point.serieColor,
                                label: point.seriesId ?? point.serieId,
                                value: formatCurrency(point.data.y),
                            }))}
                        />
                    )}
                    enableTouchCrosshair
                    role="application"
                />
            </Box>
            <ChartLegend items={monthlySales.map((series, i) => ({ label: series.id, color: colors[i] }))} />
        </Box>
    );
};

export default LineChart;
