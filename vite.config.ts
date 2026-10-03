import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the project under /Japanese-style-portfolio/; Vercel serves it at the root.
  base: process.env.GITHUB_PAGES ? '/Japanese-style-portfolio/' : '/',
})
