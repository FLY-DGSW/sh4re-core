import { typography } from "../typography";
import type { Theme } from "@/types/theme";

export const darkTheme: Theme = {
  colors: {
    primary: {
      blue: "#0095FF",
      red: "#FF5D65",
      orange: "#FF8904",
      green: "#9DD549",
    },
    background: {
      primary: "#2C2C2C",
      secondary: "#282828",
      selected: "#5C5C5C",
      light: "#323232",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#959595",
      button: "#FFFFFF",
    },
    button: {
      primary: "#2C2C2C",
      black: "#FFFFFF",
      white: "#2C2C2C",
    },
    placeholder: "rgba(22, 22, 22, 0.5)",
    border: "rgba(224, 224, 224, 0.5)",
  },
  typography,
};

export default darkTheme;
