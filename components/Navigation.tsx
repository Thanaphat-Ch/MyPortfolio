"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { 
  Home, 
  User, 
  Briefcase, 
  FolderGit2, 
  Mail, 
  Sun, 
  Moon, 
  Github 
} from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

interface FloatingDockProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

const emptySubscribe = () => () => {};

export default function FloatingDock({ 
  activeSection = "home", 
  onNavigate 
}: FloatingDockProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const handleScroll = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav 
      aria-label="Floating Navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="flex items-center gap-1.5 p-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-xl shadow-black/5 dark:shadow-black/30 transition-all">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                isActive
                  ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
            >
              <Icon size={18} className="transition-transform group-hover:scale-110" />

              {/* Active Dot Indicator */}
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
              )}

              {/* Hover Tooltip */}
              <span className="absolute -top-9 px-2 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs rounded-md shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Separator */}
        <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-700/80 mx-1" />

        {/* GitHub Link */}
        <a
          href="https://github.com/thanaphat-ch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
        >
          <Github size={18} className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:rotate-6" />
          <span className="absolute -top-9 px-2 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs rounded-md shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap">
            GitHub
          </span>
        </a>

        {/* Theme Toggle */}
        {/* <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle Theme"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {mounted ? (
            resolvedTheme === "dark" ? (
              <Sun size={18} className="transition-transform group-hover:rotate-45" />
            ) : (
              <Moon size={18} className="transition-transform group-hover:-rotate-12" />
            )
          ) : (
            <div className="w-4.5 h-4.5" />
          )}

          <span className="absolute -top-9 px-2 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs rounded-md shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap">
            {mounted && resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button> */}
        <AnimatedThemeToggler
          theme={mounted ? (resolvedTheme as "light" | "dark") : "light"}
          onThemeChange={(newTheme) => setTheme(newTheme)}
          className="group relative flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
        >
          {mounted ? (
            resolvedTheme === "dark" ? (
              <Sun size={18} className="transition-transform group-hover:rotate-45" />
            ) : (
              <Moon size={18} className="transition-transform group-hover:-rotate-12" />
            )
          ) : (
            <div className="w-4.5 h-4.5" />
          )}

          <span className="absolute -top-9 px-2 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs rounded-md shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap">
            {mounted && resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </AnimatedThemeToggler>
      </div>
    </nav>
  );
}