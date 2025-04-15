import {heroui} from '@heroui/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'var(--primary-blue)',
          yellow: 'var(--primary-yellow)',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
export default config
