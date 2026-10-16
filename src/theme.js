import { createContext, useEffect, useMemo, useState } from "react";
import { alpha, createTheme } from "@mui/material/styles";
import { esES as coreEsES } from "@mui/material/locale";
import { esES as gridEsES } from "@mui/x-data-grid/locales";

const FONT_FAMILY = ['"Plus Jakarta Sans"', "system-ui", "sans-serif"].join(",");
const STORAGE_KEY = "mi-negocio:color-mode";

// Paleta categórica para gráficos: funciona sobre fondo claro y oscuro
export const chartColors = ["#6366f1", "#14b8a6", "#f59e0b", "#ec4899", "#0ea5e9", "#84cc16"];

const palettes = {
    light: {
        primary: { main: "#4f46e5", light: "#818cf8", dark: "#4338ca", contrastText: "#fff" },
        secondary: { main: "#0d9488", contrastText: "#fff" },
        success: { main: "#16a34a" },
        error: { main: "#dc2626" },
        warning: { main: "#d97706" },
        info: { main: "#0284c7" },
        background: { default: "#f5f6fa", paper: "#ffffff" },
        text: { primary: "#111827", secondary: "#6b7280" },
        divider: "#e5e7eb",
        surfaceMuted: "#eef0f6",
    },
    dark: {
        primary: { main: "#818cf8", light: "#a5b4fc", dark: "#6366f1", contrastText: "#0b1120" },
        secondary: { main: "#2dd4bf", contrastText: "#0b1120" },
        success: { main: "#4ade80" },
        error: { main: "#f87171" },
        warning: { main: "#fbbf24" },
        info: { main: "#38bdf8" },
        background: { default: "#0b1120", paper: "#131c2e" },
        text: { primary: "#e5e7eb", secondary: "#94a3b8" },
        divider: "rgba(148, 163, 184, 0.16)",
        surfaceMuted: "#1c2740",
    },
};

export const themeSettings = (mode) => ({
    palette: { mode, ...palettes[mode], chart: chartColors },
    shape: { borderRadius: 12 },
    typography: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        h1: { fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em" },
        h2: { fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" },
        h3: { fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" },
        h4: { fontSize: 20, fontWeight: 700 },
        h5: { fontSize: 16, fontWeight: 700 },
        h6: { fontSize: 14, fontWeight: 700 },
        overline: { fontWeight: 700, letterSpacing: "0.08em" },
        button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                body: { scrollbarColor: `${alpha(theme.palette.text.secondary, 0.35)} transparent` },
                "*::-webkit-scrollbar": { width: 10, height: 10 },
                "*::-webkit-scrollbar-track": { background: "transparent" },
                "*::-webkit-scrollbar-thumb": {
                    background: alpha(theme.palette.text.secondary, 0.3),
                    borderRadius: 8,
                    border: `2px solid ${theme.palette.background.default}`,
                },
                "*::-webkit-scrollbar-thumb:hover": { background: alpha(theme.palette.text.secondary, 0.5) },
            }),
        },
        MuiPaper: {
            styleOverrides: { root: { backgroundImage: "none" } },
        },
        MuiCard: {
            defaultProps: { variant: "outlined" },
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: 16,
                    boxShadow: theme.palette.mode === "light" ? "0 1px 2px rgba(16, 24, 40, 0.04)" : "none",
                }),
            },
        },
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: { root: { borderRadius: 10, paddingInline: 16 } },
        },
        MuiChip: {
            styleOverrides: { root: { fontWeight: 600 } },
        },
        MuiTooltip: {
            defaultProps: { arrow: true },
        },
        MuiMenu: {
            styleOverrides: {
                paper: ({ theme }) => ({
                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.16)",
                }),
            },
        },
        MuiAccordion: {
            defaultProps: { disableGutters: true, elevation: 0 },
            styleOverrides: {
                root: ({ theme }) => ({
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 14,
                    marginBottom: 12,
                    "&:before": { display: "none" },
                    "&:first-of-type, &:last-of-type": { borderRadius: 14 },
                }),
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: ({ theme }) => ({
                    border: "none",
                    "--DataGrid-containerBackground": theme.palette.surfaceMuted,
                    "& .MuiDataGrid-columnHeaderTitle": { fontWeight: 700 },
                    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
                        { outline: "none" },
                }),
            },
        },
    },
});

// Textos que el locale español del Data Grid deja en inglés
const gridLocaleFixes = {
    components: {
        MuiDataGrid: {
            defaultProps: {
                localeText: {
                    paginationDisplayedRows: ({ from, to, count }) => `${from}–${to} de ${count}`,
                },
            },
        },
    },
};

//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

const getInitialMode = () => {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        // localStorage puede no estar disponible (modo privado, etc.)
    }
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const useMode = () => {
    const [mode, setMode] = useState(getInitialMode);

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, mode);
        } catch {
            // sin persistencia, el tema igual funciona
        }
        document.querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", palettes[mode].background.default);
    }, [mode]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );
    const theme = useMemo(() => createTheme(themeSettings(mode), coreEsES, gridEsES, gridLocaleFixes), [mode]);
    return [theme, colorMode];
};
