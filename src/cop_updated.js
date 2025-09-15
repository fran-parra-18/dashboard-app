/* Updated: modernized DataGrid toolbar usage; compatible with @mui/x-data-grid v6+ and MUI v5+. */

import { ResponsiveBar } from '@nivo/bar'
import { Box, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { mockBarData as data } from "../data/mockData"

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
            <ResponsiveBar
                data={data}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100],
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                                strokeWidth: 1,
                            },
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    tooltip:{
                        container:{
                            color: colors.grey[500]
                        }
                    }
                }}
                keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "nivo" }}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "#38bcb2",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "#eed312",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", "1.6"]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? undefined : "country", // changed
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? undefined : "food", // changed
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                role="application"
                barAriaLabel={function (e) {
                    return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
                }}
            />
    )
}

export default BarChart;

import { ResponsiveChoropleth } from '@nivo/geo'
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures"

const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
            <ResponsiveChoropleth
                data={data}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100],
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                                strokeWidth: 1,
                            },
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    tooltip:{
                        container:{
                            color: colors.grey[500]
                        }
                    }
                }}
                features={geoFeatures.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={isDashboard ? 40 : 150}
                projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                borderWidth={1.5}
                borderColor="#ffffff"
                legends={
                    !isDashboard
                        ? [
                            {
                                anchor: "bottom-left",
                                direction: "column",
                                justify: true,
                                translateX: 20,
                                translateY: -100,
                                itemsSpacing: 0,
                                itemWidth: 94,
                                itemHeight: 18,
                                itemDirection: "left-to-right",
                                itemTextColor: colors.grey[100],
                                itemOpacity: 0.85,
                                symbolSize: 18,
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemTextColor: "#ffffff",
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]
                        : undefined
                }
            />
    )
}

export default GeographyChart;

import { Typography, Box, useTheme } from "@mui/material";
import  {tokens} from "../theme"

const Header = ({title,subtitle}) => {
    const theme= useTheme();
    const colors= tokens(theme.palette.mode)
    return(
        <Box mb="30px">
            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}>
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;

import { ResponsiveLine } from '@nivo/line';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isDashboard = false }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
            <ResponsiveLine /* or Line for fixed dimensions */
                data={data}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100],
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                                strokeWidth: 1,
                            },
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    tooltip:{
                        container:{
                            color: colors.grey[500]
                        }
                    }
                }}
                colors={isDashboard ? {datum: "color"}: {scheme: "nivo"}}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="catmullRom"
                axisBottom={{ legend:isDashboard ? undefined : 'transportation', legendOffset: 36 }}
                axisLeft={{ legend: isDashboard ? undefined :'count', legendOffset: -40, tickValues: 5 }}
                enableGridX={false}
                enableGridY={false}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'seriesColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 100,
                        itemWidth: 80,
                        itemHeight: 22,
                        symbolShape: 'circle'
                    }
                ]}
            />
    )
}

export default LineChart;

import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";
import { ResponsivePie } from '@nivo/pie'


const PieChart = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
            <ResponsivePie /* or Pie for fixed dimensions */
                data={data}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: colors.grey[100],
                            },
                        },
                        legend: {
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                        ticks: {
                            line: {
                                stroke: colors.grey[100],
                                strokeWidth: 1,
                            },
                            text: {
                                fill: colors.grey[100],
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    tooltip:{
                        container:{
                            color: colors.grey[500]
                        }
                    }
                }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.6}
                cornerRadius={2}
                activeOuterRadiusOffset={8}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={colors.grey[100]}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 100,
                        itemHeight: 18,
                        symbolShape: 'circle'
                    }
                ]}
            />
    )
}

export default PieChart;

import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;

import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () =>{

    return(
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
            <Box height="75vh">
            <BarChart/>
            </Box>
        </Box>
    )
}

export default Bar;

import { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import { formatDate } from "@fullcalendar/core"
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar;

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateString}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.AllDay
            });
        };
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }
    return (
        <Box m="20px">
            <Header title="calendar" subtitle="Full calendar interative page" />

            <Box display="flex" justifyContent="space-between">
                <Box
                    flex="1 1 20%"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((e) => (
                        <ListItem
                            key={e.id}
                            sx={{
                                backgroundColor: colors.greenAccent[500],
                                margin: "10px 0",
                                borderRadius: "2px"
                            }}
                        >
                            <ListItemText
                                primary={e.title}
                                secondary={
                                    <Typography>
                                        {formatDate(e.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </Typography>
                                }
                                
                            />
                        </ListItem>
                        ))}
                    </List>
                </Box>
                {/*Calendar */}

                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar 
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left:"prev,next,today",
                        center:"title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(e)=> setCurrentEvents(e)}
                    initialEvents={[
                        {id:"1234", title:"All-day event", date: "2025-09-14"},
                        {id:"4321", title:"Timed Event", date: "2025-09-28"}
                    ]}
                    />
                </Box>


            </Box>
        </Box>
    )
};

export default Calendar

import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: colors.grey[100],
            fontWeight: "bold",
          },

          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{ toolbar: { showQuickFilter: true, clearSearchOnEscape: true } }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dashboard" subtitle="Welcome to your dashboard" />

                <Box>
                    <Button sx={{ backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px" }}>
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID AND CHART */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}

                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                                Revenue Generated
                            </Typography>
                            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                {/* Transaction */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px">
                            <Box>
                                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Campaingn
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                        <ProgressCircle size="125" />
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
                            $48,352 revenue generated
                        </Typography>
                        <Typography>
                            Includes extra misc expenditures ands costs
                        </Typography>
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px" }}>
                        Sales quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ mb:"15px" }}
                    >
                        Geography Based Trafficc
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
export default Dashboard;

import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently asked questions page"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        an important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit non totam porro numquam quo nesciunt quasi! Facilis ullam, aperiam quam sunt officia eaque consequatur nobis magnam amet soluta hic?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        an important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit non totam porro numquam quo nesciunt quasi! Facilis ullam, aperiam quam sunt officia eaque consequatur nobis magnam amet soluta hic?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        an important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit non totam porro numquam quo nesciunt quasi! Facilis ullam, aperiam quam sunt officia eaque consequatur nobis magnam amet soluta hic?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        an important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit non totam porro numquam quo nesciunt quasi! Facilis ullam, aperiam quam sunt officia eaque consequatur nobis magnam amet soluta hic?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        an important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit non totam porro numquam quo nesciunt quasi! Facilis ullam, aperiam quam sunt officia eaque consequatur nobis magnam amet soluta hic?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;

import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
};

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "phone number is not valid").required("required"),
    address: yup.string().required("required"),
})

const Form = () => {

    const isNonMobile = useMediaQuery("(min.width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m="20 px">
            <Header titlite="create user" subtitle="create a new user profile" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4,minmax(0, 1fr))"
                            sx={
                                {
                                    "& > div": {
                                        gridColumn: isNonMobile ? undefined : "span 4",
                                    }
                                }
                            }
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="first name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2 !important" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="last name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2 !important" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="contact"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                name="address"
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create new User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;

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

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";


const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
    ];

    return (
        <Box m="20px">
            <Header
                title="Invoices"
                subtitle="List of Invoices balances"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .muiCheckbox-root":{
                        color: `${colors.greenAccent[200]} !important`
                    }
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Invoices;

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

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;