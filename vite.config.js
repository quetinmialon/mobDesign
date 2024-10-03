import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: resolve(__dirname, '/views/infos.html'),
      }
    }
  }
})
