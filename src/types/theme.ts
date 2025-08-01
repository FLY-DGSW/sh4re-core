import type { typography } from "@/styles/typography";

export interface ThemeColors {
  primary: {
    blue: string;
    red: string;
    orange: string;
    green: string;
  };
  background: {
    primary: string;
    secondary: string;
    selected: string;
    light: string;
  };
  text: {
    primary: string;
    secondary: string;
    button: string;
  };
  button: {
    primary: string;
    black: string;
  };
  placeholder: string;
  border: string;
}

export interface Theme {
  colors: ThemeColors;
  typography: typeof typography;
}
