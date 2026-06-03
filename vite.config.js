import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,webp,png,svg,jpg,json,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/kehulum\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'kehulum-covers',
              expiration: { maxEntries: 50, maxAgeSeconds: 86400 * 30 },
            },
          },
        ],
      },
      manifest: {
        name: 'EthioStudy',
        short_name: 'EthioStudy',
        description: 'Free Ethiopian textbooks for Grades 8-12',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#0d9488',
        icons: [
          { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
    }),
  ],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-dom') || id.includes('/react/')) return 'vendor';
          }
        },
      },
    },
  },
})