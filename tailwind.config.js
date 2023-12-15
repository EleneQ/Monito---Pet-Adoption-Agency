/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "p-x-md": "calc(5% + 1rem)",
        "p-x-lg": "8.5rem",
      },
      maxWidth: {
        "max-width": "79rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-blue-9": "#003459",
        "primary-blue-10": "#002A48",
      },
      backgroundImage: {
        "primary-beige-gradient":
          "linear-gradient(103deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      },
    },
  },
  plugins: [],
};
