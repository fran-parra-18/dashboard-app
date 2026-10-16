import { lazy, Suspense, useEffect, useState } from "react"
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route, useLocation } from "react-router-dom"
import { ColorModeContext, useMode } from "./theme"
import ClientsProvider from "./context/ClientsProvider"
import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
import PageLoader from "./components/PageLoader"

// Cada página se carga recién cuando se visita, así el bundle inicial es chico
const Dashboard = lazy(() => import("./scenes/dashboard/Dashboard"))
const Team = lazy(() => import("./scenes/team"))
const Contacts = lazy(() => import("./scenes/contacts"))
const Invoices = lazy(() => import("./scenes/invoice"))
const Form = lazy(() => import("./scenes/form"))
const Calendar = lazy(() => import("./scenes/calendar"))
const FAQ = lazy(() => import("./scenes/faq"))
const Bar = lazy(() => import("./scenes/bar"))
const Pie = lazy(() => import("./scenes/pie"))
const Line = lazy(() => import("./scenes/line"))
const Geography = lazy(() => import("./scenes/geography"))
const NotFound = lazy(() => import("./scenes/notFound"))

const COLLAPSED_KEY = "mi-negocio:sidebar-collapsed"

const readCollapsed = () => {
  try {
    return window.localStorage.getItem(COLLAPSED_KEY) === "true"
  } catch {
    return false
  }
}

function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(readCollapsed);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.localStorage.setItem(COLLAPSED_KEY, String(isCollapsed))
    } catch {
      // sin persistencia, el menú igual funciona
    }
  }, [isCollapsed]);

  // Al cambiar de página, volver arriba
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ClientsProvider>
          <Box display="flex" minHeight="100vh">
            <Sidebar
              collapsed={isCollapsed}
              onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
              mobileOpen={mobileOpen}
              onMobileClose={() => setMobileOpen(false)}
            />
            <Box component="main" flex={1} minWidth={0} display="flex" flexDirection="column">
              <Topbar onMenuClick={() => setMobileOpen(true)} />
              <Box px={{ xs: 2, md: 4 }} pt={1} pb={5}>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/equipo" element={<Team />} />
                    <Route path="/clientes" element={<Contacts />} />
                    <Route path="/clientes/nuevo" element={<Form />} />
                    <Route path="/facturas" element={<Invoices />} />
                    <Route path="/calendario" element={<Calendar />} />
                    <Route path="/ayuda" element={<FAQ />} />
                    <Route path="/reportes/categorias" element={<Bar />} />
                    <Route path="/reportes/medios-de-pago" element={<Pie />} />
                    <Route path="/reportes/ventas" element={<Line />} />
                    <Route path="/reportes/envios" element={<Geography />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </Box>
            </Box>
          </Box>
        </ClientsProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
