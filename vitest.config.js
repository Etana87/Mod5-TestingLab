import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './vitest.setup.js', // Asegúrate de que la ruta sea correcta
  },
});