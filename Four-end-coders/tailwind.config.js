// tailwind.config.js (converted to ESM)
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        'tablet': {'min': '768px', 'max': '1314px'}, // Custom tablet range
      },
    },
  },
  plugins: [],
};
