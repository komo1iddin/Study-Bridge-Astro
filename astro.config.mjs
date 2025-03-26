import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify/static';
import compress from 'astro-compress';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    svelte(),
    compress({
      css: true,
      html: true,
      img: {
        quality: 80,
        avif: false, // Consider enabling for better compression
        webp: true,  // WebP offers good compression with wide browser support
      },
      js: true,
      svg: true,
    }),
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
      strategy: 'pathname-prefix-always',
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
      target: 'es2020', // Modern browsers for better optimization
      reportCompressedSize: true, // Report accurate compressed sizes
      // Optimize chunk size
      rollupOptions: {
        output: {
          // Improved chunks to better split code
          manualChunks: function(id) {
            // Chunk for Lucide icons
            if (id.includes('lucide-')) {
              return 'icons';
            }
            
            // UI component chunk
            if (id.includes('/components/ui/')) {
              return 'ui';
            }
            
            // Vendor libraries
            if (id.includes('node_modules')) {
              if (id.includes('nanostores') || id.includes('persistent')) {
                return 'store';
              }
              
              // Group common libraries
              if (id.includes('svelte')) {
                return 'svelte-vendor';
              }
              
              // Other vendors in shared chunk
              return 'vendor';
            }
            
            // Features split by functionality 
            if (id.includes('/features/university/')) {
              return 'university-features';
            }
            
            if (id.includes('/features/grants/')) {
              return 'grants-features';
            }
            
            // Shared utilities
            if (id.includes('/utils/')) {
              return 'utils';
            }
          },
          // Optimize module code generation
          generatedCode: {
            preset: 'es2015',
            symbols: false, // More compact output
          },
          // Reduce chunk file sizes
          compact: true,
          // Minimize the number of chunks
          preserveModules: false, 
        },
      },
    },
    assetsInlineLimit: 4096, // Inline small assets
    css: {
      // Optimize CSS
      devSourcemap: false, // Disable sourcemaps in dev for better performance
    },
    optimizeDeps: {
      // Optimize dependencies
      include: ['svelte', 'nanostores', 'lucide-svelte'], // Pre-bundle these dependencies
    },
    ssr: {
      noExternal: []
    }
  },
  adapter: netlify(),
});