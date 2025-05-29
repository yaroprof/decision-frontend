import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  define: {
    'process.env': process.env, // якщо потрібно явно прокидати ENV
  }
});

