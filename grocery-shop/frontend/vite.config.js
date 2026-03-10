import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': { target: 'https://grocery-shop-x7sf.onrender.com', changeOrigin: true } },
  },
});
