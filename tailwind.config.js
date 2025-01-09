import 'flowbite';

import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(transparent 1px, #ffffff 1px)',
      },
      colors: {
        'custom-color': 'rgb(15, 17, 21)',
      },
    },
  },
  plugins: [
    flowbite,
  ],
  safelist: [
    {
      pattern: /(bg|border|text|from|to)-(sky|amber|orange|blue|yellow|cyan|green|red|indigo|purple|pink|rose|emerald)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover'],
    },
    {
      pattern: /(from|to)-(sky|orange|blue|yellow|amber|cyan|green|red|indigo|purple|pink|rose|emerald)-(100|200|300|400|500|600|700|800|900)\/(30|50)/,
    },
  ],
}

