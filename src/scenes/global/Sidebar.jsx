import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { NavLink, useLocation } from "react-router-dom";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { findActivePath, navSections } from "../../navigation";

const WIDTH = 264;
const COLLAPSED_WIDTH = 80;

const Brand = ({ collapsed }) => (
  <Box display="flex" alignItems="center" gap={1.5} px={collapsed ? 0 : 2.5} justifyContent={collapsed ? "center" : "flex-start"} height={72}>
    <Avatar
      variant="rounded"
      sx={{
        width: 40,
        height: 40,
        borderRadius: 3,
        color: "#fff",
        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      }}
    >
      <StorefrontRoundedIcon />
    </Avatar>
    {!collapsed && (
      <Box>
        <Typography variant="h5" lineHeight={1.2}>Mi Negocio</Typography>
        <Typography variant="caption" color="text.secondary">Panel de gestión</Typography>
      </Box>
    )}
  </Box>
);

const SidebarContent = ({ collapsed, onToggleCollapse, onNavigate }) => {
  const { pathname } = useLocation();
  const activePath = findActivePath(pathname);

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Brand collapsed={collapsed} />

      <Box component="nav" aria-label="Menú principal" flex={1} overflow="auto" pb={2}>
        {navSections.map((section) => (
          <Box key={section.title} mt={1.5}>
            {collapsed ? (
              <Divider sx={{ mx: 2, mb: 1 }} />
            ) : (
              <Typography variant="overline" color="text.secondary" sx={{ px: 3.5, fontSize: 11 }}>
                {section.title}
              </Typography>
            )}
            <List disablePadding>
              {section.items.map(({ title, path, icon: Icon }) => (
                <Tooltip key={path} title={collapsed ? title : ""} placement="right">
                  <ListItemButton
                    component={NavLink}
                    to={path}
                    end
                    selected={activePath === path}
                    onClick={onNavigate}
                    sx={(theme) => ({
                      mx: 1.5,
                      mb: 0.25,
                      minHeight: 42,
                      borderRadius: 2.5,
                      px: collapsed ? 0 : 1.5,
                      justifyContent: collapsed ? "center" : "flex-start",
                      color: "text.secondary",
                      "&:hover": { color: "text.primary" },
                      "&.Mui-selected": {
                        color: "primary.main",
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.18) },
                      },
                    })}
                  >
                    <ListItemIcon sx={{ minWidth: collapsed ? 0 : 38, color: "inherit" }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    {!collapsed && (
                      <ListItemText primary={title} slotProps={{ primary: { fontSize: 14, fontWeight: 600, noWrap: true } }} />
                    )}
                  </ListItemButton>
                </Tooltip>
              ))}
            </List>
          </Box>
        ))}
      </Box>

      <Divider />
      <Box
        display="flex"
        flexDirection={collapsed ? "column" : "row"}
        alignItems="center"
        gap={1.5}
        p={2}
      >
        <Avatar sx={{ bgcolor: "primary.main", color: "primary.contrastText", width: 38, height: 38 }}>
          <StorefrontRoundedIcon fontSize="small" />
        </Avatar>
        {!collapsed && (
          <Box flex={1} minWidth={0}>
            <Typography variant="body2" fontWeight={700} noWrap>Mi Negocio</Typography>
            <Typography variant="caption" color="text.secondary">Administrador</Typography>
          </Box>
        )}
        {onToggleCollapse && (
          <Tooltip title={collapsed ? "Expandir menú" : "Contraer menú"} placement="right">
            <IconButton size="small" onClick={onToggleCollapse} aria-label={collapsed ? "Expandir menú" : "Contraer menú"}>
              {collapsed ? <KeyboardDoubleArrowRightRoundedIcon fontSize="small" /> : <KeyboardDoubleArrowLeftRoundedIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
};

const Sidebar = ({ collapsed, onToggleCollapse, mobileOpen, onMobileClose }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const paperSx = { bgcolor: "background.paper", borderRight: 1, borderColor: "divider", backgroundImage: "none" };

  if (!isDesktop) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        slotProps={{ paper: { sx: { ...paperSx, width: WIDTH } } }}
      >
        <SidebarContent collapsed={false} onNavigate={onMobileClose} />
      </Drawer>
    );
  }

  const width = collapsed ? COLLAPSED_WIDTH : WIDTH;
  const transition = theme.transitions.create("width", { duration: theme.transitions.duration.shorter });

  return (
    <Box component="aside" sx={{ width, flexShrink: 0, transition }}>
      <Drawer
        variant="permanent"
        open
        slotProps={{ paper: { sx: { ...paperSx, width, transition, overflowX: "hidden" } } }}
      >
        <SidebarContent collapsed={collapsed} onToggleCollapse={onToggleCollapse} />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
