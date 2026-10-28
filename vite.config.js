import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sobreMi: resolve(__dirname, 'pages/sobre-mi.html'),
        servicios: resolve(__dirname, 'pages/servicios.html'),
        proyectos: resolve(__dirname, 'pages/proyectos.html'),
        contacto: resolve(__dirname, 'pages/contacto.html'),
      },
    },
  },
});
