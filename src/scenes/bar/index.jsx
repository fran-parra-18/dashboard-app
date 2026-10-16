import { Box } from "@mui/material";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import BarChart from "../../components/BarChart";

const Bar = () => (
    <Box>
        <Header title="Ventas por categoría" subtitle="Unidades vendidas por mes en cada categoría de productos" />
        <SectionCard>
            <Box height={{ xs: 420, md: "68vh" }}>
                <BarChart />
            </Box>
        </SectionCard>
    </Box>
);

export default Bar;
