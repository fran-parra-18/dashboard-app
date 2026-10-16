import { Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Tabla común: misma tarjeta, barra de herramientas y paginación en todas las páginas
const DataTable = ({ rows, columns, ...props }) => (
    <Card sx={{ height: { xs: "70vh", md: "72vh" }, minHeight: 420, p: 1 }}>
        <DataGrid
            rows={rows}
            columns={columns}
            showToolbar
            disableRowSelectionOnClick
            rowHeight={56}
            pageSizeOptions={[10, 25, 50]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            {...props}
        />
    </Card>
);

export default DataTable;
