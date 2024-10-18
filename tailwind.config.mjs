/** @type {import('tailwindcss').Config} */
import { tailwindTheme } from "./src/data/consts.ts";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: tailwindTheme,
  plugins: [],
};
