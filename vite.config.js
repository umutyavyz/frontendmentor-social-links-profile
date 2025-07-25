import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/frontendmentor-social-links-profile/",
  plugins: [react(), tailwindcss()],
})
