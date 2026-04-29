import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lab-1-setup/',   // наприклад, '/lab1/' або '/lab-1-setup/'
})