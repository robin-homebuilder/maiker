/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#205375",
        secondary: "#112B3C",
        tertiary: "#358AC3",
        dark: "#000000",
        warning: "#F66B0E",
        accent: "#F6F6F6",
        danger: "#DC3545",
        fore: "#027ACA",
        pageHead: "#1A1F33",
        portalText: "#1C7FCD",
        portalBG: "#1972B8"
      },
      boxShadow: {
        'mainShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'secondShadow': '4px 8px 8px rgba(0, 0, 0, .25)',
        'stepShadow': '0px 0px 2px rgba(0, 0, 0, .25) inset',
        'sidebarPortal': '8px 4px 6px rgba(0, 0, 0, .5)'
      }
    },
  },
  plugins: [],
}
