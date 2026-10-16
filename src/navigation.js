import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

export const navSections = [
    {
        title: "General",
        items: [{ title: "Inicio", path: "/", icon: HomeOutlinedIcon }],
    },
    {
        title: "Gestión",
        items: [
            { title: "Equipo", path: "/equipo", icon: PeopleOutlinedIcon },
            { title: "Clientes", path: "/clientes", icon: ContactsOutlinedIcon },
            { title: "Facturas", path: "/facturas", icon: ReceiptLongOutlinedIcon },
        ],
    },
    {
        title: "Herramientas",
        items: [
            { title: "Nuevo cliente", path: "/clientes/nuevo", icon: PersonAddAltOutlinedIcon },
            { title: "Calendario", path: "/calendario", icon: CalendarMonthOutlinedIcon },
            { title: "Preguntas frecuentes", path: "/ayuda", icon: HelpOutlineOutlinedIcon },
        ],
    },
    {
        title: "Reportes",
        items: [
            { title: "Ventas por categoría", path: "/reportes/categorias", icon: BarChartOutlinedIcon },
            { title: "Medios de pago", path: "/reportes/medios-de-pago", icon: DonutLargeOutlinedIcon },
            { title: "Evolución de ventas", path: "/reportes/ventas", icon: ShowChartOutlinedIcon },
            { title: "Envíos por país", path: "/reportes/envios", icon: PublicOutlinedIcon },
        ],
    },
];

export const navItems = navSections.flatMap((section) =>
    section.items.map((item) => ({ ...item, section: section.title }))
);

// Devuelve la ruta del menú más específica que coincide con la URL actual
export const findActivePath = (pathname) =>
    navItems
        .map((item) => item.path)
        .filter((path) => (path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`)))
        .sort((a, b) => b.length - a.length)[0];
