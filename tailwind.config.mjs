import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import typography from '@tailwindcss/typography';

const wal = JSON.parse(
  readFileSync(
    fileURLToPath(new URL('./src/styles/wal-colors.json', import.meta.url)),
    'utf-8'
  )
);

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: wal.special.background,
        surface: wal.colors.color0,
        accent: wal.colors.color4,
        muted: wal.colors.color7,
        fg: wal.special.foreground,
      },
    },
  },
  plugins: [typography],
};
