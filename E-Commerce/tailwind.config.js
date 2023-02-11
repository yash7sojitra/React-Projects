/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "1100",
      black: "900",
    },
    extend: {
      colors: {
        "theme-orange": "#c18053",
        "hover-orange": "#AC7045",
      },
    },
  },
  plugins: [],
};
