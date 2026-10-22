// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

const isVercel = process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  site: isVercel ? 'https://theogenty.fr' : 'https://theog16000.github.io',
  base: isVercel ? '/' : '/portfoliov3',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});