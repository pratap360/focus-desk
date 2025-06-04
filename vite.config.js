import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'FocusDeck',
      short_name: 'FocusDeck',
      description: 'A productivity tool to help you focus on your tasks',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'src/assets/icons/app-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'src/assets/icons/app-icon-chrome-512x512.png',
          sizes: '32x32',
          type: 'image/png'
        }
      ]
    }
  })


  ],
})
