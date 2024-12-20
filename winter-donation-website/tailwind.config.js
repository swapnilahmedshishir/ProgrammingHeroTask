/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#00527F",
        SkyBlue: "#00CDE9",
        WBG: "#ECF2F2",
        White: "#FFFFFF",
        g1: "#011C52",
        Youth1: "#9418FF",
        Youth2: "#FF0004",
        Child1: "#30C602",
        Child2: "#00F7FF",
        Ent1: "#003CFF",
        Ent2: "#00B3FF",
        Health1: "#205890",
        Health2: "#20C1BF",
        GreyLight: "#BBBBBB",
        Paragraph: "#505050",
        DarkBlue: "#011C52",
      },

      backgroundImage: {
        hero: "url('src/assets/Firefly_children.png')",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    daisyui,
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
