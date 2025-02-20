export const color = {
  red: {
    30: "#FFEAEA",
    50: "#FFDEDD",
    100: "#FFA09C",
    200: "#FF908C",
    300: "#FF807B",
    400: "#FF706B",
    500: "#218D56",
    600: "#218D56",
  },
  grey: {
    20: "#EDEDED",
    50: "#E1E1E1",
    100: "#D0D5DD",
    150: "#F3F3F3",
    200: "#F8F9FD",
    250: "#BFBFBF",
    300: "#667085",
    350: "#ADAEB5",
    550: "#494E50",
    600: "#798BA3",
  },
  blue: {
    700: "#242D8A",
  },
  green: {
    100: "#00ED5F",
    200: "#34C793",
  },
  yellow: {
    100: "#E58A00",
  },
  white: "#fff",
  black: "#000",
};

export const themeColor = {
  primary: color.red[500],
  primaryDark: color.red[400],
  secondary: color.blue[700],
  thirdary: color.grey[100],
  fourdary: color.grey[350],
  fivedary: color.grey[50],
};

export const entityColor = {
  text: {
    primary: color.black,
    secondary: color.grey[600],
    thirdary: themeColor.primary,
    fourdary: themeColor.secondary,
    disable: "rgba(0, 0, 0, 0.38)",
  },
  link: {
    primary: themeColor.secondary,
    secondary: themeColor.primary,
  },
  background: {
    primary: color.grey[200],
    secondary: color.white,
    thirdary: themeColor.primary,
    hover: color.grey[50],
  },
  boxShadow: {
    100: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
    200: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
    300: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`,
    400: `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
    500: `rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px`,
    600: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    700: `rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px`,
    800: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
  },
  border: {
    primary: `2px solid black`,
    secondary: `1px solid ${color.grey[20]}`,
  },
};
