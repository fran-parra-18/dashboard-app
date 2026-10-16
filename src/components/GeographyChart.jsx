import { ResponsiveChoropleth } from "@nivo/geo";
import { useTheme } from "@mui/material";
import { useNivoTheme } from "./charts/useNivoTheme";
import ChartTooltip from "./charts/ChartTooltip";
import { countryNames, shipmentsByCountry } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";
import { formatNumber } from "../utils/format";

const scale = ["#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca"];

// Mapa centrado en Sudamérica; projectionScale se ajusta al alto del contenedor
const GeographyChart = ({ projectionScale = 320 }) => {
    const theme = useTheme();
    const nivoTheme = useNivoTheme();

    return (
        <ResponsiveChoropleth
            data={shipmentsByCountry}
            features={geoFeatures.features}
            theme={nivoTheme}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors={scale}
            domain={[0, 400]}
            unknownColor={theme.palette.surfaceMuted}
            label={(feature) => countryNames[feature.id] ?? feature.properties.name}
            valueFormat={(v) => `${formatNumber(v)} pedidos`}
            projectionType="mercator"
            projectionScale={projectionScale}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[62, 22, 0]}
            borderWidth={0.6}
            borderColor={theme.palette.background.paper}
            tooltip={({ feature }) => (
                <ChartTooltip
                    rows={[
                        {
                            color: feature.color,
                            label: feature.label,
                            value: feature.formattedValue ?? "Sin envíos",
                        },
                    ]}
                />
            )}
            role="img"
        />
    );
};

export default GeographyChart;
