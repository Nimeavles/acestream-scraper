import { JSX, useEffect } from "react";
import { Navbar } from "./Navbar";
import { useTheme } from "@/hooks/useDarkTheme";

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Props): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <div className="w-screen font-inter h-screen flex justify-center bg-background-lg dark:bg-background text-black dark:text-white">
      <div className="container px-8 md:px-4">
        {/* Pass theme and toggleTheme as props */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {/* Render the page within the layout */}
        {children}
      </div>
    </div>
  );
};
