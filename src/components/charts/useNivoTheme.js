import { useMemo } from "react";
import { useTheme } from "@mui/material";

// Tema compartido por todos los gráficos de Nivo, derivado del tema de MUI
export const useNivoTheme = () => {
    const theme = useTheme();

    return useMemo(() => {
        const { text, divider, background } = theme.palette;
        return {
            text: { fontFamily: theme.typography.fontFamily, fontSize: 12, fill: text.secondary },
            axis: {
                domain: { line: { stroke: "transparent" } },
                ticks: { line: { stroke: "transparent" }, text: { fill: text.secondary } },
                legend: { text: { fill: text.primary, fontWeight: 600 } },
            },
            grid: { line: { stroke: divider, strokeDasharray: "4 4" } },
            crosshair: { line: { stroke: text.secondary, strokeOpacity: 0.6 } },
            labels: { text: { fontWeight: 700 } },
            tooltip: {
                container: {
                    background: background.paper,
                    color: text.primary,
                    fontSize: 13,
                    borderRadius: 10,
                    border: `1px solid ${divider}`,
                    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.18)",
                },
            },
        };
    }, [theme]);
};
