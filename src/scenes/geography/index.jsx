import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { Box, colors } from "@mui/material";

const Geography = () => {

    return(
        <Box m="20px">
            <Header title="Geography Chart" subtitle="A simple Geography chart"/>
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
            <GeographyChart/>

            </Box>
        </Box>
    )
}

export default Geography;