/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1A0F0A", // deep background / footer
        roast: "#2B1D14", // main hero background
        mocha: "#3A261A", // cards / gradients

        caramel: "#C89B6A", // primary CTA, highlights
        darkCaramel: "#B8895B",
        cream: "#F5EFE6", // main text on dark bg
        latte: "#D6C8B8", // secondary text

        olive: "#6B705C", // eco / ethical badges
        rust: "#A45A2A", // hover accents
      },
      // tailwind.config.js
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
