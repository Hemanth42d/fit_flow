import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for Vercel/Netlify, '/repo-name/' for GitHub Pages
  base: '/',
});