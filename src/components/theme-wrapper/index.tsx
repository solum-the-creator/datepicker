import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
