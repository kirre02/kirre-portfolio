/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      animation: {
        blink: "blink 1.45s infinite step-start",
      },

      keyframes: {
        blink: {
          "0%, 25%, 100%": { opacity: "1" },
          "50%, 75%": { opacity: "0" },
        },
      },
    },
  },

  plugins: [],
};
