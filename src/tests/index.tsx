import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/themes";

export const ThemeProviderStyles = (children: React.ReactNode) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
