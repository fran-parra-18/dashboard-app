import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Pie = () => {

    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="A simple Bar chart"/>
            <Box height="75vh">
            <PieChart/>

            </Box>
        </Box>
    )
}

export default Pie;