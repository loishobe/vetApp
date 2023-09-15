import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        orange1: "#FF630B",
        gray1: "#1C1C1E66",
        gray2: "#9D9C9C",
        gray3: "#ffffff80",
        black1: "#1C1C1E",
      },
      borderColor: {
        blue1: "#49494b",
        gray1: "#d8d3cc",
      }
    },
  },
  plugins: [],
}
export default config
