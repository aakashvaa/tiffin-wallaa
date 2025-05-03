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
      boxShadow: {
        'custom-light':
          '0.5px 0.5px 2px rgba(0, 0, 0, 0.1), -0.5px -0.5px 2px rgba(0, 0, 0, 0.1)',
        'button-light':
          '0 0px 0px 2px rgba(0, 0, 0, 0.04), 0 0 0 4px rgba(0, 0, 0, 0.05)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
