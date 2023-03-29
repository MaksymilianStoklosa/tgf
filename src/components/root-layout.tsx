import { Box, ThemeProvider } from "@mui/material";
import { Header } from "components/header";
import { mainTheme } from "config/libs/styles-provider";
import { FC } from "react";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box component="main">{children}</Box>
      <Footer />
    </Box>
  </ThemeProvider>
);
