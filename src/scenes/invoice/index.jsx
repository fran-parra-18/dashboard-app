import { Box, Card, Chip, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import { invoiceStatuses, invoices } from "../../data/mockData";
import { formatCurrency, formatShortDate, parseDate } from "../../utils/format";

const columns = [
    { field: "id", headerName: "Comprobante", flex: 1, minWidth: 170 },
    { field: "name", headerName: "Cliente", flex: 1, minWidth: 170 },
    { field: "email", headerName: "Email", flex: 1.2, minWidth: 210 },
    {
        field: "amount",
        headerName: "Importe",
        type: "number",
        flex: 0.8,
        minWidth: 130,
        valueFormatter: (value) => formatCurrency(value),
    },
    {
        field: "date",
        headerName: "Fecha",
        type: "date",
        width: 120,
        valueGetter: (value) => parseDate(value),
        valueFormatter: (value) => formatShortDate(value),
    },
    {
        field: "status",
        headerName: "Estado",
        width: 130,
        type: "singleSelect",
        valueOptions: Object.entries(invoiceStatuses).map(([value, { label }]) => ({ value, label })),
        renderCell: ({ value }) => (
            <Chip label={invoiceStatuses[value].label} color={invoiceStatuses[value].color} size="small" variant="outlined" />
        ),
    },
];

const totalBy = (status) =>
    invoices.filter((i) => !status || i.status === status).reduce((sum, i) => sum + i.amount, 0);

const summary = [
    { label: "Total facturado", value: totalBy(), color: "text.primary" },
    { label: "Cobrado", value: totalBy("paid"), color: "success.main" },
    { label: "Pendiente de cobro", value: totalBy("pending"), color: "warning.main" },
    { label: "Vencido", value: totalBy("overdue"), color: "error.main" },
];

const Invoices = () => (
    <Box>
        <Header title="Facturas" subtitle="Comprobantes emitidos y estado de cobro" />
        <Grid container spacing={2} mb={2.5}>
            {summary.map((item) => (
                <Grid key={item.label} size={{ xs: 6, md: 3 }}>
                    <Card sx={{ p: 2 }}>
                        <Typography variant="body2" color="text.secondary">{item.label}</Typography>
                        <Typography variant="h4" component="p" color={item.color} sx={{ mt: 0.5 }}>
                            {formatCurrency(item.value)}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <DataTable rows={invoices} columns={columns} checkboxSelection />
    </Box>
);

export default Invoices;
