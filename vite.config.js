import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LittleLemon",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/__tests__/setup.js",
  },
  server: {
    host: "0.0.0.0", // This allows external connections
    port: 5173,
    strictPort: true, // Prevents automatic port switching
  },
});
