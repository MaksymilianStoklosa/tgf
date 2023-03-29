import { FC } from "react";
import { GlobalStyles } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { DRAWER_WIDTH, DRAWER_WIDTH_MOBILE, Colors } from "static/constants";

export const GlobalStylesProvider: FC = () => (
  <GlobalStyles
    styles={(theme) => ({
      "*": {
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: "Roboto, sans-serif !important",
      },
      main: {
        position: "relative",
        padding: "20px 15px",
        marginBottom: "50px",
        marginTop: "64px",
        height: "100%",
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        [theme.breakpoints.down("lg")]: {
          width: `calc(100% - ${DRAWER_WIDTH_MOBILE}px)`,
        },
      },
      body: {
        backgroundColor: Colors.background,
      },
    })}
  />
);

export const mainTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    h1: {
      fontSize: "36px",
      fontWeight: "500",
    },
  },
});
