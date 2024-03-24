/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      color: {
        primary: {
          1: "#892c28",
          2: "#38d111",
        },
      },
    },
  },
  plugins: [],
};
