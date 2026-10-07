# 📊 React Dashboard

A responsive administration dashboard built with React and Material UI.

The project focuses on creating a reusable dashboard interface for displaying, filtering and managing structured data through modern UI components.

## ✨ Features

* 📊 Dashboard with KPI stat boxes, recent transactions and embedded charts
* 📋 Interactive data tables (team, contacts, invoices) with toolbar, filters and quick search
* 📈 Bar, pie, line and geography (choropleth) charts built with Nivo
* 📅 Interactive calendar to create and delete events (FullCalendar)
* 📝 Profile form with validation (Formik + Yup)
* ❓ FAQ page with accordions
* 🌗 Light / dark mode toggle
* 🧭 Collapsible sidebar navigation
* ⚡ Fast development environment with Vite

## 🛠️ Tech Stack

* React
* JavaScript
* Material UI (MUI)
* MUI Data Grid
* React Router
* React Pro Sidebar
* Nivo (charts)
* FullCalendar
* Formik + Yup
* Vite
* Vercel (deployment)

## 🖥️ Dashboard UI

The application combines several common administration-interface patterns:

```text
Dashboard
│
├── Sidebar Navigation
│
├── Main Content
│   ├── Data Grid
│   ├── Filters
│   └── Data Views
│
└── Responsive Layout
```

## 📊 Data Grid

The project uses Material UI Data Grid to display structured information.

This provides functionality for working with tabular data while maintaining a consistent Material Design interface.

The dashboard also implements filtering functionality to make larger datasets easier to explore.

## 🧭 Navigation

Navigation is implemented using React Pro Sidebar.

The sidebar provides persistent access to the main sections of the application while adapting to different screen sizes.

## 📱 Responsive Design

The dashboard was designed to remain usable across different viewport sizes.

The interface combines responsive layouts with reusable React components to avoid duplicating UI logic.

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

Since the app uses client-side routing (React Router), `vercel.json` rewrites every route to `index.html`, so reloading or opening a URL like `/team` directly works instead of returning a 404.

## 📁 Project Structure

The application follows a component-based React architecture:

```text
public/
└── assets/          # static images (user avatar)
src/
├── components/      # reusable UI: Header, StatBox, ProgressCircle and chart wrappers
├── data/            # mock data and geo features used by tables and charts
├── scenes/          # one folder per page (dashboard, team, contacts, invoice,
│   │                #   form, calendar, faq, bar, pie, line, geography)
│   └── global/      # Topbar and Sidebar
├── theme.js         # color tokens, MUI theme and light/dark mode context
├── App.jsx          # layout and routes
└── main.jsx         # entry point
vercel.json          # SPA rewrites for Vercel
```

## 🎯 What I Practiced

This project helped me practice:

* React component architecture
* Material UI
* Working with Data Grid components
* Filtering structured data
* Responsive dashboard layouts
* Sidebar navigation
* Managing third-party React libraries
* Updating code when library APIs change
* Organizing reusable UI components

## 💡 Technical Challenges

Part of the development involved adapting the application to changes in third-party libraries.

This included updating deprecated Material UI Data Grid functionality and adapting the sidebar implementation to newer versions of React Pro Sidebar.

These changes provided practical experience maintaining frontend code when dependencies evolve.

## 👨‍💻 Author

**Francisco Parra**

Software Development student focused on frontend development, React, QA and full-stack applications.
