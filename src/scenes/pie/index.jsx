import { Box } from "@mui/material";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import PieChart from "../../components/PieChart";

const Pie = () => (
    <Box>
        <Header title="Medios de pago" subtitle="Cómo te pagan tus clientes: participación de cada medio en las ventas del mes" />
        <SectionCard>
            <Box height={{ xs: 400, md: "66vh" }}>
                <PieChart />
            </Box>
        </SectionCard>
    </Box>
);

export default Pie;
