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
      background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
      icons: [
        {
          src: 'src/assets/icons/app-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'src/assets/icons/app-icon-512x512.png',
          sizes: '512x512', 
          type: 'image/png',
          purpose: 'any maskable' 
        }
      ]
    },
    // workbox: {
    //   globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
    //   runtimeCaching: [
    //     {
    //       urlPattern: /^https:\/\/api\.quotable\.io\/random/,
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'quotes-cache',
    //         expiration: {
    //           maxEntries: 10,
    //           maxAgeSeconds: 24 * 60 * 60 
    //         }
    //       }
    //     }
    //   ]
    // }
  })


  ],
})
