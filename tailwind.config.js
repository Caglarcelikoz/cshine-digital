/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cshine-blue": {
          50: "#ecffff",
          100: "#cffdfe",
          200: "#a4fafd",
          300: "#66f3fa",
          400: "#20e2f0",
          500: "#04c4d4",
          600: "#069eb4",
          700: "#0d7e91",
          800: "#146576",
          900: "#155364",
          950: "#073745",
        },
        primary: "#11111f",
        "primary-50": "#2b2b41",
        "primary-100": "#484862",
        "primary-200": "#65657b",
        "primary-300": "#828295",
        "primary-400": "#11162E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
