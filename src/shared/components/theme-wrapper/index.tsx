import { useMemo } from "react";
import { mergeThemes } from "@utils/themeMerge";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/shared/styles/global";
import { Theme, theme as defaultTheme } from "@/shared/styles/theme";

type ThemeWrapperProps = {
  theme?: Partial<Theme>;
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ theme, children }) => {
  const mergedTheme = useMemo(() => mergeThemes(defaultTheme, theme), [theme]);

  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
