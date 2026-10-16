import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

const NotFound = () => {
    useEffect(() => {
        document.title = "Página no encontrada · Mi Negocio";
    }, []);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" minHeight="65vh" gap={1.5}>
            <Typography
                variant="h1"
                component="p"
                sx={{
                    fontSize: { xs: 88, md: 120 },
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                }}
            >
                404
            </Typography>
            <Typography variant="h3" component="h1">No encontramos esta página</Typography>
            <Typography color="text.secondary" maxWidth={420}>
                Puede que la dirección esté mal escrita o que la sección ya no exista.
            </Typography>
            <Button component={Link} to="/" variant="contained" startIcon={<HomeOutlinedIcon />} sx={{ mt: 1.5 }}>
                Volver al inicio
            </Button>
        </Box>
    );
};

export default NotFound;
