import { JSX, useEffect, useState } from "react";
import {
  CircleCheckBig,
  Cog,
  LayoutDashboard,
  Menu,
  RefreshCcw,
} from "lucide-react";
import { useTheme } from "@/hooks/useDarkTheme";
import { Navbar } from "./Navbar";
import { Modal } from "./Modal";
import { Button } from "./Button";

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Props): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const [route, setRoute] = useState<"dashboard" | "config">("dashboard");
  const [open, setOpen] = useState(false);

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
        <div className="mt-6 flex justify-between items-center">
          <div className="rounded px-1 sm:px-3 py-2 dark:bg-border not-dark:px-0 flex gap-2 sm:gap-4">
            <button
              className={`cursor-pointer px-1.5 sm:px-3 py-1 rounded ${
                route === "dashboard"
                  ? "dark:bg-background not-dark:shadow-lg shadow-blue-200 not-dark:px-2"
                  : ""
              }`}
              onClick={() => setRoute("dashboard")}
            >
              <span className="flex gap-1 items-center">
                <LayoutDashboard size={20} />
                <p>Dashboard</p>
              </span>
            </button>
            <button
              className={`cursor-pointer px-1.5 sm:px-3 py-1 rounded ${
                route === "config"
                  ? "dark:bg-background not-dark:shadow-lg not-dark:px-2 shadow-blue-200"
                  : ""
              }`}
              onClick={() => setRoute("config")}
            >
              <span className="flex gap-2 items-center">
                <Cog size={20} />
                <p>Configuration</p>
              </span>
            </button>
          </div>
          <button
            className="cursor-pointer py-1 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu size={30} />
          </button>
          <div className="hidden md:flex gap-3">
            <Button className="py-1.5">
              <span className="flex gap-2 items-center">
                <RefreshCcw size={20} />
                <p>Refresh All</p>
              </span>
            </Button>
            <Button className="py-1.5 dark:bg-white not-dark:border-0 dark:text-black">
              <span className="flex gap-2 items-center">
                <CircleCheckBig size={20} />
                <p>Check Status</p>
              </span>
            </Button>
          </div>
        </div>
        {/* Render the page within the layout */}
        <main className="flex flex-col gap-6">{children}</main>
        {/* Modal component */}
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-3">
            <Button className="mt-8">
              <span className="flex gap-2 items-center">
                <RefreshCcw size={20} />
                <p>Refresh All</p>
              </span>
            </Button>
            <Button>
              <span className="flex gap-2 items-center">
                <CircleCheckBig size={20} />
                <p>Check Status</p>
              </span>
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
