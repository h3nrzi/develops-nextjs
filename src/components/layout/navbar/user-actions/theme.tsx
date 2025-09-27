"use client";

import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import { useTheme } from "@/context/theme-provider";

/**
 * Theme icon mapping for different modes
 */
const themeIcons = {
  light: "/assets/icons/sun.svg",
  dark: "/assets/icons/moon.svg",
  system: "/assets/icons/computer.svg",
} as const;

/**
 * Theme switcher component with dropdown menu
 * Allows switching between light, dark, and system themes
 * Persists theme preference in localStorage
 */
export default function Theme() {
  const { mode, setMode } = useTheme();

  const handleThemeChange = (newMode: string) => {
    setMode(newMode);
    if (newMode !== "system") {
      localStorage.theme = newMode;
    } else {
      localStorage.removeItem("theme");
    }
  };

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        {/* Theme toggle trigger with current theme icon */}
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Image
            className="active-theme"
            src={themeIcons[mode as keyof typeof themeIcons]}
            alt={mode}
            width={20}
            height={20}
          />
        </MenubarTrigger>

        {/* Theme options dropdown */}
        <MenubarContent className="dark:border-dark-900 absolute mt-3 min-w-[120px] rounded border py-2 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              className="flex cursor-pointer items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => handleThemeChange(theme.value)}
            >
              <Image
                className={mode === theme.value ? "active-theme" : " "}
                src={theme.icon}
                alt={theme.value}
                width={16}
                height={16}
              />
              <p
                className={`body-semibold ${
                  mode === theme.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
