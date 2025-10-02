"use client";

import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

import NavigationLink from "./navigation-link";
import RightSidebarAuth from "./right-sidebar-auth";

/**
 * Right navigation sidebar component (RTL)
 * - Displays navigation links with active state highlighting
 * - Shows authentication buttons for signed-out users
 * - Hidden on mobile devices
 */
export default function RightSidebar() {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <NavigationLink
              key={item.route}
              href={item.route}
              icon={item.imgURL}
              label={item.label}
              isActive={isActive}
            />
          );
        })}
      </div>

      <RightSidebarAuth />
    </section>
  );
}
