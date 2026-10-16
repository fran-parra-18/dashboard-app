import { Box, Card, Typography } from "@mui/material";

const SectionCard = ({ title, subtitle, action, children, sx }) => (
    <Card sx={{ p: { xs: 2, md: 2.5 }, height: "100%", display: "flex", flexDirection: "column", ...sx }}>
        {(title || action) && (
            <Box display="flex" alignItems="flex-start" justifyContent="space-between" gap={2} mb={2}>
                <Box>
                    {title && <Typography variant="h6">{title}</Typography>}
                    {subtitle && (
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                            {subtitle}
                        </Typography>
                    )}
                </Box>
                {action}
            </Box>
        )}
        {children}
    </Card>
);

export default SectionCard;
