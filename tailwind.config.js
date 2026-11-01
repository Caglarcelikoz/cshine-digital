module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
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
        neutral: {
          50: "#f4f7f8",
          100: "#e7edee",
          200: "#d0dadc",
          300: "#aebdc0",
          400: "#7f9498",
          500: "#5c7176",
          600: "#47595d",
          700: "#374549",
          800: "#263134",
          900: "#141c1e",
        },
        success: {
          light: "#e7f4ee",
          DEFAULT: "#2f9e6f",
          dark: "#4cc38a",
        },
        warning: {
          light: "#fbf1e0",
          DEFAULT: "#e08600",
          dark: "#ffb454",
        },
        danger: {
          light: "#fdecec",
          DEFAULT: "#e5484d",
          dark: "#ff6369",
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
        fadeIn: "fadeIn 0.2s ease-out",
        landed: "landed 0.6s ease",
        // Hero formules: each lights up for a third of the cycle (staggered delays).
        "hero-pick-line": "heroPickLine 9s ease-in-out infinite",
        "hero-pick-text": "heroPickText 9s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        heroPickLine: {
          "0%, 33%, 100%": { opacity: "0" },
          "4%, 29%": { opacity: "1" },
        },
        heroPickText: {
          "0%, 33%, 100%": { color: "#ffffff" },
          "4%, 29%": { color: "#66e7f3" },
        },
        // A card arriving in its new column on the team board.
        landed: {
          "0%": {
            boxShadow: "0 0 0 1.5px #04c4d4, 0 0 0 6px rgba(4,196,212,0.35)",
          },
          "100%": {
            boxShadow:
              "0 0 0 1.5px #04c4d4, 0 8px 18px -12px rgba(4,196,212,0.6)",
          },
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
