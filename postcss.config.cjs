module.exports = {
  plugins: [
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("postcss-combine-media-query"),
    require("autoprefixer"),
  ],
};
