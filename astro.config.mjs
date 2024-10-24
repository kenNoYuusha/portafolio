// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv'

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://kennoyuusha.github.io',
  base: process.env.NODE_ENV === 'production' ? 'portafolio' : undefined,
});