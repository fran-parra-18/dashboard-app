import { Box, CircularProgress } from "@mui/material";

const ProgressCircle = ({ value = 75, size = 40, thickness = 4, color = "primary", children }) => (
    <Box sx={{ position: "relative", display: "inline-flex", width: size, height: size }}>
        <CircularProgress
            variant="determinate"
            value={100}
            size={size}
            thickness={thickness}
            sx={{ color: "surfaceMuted" }}
            aria-hidden
        />
        <CircularProgress
            variant="determinate"
            value={Math.min(value, 100)}
            size={size}
            thickness={thickness}
            color={color}
            sx={{ position: "absolute", inset: 0, "& .MuiCircularProgress-circle": { strokeLinecap: "round" } }}
        />
        {children && (
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                {children}
            </Box>
        )}
    </Box>
);

export default ProgressCircle;
