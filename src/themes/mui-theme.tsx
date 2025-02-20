import { createTheme } from "@mui/material";
import { color, entityColor, themeColor } from "./color";
// go here to get default setup https://mui.com/material-ui/customization/default-theme/
export const MUILightTheme = createTheme({
  palette: {
    primary: {
      main: themeColor.primary,
      dark: themeColor.primaryDark,
      contrastText: color.white,
    },
    secondary: {
      main: themeColor.secondary,
    },
    background: {
      default: entityColor.background.primary,
    },
    text: {
      primary: entityColor.text.primary,
      secondary: entityColor.text.secondary,
    },
    info: {
      main: color.grey[550],
    },
    // action: {
    //   disabledBackground: color.red[100],
    //   disabled: color.white
    // }
  },

  typography: {
    fontFamily: "Noto Serif, serif", // Áp dụng font cho toàn bộ app
  },
  shadows: [
    "none",
    entityColor.boxShadow[100],
    entityColor.boxShadow[200],
    entityColor.boxShadow[300],
    entityColor.boxShadow[400],
    entityColor.boxShadow[500],
    entityColor.boxShadow[600],
    entityColor.boxShadow[700],
    entityColor.boxShadow[800],
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 1000,
      md: 1400,
      lg: 1800,
      xl: 2200,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {},
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${themeColor.primary}`,
            },
          },
        },
      },
    },
  },
});

export const MUIDarkTheme = createTheme({
  palette: {},
});
