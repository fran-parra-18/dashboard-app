import { Box, Typography } from "@mui/material";

// Leyenda en HTML: se acomoda sola en pantallas chicas (las de Nivo no)
const ChartLegend = ({ items }) => (
    <Box display="flex" flexWrap="wrap" justifyContent="center" columnGap={2.5} rowGap={1} mt={1.5}>
        {items.map((item) => (
            <Box key={item.label} display="flex" alignItems="center" gap={1}>
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: item.color }} />
                <Typography variant="body2" color="text.secondary">
                    {item.label}
                </Typography>
            </Box>
        ))}
    </Box>
);

export default ChartLegend;
