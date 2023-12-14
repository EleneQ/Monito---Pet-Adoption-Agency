/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "p-x-md": "calc(5% + 1rem)",
        "p-x-lg": "8rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-blue-9": "#003459",
      },
    },
  },
  plugins: [],
};
