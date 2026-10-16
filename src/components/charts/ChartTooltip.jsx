import { Box, Typography } from "@mui/material";

// Tooltip común de los gráficos. rows: [{ color, label, value }]
const ChartTooltip = ({ title, rows }) => (
    <Box
        sx={{
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 2.5,
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.18)",
            px: 1.5,
            py: 1,
            minWidth: 150,
        }}
    >
        {title && (
            <Typography variant="caption" color="text.secondary" fontWeight={600} display="block" mb={0.5}>
                {title}
            </Typography>
        )}
        {rows.map((row) => (
            <Box key={row.label} display="flex" alignItems="center" gap={1} py={0.25}>
                {row.color && <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: row.color }} />}
                <Typography variant="body2" sx={{ flex: 1 }}>
                    {row.label}
                </Typography>
                <Typography variant="body2" fontWeight={700}>
                    {row.value}
                </Typography>
            </Box>
        ))}
    </Box>
);

export default ChartTooltip;
