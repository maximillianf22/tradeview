/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#181F29"
      }
    },
  },
  plugins: [],
};
