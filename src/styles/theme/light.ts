import { typography } from "../typography";
import type { Theme } from "@/types/theme";

export const lightTheme: Theme = {
  colors: {
    primary: {
      blue: "#0095FF",
      red: "#FB2C36",
      orange: "#FF8904",
      green: "#7CCF00",
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F8FAFD",
      selected: "#F8FAFD",
      light: "transparent",
    },
    text: {
      primary: "#222222",
      secondary: "#959595",
      button: "#FFFFFF",
    },
    button: {
      primary: "#0095FF",
      black: "#303841",
      white: "#2C2C2C",
    },
    placeholder: "rgba(22, 22, 22, 0.5)",
    border: "rgba(224, 224, 224, 0.5)",
  },
  typography,
};

export default lightTheme;
