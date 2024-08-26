/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cdark: "#00404D",
        cpri: "#2C6975",
        csec: "#68B2A0",
        cter: "#CDE0C9",
        clight: "#E0ECDE",
        wlight: "#FFDBAC",
        wter: "#F1C27D",
        wsec: "#E0AC69",
        wpri: "#C68642",
        wdark: "#8D5524",
      },
      fontFamily: {
        grotesk: "Space Grotesk",
        jetbrains: "JetBrains Mono",
        poppins: "Poppins",
        mono: "Space Mono",
      },
    },
  },

  "plugins": ["prettier-plugin-tailwindcss"],
};
