const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cshine-blue": {
          50: "#e6fbfd",
          100: "#ccf7fb",
          200: "#99eff7",
          300: "#66e7f3",
          400: "#33dfef",
          500: "#04c4d4",
          600: "#039daa",
          700: "#02767f",
          800: "#014e55",
          900: "#01272a",
        },
        midnight: {
          50: "#f2f2f3",
          100: "#e6e6e8",
          200: "#cdced1",
          300: "#b4b5ba",
          400: "#9b9da3",
          500: "#15173b",
          600: "#11122f",
          700: "#0d0e23",
          800: "#080917",
          900: "#04050c",
        },
        accent: {
          50: "#fff7e6",
          100: "#ffefcc",
          200: "#ffdf99",
          300: "#ffcf66",
          400: "#ffbf33",
          500: "#ffaf00",
          600: "#cc8c00",
          700: "#996900",
          800: "#664600",
          900: "#332300",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/hero.svg')",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        glow: "0 0 15px -3px rgba(4, 196, 212, 0.4)",
        "glow-lg": "0 0 25px -5px rgba(4, 196, 212, 0.4)",
        "inner-glow": "inset 0 2px 4px 0 rgba(4, 196, 212, 0.06)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#ffffff",
            a: {
              color: "#04c4d4",
              "&:hover": {
                color: "#039daa",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
