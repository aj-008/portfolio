import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://your-domain.com', // update once you pick a domain
  output: 'static',
  integrations: [tailwind(), mdx()],
});
