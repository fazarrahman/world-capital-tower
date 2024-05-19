/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "dark-green": "#344249",
        darkgoldenrod: "#d2912f",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "section-title": "'Saira Condensed'",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      xl: "20px",
      base: "16px",
      "109xl": "128px",
      "13xl": "32px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
