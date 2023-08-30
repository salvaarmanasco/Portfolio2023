/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        PBlue: "#4059ad",
        PBlueGray: "#6b9ac4",
        PGreen: "#97d8c4",
        PGreen2: "#7CA8A0",
        PWhite: "#eff2f1",
        POrange: "#f4b942",
      },
    },
  },
  plugins: [require("daisyui")],
};
