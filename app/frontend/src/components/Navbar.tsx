import { JSX } from "react";
import { Box, Moon, Sun } from "lucide-react";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps): JSX.Element => {
  return (
    <div className="py-5 flex justify-between items-center border-b dark:border-gray-300 border-gray-900">
      <span className="flex gap-2 items-center dark:text-white">
        <Box className="dark:bg-white dark:fill-black p-0.5 md:p-1 rounded-lg box-content" />
        <h1 className="font-semibold text-lg md:text-xl">Acestream Scraper</h1>
      </span>
      <button className="hover:cursor-pointer" onClick={() => toggleTheme()}>
        {theme === "dark" ? (
          <Sun color="white" className="hover:fill-yellow-300" size={30} />
        ) : (
          <Moon color="black" className="hover:fill-yellow-600" size={30} />
        )}
      </button>
    </div>
  );
};
