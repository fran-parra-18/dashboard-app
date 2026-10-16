import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Autocomplete,
    Avatar,
    Badge,
    Box,
    Divider,
    IconButton,
    InputAdornment,
    ListItemIcon,
    Menu,
    MenuItem,
    TextField,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { ColorModeContext } from "../../theme";
import { navItems } from "../../navigation";
import { notifications } from "../../data/mockData";

// Buscador para saltar rápido a cualquier sección del panel
const SectionSearch = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    return (
        <Autocomplete
            options={navItems}
            groupBy={(option) => option.section}
            getOptionLabel={(option) => option.title}
            value={null}
            inputValue={inputValue}
            onInputChange={(_, value, reason) => setInputValue(reason === "reset" ? "" : value)}
            onChange={(_, option) => option && navigate(option.path)}
            blurOnSelect
            noOptionsText="No hay secciones con ese nombre"
            forcePopupIcon={false}
            sx={{ flex: 1, maxWidth: 380 }}
            renderOption={({ key, ...props }, option) => {
                const Icon = option.icon;
                return (
                    <Box component="li" key={key} {...props} sx={{ gap: 1.5 }}>
                        <Icon fontSize="small" color="action" />
                        {option.title}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    size="small"
                    placeholder="Buscar sección…"
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRoundedIcon fontSize="small" />
                                </InputAdornment>
                            ),
                        },
                        htmlInput: { ...params.inputProps, "aria-label": "Buscar sección" },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "background.paper" },
                    }}
                />
            )}
        />
    );
};

const Topbar = ({ onMenuClick }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const colorMode = useContext(ColorModeContext);
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const isDark = theme.palette.mode === "dark";

    const [notificationsAnchor, setNotificationsAnchor] = useState(null);
    const [profileAnchor, setProfileAnchor] = useState(null);
    const [unread, setUnread] = useState(notifications.length);

    const openNotifications = (event) => {
        setNotificationsAnchor(event.currentTarget);
        setUnread(0);
    };

    const goTo = (path) => {
        setProfileAnchor(null);
        navigate(path);
    };

    return (
        <Box
            component="header"
            sx={{
                position: "sticky",
                top: 0,
                zIndex: theme.zIndex.appBar,
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: { xs: 2, md: 4 },
                py: 1.5,
                bgcolor: alpha(theme.palette.background.default, 0.85),
                backdropFilter: "blur(10px)",
            }}
        >
            {!isDesktop && (
                <IconButton onClick={onMenuClick} aria-label="Abrir menú" edge="start">
                    <MenuRoundedIcon />
                </IconButton>
            )}

            <SectionSearch />

            <Box flex={1} display={{ xs: "none", md: "block" }} />

            <Tooltip title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
                <IconButton onClick={colorMode.toggleColorMode} aria-label="Cambiar tema">
                    {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
                </IconButton>
            </Tooltip>

            <Tooltip title="Notificaciones">
                <IconButton onClick={openNotifications} aria-label="Notificaciones">
                    <Badge badgeContent={unread} color="error">
                        <NotificationsNoneRoundedIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={notificationsAnchor}
                open={Boolean(notificationsAnchor)}
                onClose={() => setNotificationsAnchor(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{ paper: { sx: { width: 320, maxWidth: "calc(100vw - 32px)", mt: 1 } } }}
            >
                <Typography variant="h6" sx={{ px: 2, py: 1 }}>
                    Notificaciones
                </Typography>
                <Divider />
                {notifications.map((n) => (
                    <MenuItem key={n.id} onClick={() => setNotificationsAnchor(null)} sx={{ py: 1.25, whiteSpace: "normal" }}>
                        <Box>
                            <Typography variant="body2" fontWeight={700}>{n.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{n.detail}</Typography>
                            <Typography variant="caption" color="text.secondary">{n.time}</Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Menu>

            <Tooltip title="Mi cuenta">
                <IconButton onClick={(e) => setProfileAnchor(e.currentTarget)} aria-label="Mi cuenta" sx={{ p: 0.5 }}>
                    <Avatar sx={{ width: 34, height: 34, bgcolor: "primary.main", color: "primary.contrastText" }}>
                        <StorefrontRoundedIcon fontSize="small" />
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={profileAnchor}
                open={Boolean(profileAnchor)}
                onClose={() => setProfileAnchor(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{ paper: { sx: { width: 240, mt: 1 } } }}
            >
                <Box px={2} py={1}>
                    <Typography variant="body2" fontWeight={700}>Mi Negocio</Typography>
                    <Typography variant="caption" color="text.secondary">Administrador</Typography>
                </Box>
                <Divider />
                <MenuItem onClick={() => goTo("/clientes/nuevo")}>
                    <ListItemIcon><PersonAddAltOutlinedIcon fontSize="small" /></ListItemIcon>
                    Cargar cliente
                </MenuItem>
                <MenuItem onClick={() => goTo("/ayuda")}>
                    <ListItemIcon><HelpOutlineOutlinedIcon fontSize="small" /></ListItemIcon>
                    Ayuda
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default Topbar;
