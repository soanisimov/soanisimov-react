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
    extend: {},
  },
  plugins: [
    flowbite,
  ],
  safelist: [
    {
      pattern: /(bg|text|from|to)-(orange|blue|yellow|cyan|green|red|indigo|purple|pink|rose|emerald)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover'],
    },
    {
      pattern: /(from|to)-(orange|blue|yellow|cyan|green|red|indigo|purple|pink|rose|emerald)-(100|200|300|400|500|600|700|800|900)\/(30|50)/,
    },
  ],
}

