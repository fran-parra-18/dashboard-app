# 📊 Mi Negocio — Business Dashboard

A responsive management dashboard for small businesses, built with React and Material UI.

The interface is fully in Spanish (Argentina): sales figures are shown in pesos (ARS), dates use the local format and the sample data (clients, invoices, payment methods, provinces) reflects a local store.

## ✨ Features

* 🏠 Home overview with KPI cards, monthly sales trend, recent sales, monthly goal, units per category and payment-method breakdown
* 📥 CSV export of recent sales, ready to open in Excel (`;` separator, UTF-8 with BOM)
* 📋 Data tables for team, clients and invoices with toolbar, filters, quick search, export and Spanish localization
* 🧾 Invoice summary (billed, collected, pending, overdue) and status chips
* 📝 New-client form with validation (Formik + Yup) that adds the client to the list instantly
* 📅 Interactive calendar in Spanish: create and delete events with dialogs; events are relative to today's date
* 📈 Reports: sales by category (bar), payment methods (donut), sales evolution (line) and online shipments by country (choropleth + ranking)
* 🔎 Quick section search in the top bar
* 🌗 Light / dark mode that follows the system preference and is remembered between visits
* 🧭 Collapsible sidebar on desktop and slide-in drawer on mobile, with the active section derived from the URL
* 🚫 404 page for unknown routes
* ⚡ Route-based code splitting with `React.lazy`: each page and its libraries load only when visited

## 🛠️ Tech Stack

* React 19
* JavaScript
* Material UI (MUI) 7
* MUI X Data Grid
* React Router
* Nivo (charts)
* FullCalendar
* Formik + Yup
* Vite
* Vercel (deployment)

## 🎨 Design

* Custom MUI theme with indigo accent, rounded cards and the *Plus Jakarta Sans* typeface
* Shared Nivo theme derived from the MUI palette, so every chart matches light and dark mode
* HTML chart legends and custom tooltips that adapt to small screens
* Component overrides in the theme (cards, buttons, accordions, data grid, scrollbars) instead of repeated inline styles

## 🚀 Running Locally

### Requirements

* Node.js
* npm

Clone the repository:

```bash
git clone https://github.com/fran-parra-18/dashboard-app.git
cd dashboard-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL displayed by Vite in the terminal.

Other scripts:

```bash
npm run build    # production build in dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## ☁️ Deployment

The project is ready to deploy on [Vercel](https://vercel.com/) (framework preset: **Vite**, output directory: `dist`).

Since the app uses client-side routing (React Router), `vercel.json` rewrites every route to `index.html`, so reloading or opening a URL like `/clientes` directly works instead of returning a 404.

## 🗺️ Routes

| Path | Page |
| --- | --- |
| `/` | Inicio (overview) |
| `/equipo` | Equipo |
| `/clientes` | Clientes |
| `/clientes/nuevo` | Nuevo cliente |
| `/facturas` | Facturas |
| `/calendario` | Calendario |
| `/ayuda` | Preguntas frecuentes |
| `/reportes/categorias` | Ventas por categoría |
| `/reportes/medios-de-pago` | Medios de pago |
| `/reportes/ventas` | Evolución de ventas |
| `/reportes/envios` | Envíos por país |

## 📁 Project Structure

```text
src/
├── components/      # Header, cards, DataTable, ProgressCircle and chart wrappers
│   └── charts/      # shared Nivo theme, tooltip and legend
├── context/         # clients state shared by the form and the clients table
├── data/            # sample data (relative to today's date) and geo features
├── scenes/          # one folder per page
│   └── global/      # Topbar and Sidebar
├── utils/           # currency/date formatting and CSV export
├── navigation.js    # menu sections, used by the sidebar and the search
├── theme.js         # MUI theme, palette and light/dark mode
├── App.jsx          # layout and lazy-loaded routes
└── main.jsx         # entry point
vercel.json          # SPA rewrites for Vercel
```

## 🎯 What I Practiced

* React component architecture and shared layout components
* Theming Material UI (palette, typography, component overrides, localization)
* Working with Data Grid components
* Responsive dashboard layouts (permanent vs. temporary drawer, responsive grid)
* Data visualization with Nivo
* Form validation and shared state with React context
* Performance: code splitting and bundle analysis
* Adapting UI and content for a specific audience (Spanish, Argentine formats)

## 💡 Technical Challenges

* Updating deprecated MUI Data Grid APIs and completing missing Spanish translations in its locale
* Replacing React Pro Sidebar with an MUI Drawer to get a collapsible desktop menu and a mobile drawer with the same component
* Splitting a ~2 MB single bundle into lazy-loaded routes (manual vendor chunks created circular imports that broke the production build, so the split is left to Vite)

## 👨‍💻 Author

**Francisco Parra**

Software Development student focused on frontend development, React, QA and full-stack applications.
