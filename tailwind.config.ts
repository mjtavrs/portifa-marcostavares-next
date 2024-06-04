import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'portifa-beige': '#f2efe6',
        'portifa-grey-100': '#d9d9d9',
        'portifa-grey-900': '#232122',
        'portifa-yellow': '#feda0a',
      },
      gridTemplateColumns: {
        portfolioSection:
          'minmax(10rem, 20rem) minmax(10rem, 20rem) minmax(10rem, 20rem)',
      },
    },
  },
  plugins: [],
}
export default config
