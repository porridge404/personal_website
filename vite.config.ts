import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal_website/', // Set the correct base path for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: [],
  },
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 3000,
    host: true
  }
});