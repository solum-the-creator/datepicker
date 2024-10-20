export type Theme = {
  colors: {
    primary?: string;
    secondary?: string;
    background?: string;
    disabledText?: string;
    activeText?: string;
    active?: string;
    activeBright?: string;
    range?: string;
    border?: string;
    hoverBackground?: string;
    hoverButton?: string;
    muted?: string;
    red?: string;
  };
  bordersRadius: {
    rangeStart?: string;
    rangeEnd?: string;
    range?: string;
  };
};

export const theme: Theme = {
  colors: {
    primary: "#000000",
    secondary: "#333333",
    background: "#ffffff",
    disabledText: "#aaaaaa",
    activeText: "#ffffff",
    active: "#2f80ed",
    activeBright: "#82B3F4",
    range: "#eaf2fd",
    border: "#e1e1e1",
    hoverBackground: "#2f80ed1a",
    hoverButton: "#65a7ff",
    muted: "#f1f1f1",
    red: "#ff1818",
  },
  bordersRadius: {
    rangeStart: "0.5rem 0 0 0.5rem",
    rangeEnd: "0 0.5rem 0.5rem 0",
    range: "0",
  },
};
