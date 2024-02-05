import type { Config } from 'tailwindcss';
const primary = '#c67f41'; // Gold
const primaryDark = '#805734'; // Gold Dark

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        hero: 'calc(100vh - 70px)',
      },
      colors: {
        primary,
        primaryDark,
      },
      backgroundImage: {
        hero: 'url("/images/hero.jpeg")',
        'hero-2': 'url("/images/wines-3.jpg")',
        contact: 'url("/images/wines-2.jpeg")',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        righteous: ['var(--font-righteous)'],
      },
    },
  },
  plugins: [],
};
export default config;

