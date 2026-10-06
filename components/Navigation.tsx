"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  Github,
} from "lucide-react";
import { Dock, type DockItem } from "./ui/dock";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

interface FloatingDockProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

const emptySubscribe = () => () => { };

export default function FloatingDock({
  activeSection = "home",
  onNavigate,
}: FloatingDockProps) {

  const { resolvedTheme, setTheme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);

    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const navList = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const dockItems: DockItem[] = [
    ...navList.map((item, index) => {
      const Icon = item.icon;
      const isActive = activeSection === item.id;

      return {
        label: item.label,
        onClick: () => onNavigate?.(item.id),
        icon: (<Icon className={`transition-transform duration-200 group-hover:scale-110 ${isActive
                 ? "text-indigo-600 dark:text-indigo-400"
                 : "text-neutral-500 dark:text-neutral-400"
              }`}
          />

        ),
        separator: index === navList.length - 1,
      };
    }),
    {
      label: "GitHub",
      href: "https://github.com/thanaphat-ch",
      icon: (<Github className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:rotate-12" />),
    },
    {
      label: mounted && resolvedTheme === "dark" ? "Light Mode" : "Dark Mode",
      icon: (
        <AnimatedThemeToggler
          theme={mounted ? (resolvedTheme as "light" | "dark") : "light"}
          onThemeChange={(newTheme) => setTheme(newTheme)}
          className="flex items-center justify-center w-full h-full cursor-pointer"
        >
          {mounted ? (
            resolvedTheme === "dark" ? (
              <Sun className="transition-transform duration-200 group-hover:rotate-45" />
            ) : (
              <Moon className="transition-transform duration-200 group-hover:-rotate-12" />
            )
          ) : (
            <div className="w-5 h-5" />
          )}
        </AnimatedThemeToggler>
      ),
    },
  ];

  return (
    <nav
      aria-label="Floating Navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <Dock
        items={dockItems}
        distance={100}
        magnification={isDesktop ? 1.5 : 1}
        // distance={isDesktop ? 100 : 0}
        iconSize={isDesktop ? 40 : 36}
        gap={isDesktop ? 4 : 2}
        borderRadius={9999}
        className="rounded-full shadow-xl shadow-black/5 dark:shadow-black/30 border-neutral-200/80 dark:border-neutral-800"
      />
    </nav>
  );
}