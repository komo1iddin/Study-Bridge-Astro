import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify/static';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    svelte(),
    react({
      include: ['**/react/*', '**/features/**/*.tsx'],
      experimentalReactChildren: true,
      ssr: true
    })
  ],
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'ru', 'en'],
    fallback: {
      ru: 'uz',
      en: 'uz',
    },
    routing: {
      prefixDefaultLocale: true,
      strategy: 'directory',
    },
  },
  srcDir: './src',
  devToolbar: {
    enabled: true,
    settings: {
      audit: {
        enabled: false
      }
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
      minify: 'esbuild',
    },
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['lucide-astro', 'nanostores', '@nanostores/persistent'],
        },
      },
    },
    ssr: {
      noExternal: ['react-icons']
    }
  },
  adapter: netlify(),
});