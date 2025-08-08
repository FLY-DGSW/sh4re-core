import { lightTheme, darkTheme } from "./theme";

export const themes = { dark: darkTheme, light: lightTheme };
export type Theme = keyof typeof themes;
export const keysOfThemes = Object.keys(themes) as Theme[];