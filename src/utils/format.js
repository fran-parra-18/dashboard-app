const LOCALE = "es-AR";

const currencyFormatter = new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
});
const compactFormatter = new Intl.NumberFormat(LOCALE, {
    notation: "compact",
    maximumFractionDigits: 1,
});

export const formatCurrency = (value) => currencyFormatter.format(value);

export const formatCompactCurrency = (value) => `$ ${compactFormatter.format(value)}`;

export const formatNumber = (value) => value.toLocaleString(LOCALE);

export const formatPercent = (value) =>
    `${value > 0 ? "+" : ""}${value.toLocaleString(LOCALE, { maximumFractionDigits: 1 })}%`;

// Las fechas de los datos son "YYYY-MM-DD"; se parsean como hora local para no correr un día
export const parseDate = (isoDate) => new Date(`${isoDate}T00:00:00`);

export const formatDate = (isoDate, options = { day: "2-digit", month: "short", year: "numeric" }) =>
    parseDate(isoDate).toLocaleDateString(LOCALE, options).replace(".", "");

export const formatShortDate = (date) =>
    date.toLocaleDateString(LOCALE, { day: "2-digit", month: "2-digit", year: "numeric" });

export const toIsoDate = (date) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

// CSV con ";" y BOM para que Excel en español lo abra con acentos y columnas correctas
export const downloadCsv = (filename, rows, columns) => {
    const escape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const lines = [
        columns.map((column) => escape(column.label)).join(";"),
        ...rows.map((row) => columns.map((column) => escape(column.value(row))).join(";")),
    ];
    const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
};
