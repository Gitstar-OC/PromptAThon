"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <nav className="fixed max-w-xl w-full rounded-full mx-auto top-4 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 text-black dark:text-white p-2 flex items-center justify-between shadow-md">
      <h1 className="text-xl font-mono">Prompt A Thon</h1>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="p-1 mr-1  rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
            >
              {isDarkMode ? (
                <SunIcon className="w-6 h-6 text-white" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent>Change Theme</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}
