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
        gray600: '#475467',
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
