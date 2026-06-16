import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jumanjivault.com',
  compressHTML: true,
  scopedStyleStrategy: 'where',

  // Server configuration for local dev
  server: {
    port: 4321,
    host: true,
  },

  // Build output with content-hashed filenames for "last for years" caching
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
      cssCodeSplit: true,
    },
  },
});
