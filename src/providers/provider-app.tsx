import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { MUIDarkTheme, MUILightTheme } from "@/themes/mui-theme";
import { CssBaseline } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Box from "@mui/material/Box/Box";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [light, setLight] = React.useState(true);

  const SuspenseFallback = () => {
    return (
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="primary" variant="determinate" size="lg" />
      </Box>
    );
  };

  return (
    <React.Suspense fallback={<SuspenseFallback />}>
      <ThemeProvider theme={light ? MUILightTheme : MUIDarkTheme}>
        <CssBaseline>
          <BrowserRouter>{children}</BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </React.Suspense>
  );
};
