import { JSX, useEffect } from "react";
import { Box, Moon, Sun } from "lucide-react";
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
        <div className="py-5 flex justify-between items-center border-b dark:border-gray-300 border-gray-900">
          <span className="flex gap-2 items-center dark:text-white">
            <Box className="dark:bg-white dark:fill-black p-0.5 md:p-1 rounded-lg box-content" />
            <h1 className="font-semibold text-lg md:text-xl">
              Acestream Scraper
            </h1>
          </span>
          <button
            className="hover:cursor-pointer"
            onClick={() => toggleTheme()}
          >
            {theme === "dark" ? (
              <Sun color="white" className="hover:fill-yellow-300" size={30} />
            ) : (
              <Moon color="black" className="hover:fill-yellow-600" size={30} />
            )}
          </button>
        </div>
        {/* Navbar */}
        {children}
        {/* Footer */}
      </div>
    </div>
  );
};
