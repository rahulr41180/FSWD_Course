import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allow global variables (like `describe`, `test`, etc.)
    environment: "jsdom", // Use jsdom to simulate the browser environment (important for React testing)
    setupFiles: "./setupTests.js" // Optional: Setup file to add additional global configurations like jest-dom
  }
})
