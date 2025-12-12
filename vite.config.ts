import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleX from 'unplugin-stylex/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
})
