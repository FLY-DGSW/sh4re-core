import { createContext } from "react";
import type { Theme } from "./themeUtils";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  keysOfThemes: Theme[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);