/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    colors: {
      light: "#FEFBF4",
      dark: "#36322E",

      r: "#ff0000",
      g: "#00ff00",
      b: "#0000ff",
    },
  },
  plugins: [],
};
