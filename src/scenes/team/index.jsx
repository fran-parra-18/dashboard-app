import { Avatar, Box, Chip, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Header from "../../components/Header";
import DataTable from "../../components/DataTable";
import { accessLevels, teamMembers } from "../../data/mockData";

const accessIcons = {
  admin: <AdminPanelSettingsOutlinedIcon />,
  manager: <SecurityOutlinedIcon />,
  seller: <PersonOutlineOutlinedIcon />,
};

const columns = [
  {
    field: "name",
    headerName: "Nombre",
    flex: 1.4,
    minWidth: 220,
    renderCell: ({ row }) => (
      <Box display="flex" alignItems="center" gap={1.5} height="100%">
        <Avatar
          sx={(theme) => ({
            width: 34,
            height: 34,
            fontSize: 13,
            fontWeight: 700,
            bgcolor: alpha(theme.palette.primary.main, 0.12),
            color: "primary.main",
          })}
        >
          {row.name.split(" ").map((w) => w[0]).join("")}
        </Avatar>
        <Box minWidth={0}>
          <Typography variant="body2" fontWeight={700} noWrap>{row.name}</Typography>
          <Typography variant="caption" color="text.secondary" noWrap display="block">{row.role}</Typography>
        </Box>
      </Box>
    ),
  },
  { field: "phone", headerName: "Teléfono", flex: 1, minWidth: 160 },
  { field: "email", headerName: "Email", flex: 1.2, minWidth: 200 },
  {
    field: "access",
    headerName: "Nivel de acceso",
    flex: 1,
    minWidth: 170,
    valueFormatter: (value) => accessLevels[value].label,
    renderCell: ({ value }) => (
      <Chip
        icon={accessIcons[value]}
        label={accessLevels[value].label}
        color={accessLevels[value].color}
        variant="outlined"
        size="small"
      />
    ),
  },
];

const Team = () => (
  <Box>
    <Header title="Equipo" subtitle="Las personas que trabajan en tu negocio y sus permisos" />
    <DataTable rows={teamMembers} columns={columns} />
  </Box>
);

export default Team;
