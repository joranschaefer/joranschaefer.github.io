import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // GitHub Pages serves from /docs on main
    outDir: 'docs',
    rollupOptions: {
      // The banner and the mail are their own pages, loaded into the previewers' iframes
      input: {
        main: 'index.html',
        banner: 'src/banner/banner.html',
        mail: 'src/mail/mail.html',
      },
    },
  },
})
