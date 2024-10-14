import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/shared/styles/global";
import { theme } from "@/shared/styles/theme";

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
