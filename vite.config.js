import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Librerías grandes en chunks propios: se cachean aparte y solo se bajan en las páginas que las usan
const vendorChunks = [
  ['fullcalendar', ['@fullcalendar', 'preact']],
  ['datagrid', ['@mui/x-data-grid', '@mui/x-internals', '@mui/x-virtualizer']],
  ['geo', ['@nivo/geo', 'd3-geo', 'topojson']],
  ['charts', ['@nivo', 'd3-', '@react-spring', 'internmap']],
  ['mui', ['@mui', '@emotion']],
  ['react', ['react', 'react-dom', 'react-router', 'scheduler']],
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          const pkgPath = id.split('node_modules/').pop()
          const match = vendorChunks.find(([, prefixes]) =>
            prefixes.some((prefix) => pkgPath.startsWith(prefix))
          )
          return match?.[0]
        },
      },
    },
  },
})
