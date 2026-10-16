import { Box, Button } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import { useClients } from "../../context/ClientsContext";
import { formatShortDate, parseDate } from "../../utils/format";

const columns = [
  { field: "id", headerName: "N.º", width: 70 },
  { field: "name", headerName: "Nombre", flex: 1, minWidth: 170 },
  { field: "phone", headerName: "Teléfono", flex: 1, minWidth: 170 },
  { field: "email", headerName: "Email", flex: 1.2, minWidth: 210 },
  { field: "address", headerName: "Dirección", flex: 1, minWidth: 180 },
  { field: "city", headerName: "Localidad", flex: 1, minWidth: 150 },
  { field: "province", headerName: "Provincia", flex: 0.8, minWidth: 130 },
  { field: "zipCode", headerName: "C. P.", width: 90 },
  {
    field: "createdAt",
    headerName: "Alta",
    type: "date",
    width: 120,
    valueGetter: (value) => parseDate(value),
    valueFormatter: (value) => formatShortDate(value),
  },
];

const Contacts = () => {
  const { clients } = useClients();

  return (
    <Box>
      <Header
        title="Clientes"
        subtitle={`${clients.length} clientes registrados`}
        action={
          <Button component={Link} to="/clientes/nuevo" variant="contained" startIcon={<PersonAddAltOutlinedIcon />}>
            Nuevo cliente
          </Button>
        }
      />
      <DataTable
        rows={clients}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
          sorting: { sortModel: [{ field: "createdAt", sort: "desc" }] },
        }}
      />
    </Box>
  );
};

export default Contacts;
