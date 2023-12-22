import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'display': ['Bebas Neue', 'sans-serif'],
      'mono': ['Aldrich', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/img/portrait.png')",
        'heroback': "url('/img/heroback.jpg')",
        'herobacksm': "url('/img/untitledsmall.jpg')",
        'glassback': "url('/img/glass.jpg')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
