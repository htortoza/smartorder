// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // AGENTE: dominio real del cliente. (Para GitHub Pages usar site github.io + base '/smartorder')
  site: 'https://htortoza.github.io',
  base: '/smartorder',

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/draft/') && !page.includes('/admin/'),
    }),
  ],

  compressHTML: true,

  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('gsap'))  return 'gsap';
            if (id.includes('lenis')) return 'lenis';
          },
        },
      },
    },
    optimizeDeps: {
      include: ['gsap', 'lenis'],
    },
  },
});
