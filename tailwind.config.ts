import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        secodaryBackground: 'var(--secondary-background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [],
};
export default config;
