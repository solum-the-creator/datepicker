import { Theme } from "@styles/theme";

export const mergeThemes = (defaultTheme: Theme, customTheme?: Partial<Theme>): Theme => {
  if (!customTheme) {
    return defaultTheme;
  }

  return {
    colors: {
      ...defaultTheme.colors,
      ...customTheme.colors,
    },
    bordersRadius: {
      ...defaultTheme.bordersRadius,
      ...customTheme.bordersRadius,
    },
  };
};
