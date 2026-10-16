import { Avatar, Box, Card, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { formatPercent } from "../utils/format";

const StatCard = ({ label, value, delta, icon: Icon, color = "primary" }) => {
    const positive = delta >= 0;
    const TrendIcon = positive ? TrendingUpRoundedIcon : TrendingDownRoundedIcon;

    return (
        <Card sx={{ p: 2.5, height: "100%" }}>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2}>
                <Box minWidth={0}>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        {label}
                    </Typography>
                    <Typography variant="h3" component="p" sx={{ mt: 0.75 }} noWrap>
                        {value}
                    </Typography>
                </Box>
                <Avatar
                    variant="rounded"
                    sx={(theme) => ({
                        width: 44,
                        height: 44,
                        borderRadius: 3,
                        bgcolor: alpha(theme.palette[color].main, 0.12),
                        color: theme.palette[color].main,
                    })}
                >
                    <Icon />
                </Avatar>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mt={2}>
                <Box
                    sx={(theme) => {
                        const tone = positive ? theme.palette.success.main : theme.palette.error.main;
                        return {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            px: 1,
                            py: 0.25,
                            borderRadius: 99,
                            fontSize: 12,
                            fontWeight: 700,
                            color: tone,
                            bgcolor: alpha(tone, 0.12),
                        };
                    }}
                >
                    <TrendIcon sx={{ fontSize: 16 }} />
                    {formatPercent(delta)}
                </Box>
                <Typography variant="caption" color="text.secondary">
                    vs. mes anterior
                </Typography>
            </Box>
        </Card>
    );
};

export default StatCard;
