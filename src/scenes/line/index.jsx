import LineChart from "../../components/LineChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Line = () => {

    return(
        <Box m="20px">
            <Header title="Line Chart" subtitle="A simple Line chart"/>
            <Box height="75vh">
            <LineChart/>

            </Box>
        </Box>
    )
}

export default Line;