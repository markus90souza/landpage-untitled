import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray100: '#f2f4f7',
        gray200: '#e4e7ed',
        gray300: '#d0d5dd',
        gray600: '#475467',
        gray700: '#344054',
        gray900: '#101828',
        brand50: '#f9f5ff',
        brand600: '#7f56d9',
        brand700: '#6941c6',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      maxWidth: {
        'grid-container': '77.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
