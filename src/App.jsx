import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Topbar from "./scenes/global/Topbar"
import SidebarComponent from "./scenes/global/Sidebar"
import Dashboard from "./scenes/dashboard/Dashboard"
import Team from "./scenes/team"
import Contacts from "./scenes/contacts"
import Invoices from "./scenes/invoice"
import Form from "./scenes/form"
import Calendar from "./scenes/calendar"
import Bar from "./scenes/bar"
import FAQ from "./scenes/faq"
import Line from "./scenes/line"
import Pie from "./scenes/pie"
import Geography from "./scenes/geography"
import { useState } from "react"


function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(false);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComponent isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <main
            className="content"
            style={{
              marginLeft: isCollapsed ? "80px" : "250px",
              transition: "margin-left 0.3s ease",
              padding: "20px"
            }}
          >
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
