import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },

  server: {
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
      }
    }
  },
  build: {
    manifest: true,

    rollupOptions: {
      input: {
        index: resolve(__dirname, 'admin_index.html'),
        registration: resolve(__dirname, 'registration.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
})
