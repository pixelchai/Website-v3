const constants = {
  navbarHeight: "1rem",
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
    dark: "#624112",
    xdark: "#36322E",

    r: "#ff0000",
    g: "#00ff00",
    b: "#0000ff",
  },
  extend: {
    height: {
      navbar: constants.navbarHeight,
    },
  },
};

const theme = {
  ...tailwindTheme,
  ...constants,
};

export { theme, tailwindTheme };
