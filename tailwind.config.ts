/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 640px) { ... }
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
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
        "pink-5-accent": "#EC4899",
        "gold-3-accent": "#f5bc50",
      },
      boxShadow: {
        "card-shadow": "0px 8px 24px rgba(149, 157, 165, 0.25)",
        "orange-shadow": "0 7px 15px 0 rgba(255,83,48,.35)",
        "dark-shadow": "rgba(100, 100, 111, 0.4) 0px 7px 40px 0px",
      },
      backgroundImage: {
        "primary-beige-gradient":
          "linear-gradient(103deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      },
    },
  },
  plugins: [],
};
