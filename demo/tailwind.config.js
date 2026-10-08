import PrimeUI from "tailwindcss-primeui";

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        brand_standard: "#00CAFC",
      },
    },
  },
  plugins: [PrimeUI],
  darkMode: ["selector", '[class~="dark"]'],
};
