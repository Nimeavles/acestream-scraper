import { useState } from "react";

type ThemeOptions = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeOptions>("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};
