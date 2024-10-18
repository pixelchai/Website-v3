module.exports = {
  plugins: [
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("postcss-combine-media-query"),
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedProperties: true,
      removeDuplicatedValues: true,
    }),
    require("autoprefixer"),
    require("cssnano")({
      preset: "advanced",
    }),
    require("postcss-reporter"),
  ],
};
