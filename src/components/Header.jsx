import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle, action }) => {
    useEffect(() => {
        document.title = `${title} · Mi Negocio`;
    }, [title]);

    return (
        <Box
            display="flex"
            flexWrap="wrap"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            justifyContent="space-between"
            gap={2}
            mb={3}
        >
            <Box>
                <Typography variant="h2" component="h1">
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                        {subtitle}
                    </Typography>
                )}
            </Box>
            {action}
        </Box>
    );
};

export default Header;
