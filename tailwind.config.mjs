/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // swap these for your own pywal / Hyprland palette
        bg: '#0f1115',
        surface: '#181b21',
        accent: '#8ab4f8',
        muted: '#8892a0',
      },
    },
  },
  plugins: [],
};
