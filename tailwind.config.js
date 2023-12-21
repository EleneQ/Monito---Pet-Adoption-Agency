/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      spacing: {
        "p-x-xs": "1.3rem",
        "p-x-md": "calc(5% + 1rem)",
        "p-x-lg": "8.5rem",
      },
      maxWidth: {
        "max-width": "100rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "primary-blue-9": "#003459",
        "primary-blue-10": "#002A48",
        "pink-3": "#FCEED5",
      },
      boxShadow: {
        "card-shadow": "0px 8px 24px rgba(149, 157, 165, 0.2)",
        "orange-shadow": "0 7px 15px 0 rgba(255,83,48,.35)",
        "dark-shadow":
          "0px 45px 25px rgba(0, 0, 0, 0.2), 0px -12px 20px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.12), 0px 12px 13px rgba(0, 0, 0, 0.17), 0px -3px 5px rgba(0, 0, 0, 0.09)",
      },
      backgroundImage: {
        "primary-beige-gradient":
          "linear-gradient(103deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
        "light-pink-gradient":
          "linear-gradient(103deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      },
    },
  },
  plugins: [],
};
