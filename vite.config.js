import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/my-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        // works: resolve(import.meta.dirname, 'works.html'),
      },
    },
  },
})
