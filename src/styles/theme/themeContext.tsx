import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { keysOfThemes, type Theme } from "./themeUtils";
import { ThemeContext } from "./context";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";

export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved && keysOfThemes.includes(saved as Theme) ? saved : "dark"
    ) as Theme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      sh4reCustomAxios
        .post("/users/theme", {
          themeName: theme,
        })
        .catch(() => {
          // 테마 설정 실패는 무시
        });
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, keysOfThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};
