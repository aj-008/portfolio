import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://your-domain.com', 
  output: 'static',
  integrations: [tailwind(), mdx()],
});
