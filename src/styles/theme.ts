import { typography } from "./typography";
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
      light: "#3A4750",
    },
    text: {
      primary: "#222222",
      secondary: "#959595",
      button: "#FFFFFF",
    },
    button: {
      primary: "#0095FF",
      black: "#303841",
    },
    placeholder: "rgba(22, 22, 22, 0.5)",
    border: "rgba(0, 0, 0, 0.02)",
  },
  typography,
};

export const darkTheme: Theme = {
  colors: {
    primary: {
      blue: "#67C0FF",
      red: "#FF5D65",
      orange: "#FF8904",
      green: "#9DD549",
    },
    background: {
      primary: "#2C2C2C",
      secondary: "#282828",
      selected: "#5C5C5C",
      light: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#959595",
      button: "#222222",
    },
    button: {
      primary: "#0095FF",
      black: "#F3F3F3",
    },
    placeholder: "rgba(22, 22, 22, 0.5)",
    border: "rgba(0, 0, 0, 0.02)",
  },
  typography,
};

export default darkTheme;
