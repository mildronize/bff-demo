/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';


const root = resolve(__dirname, 'src');

export default defineConfig({
  root,
  server: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    react(),
    tsconfigPaths({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],

  build: {
    // outDir,
    rollupOptions: {
      input: {
        // index: resolve(root, 'index.html'),
        app1: resolve(root, 'app/app1/index.html'),
        app2: resolve(root, 'app/app2/index.html'),
      }
    }
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
