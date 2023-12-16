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
      },
      backgroundImage: {
        "primary-beige-gradient":
          "linear-gradient(103deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      },
    },
  },
  plugins: [],
};
