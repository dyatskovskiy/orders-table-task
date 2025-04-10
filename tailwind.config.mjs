/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;
