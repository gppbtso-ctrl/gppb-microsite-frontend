/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  variants: {
    extend: {
      width: ["responsive"],
   // Add responsive variant to the 'width' utility
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        'anonymous-pro': ["var(--font-anonymous-pro)"],
        'hanken-grotesk': ["var(--font-hanken-grotesk)"],
        'monument': ["var(--font-monument)"],
      },
      boxShadow: {
        'jubilation': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        'custom': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      },
    },
  },
  plugins: [],
});

