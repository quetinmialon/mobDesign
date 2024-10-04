import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    // lib: {
    //   entry: resolve(__dirname, '/src/data/product.json'),
    //   name: 'data',
    //   fileName: 'product.json',
    // },
    rollupOptions: {
      input: {
        main: 'index.html',
        about: resolve(__dirname, '/views/infos.html'),
      }
    }
  }
})
