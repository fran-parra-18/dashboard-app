import { Box, CircularProgress } from "@mui/material";

const PageLoader = () => (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="50vh">
        <CircularProgress aria-label="Cargando" />
    </Box>
);

export default PageLoader;
