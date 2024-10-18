const extend = {
  // https://tailwindcss.com/docs/customizing-spacing
  // 'spacing' values can be used for height padding, margin, etc.
  spacing: {
    navbar: "4rem",
  },
};

const tailwindTheme = {
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
    "light-d": "#f9f4e6",
    "light-dd": "#F6EDDA",
    "light-ddd": "#eadec8",

    "dark-lll": "#d6cec2",
    "dark-ll": "#baac97",
    "dark-l": "#9E8B6D", // dark lighter
    dark: "#624112",
    "dark-d": "#36322E",

    link: "#9C6500",
    // link: "#36322E",
    "link-hov": "#452D00",

    r: "#ff0000",
    g: "#00ff00",
    b: "#0000ff",
  },
  extend,
};

const theme = {
  ...tailwindTheme,
  ...extend,
};

export { theme, tailwindTheme };
