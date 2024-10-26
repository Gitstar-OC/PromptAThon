// "use client";
// import { useState } from "react"
// import { useTheme } from "next-themes";
// import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { X } from "lucide-react";
// import { Search } from "lucide-react";


// export default function Navbar() {
//   const { theme, setTheme } = useTheme();
//   const isDarkMode = theme === "dark";
  
//   // State for toggling the navbar
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   // Handle opening and closing the search bar
//   const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

//   return (
//     <>
//       {!isSearchOpen ? (
//         // Default Navbar
//         <nav className="fixed max-w-xl w-full rounded-full mx-auto top-4 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 text-black dark:text-white p-2 flex items-center justify-between shadow-[0_4px_6px_rgba(0,255,0,0.5)] dark:shadow-[0_1px_2px_rgba(0,255,0,0.3)] transition-all duration-500 ease-in-out">
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger>
//                 <button
//                   onClick={handleSearchToggle}
//                   className="p-1 ml-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
//                 >
//                   <Search className="w-6 h-6 dark:text-white text-black " />
//                 </button>
//               </TooltipTrigger>
//               <TooltipContent>Search Prompts</TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//           <h1 className="text-xl font-mono ml-4">Prompt A Thon</h1>
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger>
//                 <button
//                   onClick={() => setTheme(isDarkMode ? "light" : "dark")}
//                   className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
//                 >
//                   {isDarkMode ? (
//                     <SunIcon className="w-6 h-6 text-white" />
//                   ) : (
//                     <MoonIcon className="w-6 h-6 text-gray-800" />
//                   )}
//                 </button>
//               </TooltipTrigger>
//               <TooltipContent>Change Theme</TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </nav>
//       ) : (
//         // Expanded Navbar with Search Input
//         <nav className="fixed max-w-xl w-full  bg-white/80 dark:bg-black/80 rounded-full mx-auto top-4 left-0 right-0 z-50 p-2 flex items-center justify-between transition-all duration-1000 ease-in-out">
//           <div className="flex w-full items-center justify-between">
//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger>
//                   <button
//                     onClick={handleSearchToggle}
//                     className="p-1 ml-2 rounded-lg transition-all duration-1000 ease-in-out"
//                   >
//                     <Search className="w-6 h-6 text-black dark:text-white" />
//                   </button>
//                 </TooltipTrigger>
//                 <TooltipContent>Search Prompts</TooltipContent>
//               </Tooltip>
//             </TooltipProvider>

//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger>
//                   <button
//                     onClick={handleSearchToggle}
//                     className="p-1 mr-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
//                   >
//                     <X className="w-6 h-6 text-black dark:text-white" />
//                   </button>
//                 </TooltipTrigger>
//                 <TooltipContent>Close</TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// }


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
    <nav className="fixed max-w-xl w-full rounded-full mx-auto top-4 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 text-black dark:text-white p-2 flex items-center justify-between shadow-[0_4px_6px_rgba(0,255,0,0.5)] dark:shadow-[0_1px_2px_rgba(0,255,0,0.3)]">
      <h1 className="text-xl ml-4  font-mono">Prompt A Thon</h1>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => setTheme(isDarkMode ? "light" : "dark")}
              className="p-1 mr-2  rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800"
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

