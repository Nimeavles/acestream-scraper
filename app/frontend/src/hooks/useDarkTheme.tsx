import { useState } from "react";

type ThemeOptions = "light" | "dark";

const systemCurrentColor = () => {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  return colorScheme.matches ? "dark" : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeOptions>(systemCurrentColor());

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};
