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

function Theme() {
  const { mode, setMode } = useTheme();

  function handleOnThemeChange(mode: string) {
    setMode(mode);
    if (mode !== "system") localStorage.theme = mode;
    else localStorage.removeItem("theme");
  }

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              className="active-them"
              src="/assets/icons/sun.svg"
              alt="sun"
              width={20}
              height={20}
            />
          ) : (
            <Image
              className="active-theme"
              src="/assets/icons/moon.svg"
              alt="sun"
              width={20}
              height={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="dark:border-dark-900 absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => handleOnThemeChange(item.value)}
            >
              <Image
                className={`${mode === item.value && "active-theme"}`}
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
              />
              <p
                className={`body-semibold text-light-500 ${mode === item.value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Theme;
