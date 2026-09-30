import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // GitHub Pages serves from /docs on main
    outDir: 'docs',
  },
})
