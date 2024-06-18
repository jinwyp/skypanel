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

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        registration: resolve(__dirname, 'registration.html'),
        login: resolve(__dirname, 'login.html'),
      },
    },
  },
})
