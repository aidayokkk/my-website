import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/my-website/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
