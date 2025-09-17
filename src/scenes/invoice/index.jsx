import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";


const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Box height="100%" display="flex" alignItems="center">
                    <Typography >
                        ${params.row.cost}
                    </Typography>
                </Box>
            )
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
    ];

    return (
        <Box m="20px">
            <Header
                title="Invoices"
                subtitle="List of Invoices balances"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-columnHeaderTitle": {
                        color: colors.grey[100],
                        fontWeight: "bold",
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: `${colors.redAccent[600]} !important`,
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.redAccent[600],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.blueAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-row:hover": {
                        "&:hover": {
                            backgroundColor: colors.grey[500],
                        },
                    },
                    "& .MuiDataGrid-row.Mui-selected": {
                        backgroundColor: colors.grey[600],
                    },
                    "& .MuiDataGrid-row": {
                        borderBottom: `1px solid ${colors.grey[100]}`,
                    },
                    "& .MuiDataGrid-cell:focus": {
                        outline: "none",
                    },
                    "& .MuiDataGrid-cell:focus-within": {
                        outline: "none",
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Invoices;