"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";

import MobileAuthButton from "../../auth/mobile-auth-button";

/**
 * Mobile navigation component using sheet/drawer pattern
 * - Hamburger menu trigger visible only on mobile
 * - Contains logo, navigation links, and auth buttons
 * - Auto-closes when navigation occurs
 */
export default function MobileNav() {
  return (
    <Sheet>
      {/* Hamburger menu trigger */}
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="background-light900_dark200 border-none"
      >
        {/* Logo/Brand */}
        <SheetTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/images/site-logo.svg"
              width={23}
              height={23}
              alt="DevFlow"
            />
            <p className="h2-bold text-dark100_light900 font-vazirmatn text-right">
              دو <span className="text-primary-500">فلو</span>
            </p>
          </Link>
        </SheetTitle>

        <div>
          {/* Navigation links */}
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          {/* Authentication buttons - only shown when signed out */}
          <SignedOut>
            <div className="flex flex-col gap-3">
              <MobileAuthButton href="/sign-in" className="btn-secondary">
                <span className="primary-text-gradient">ورود</span>
              </MobileAuthButton>
              <MobileAuthButton
                href="/sign-up"
                className="light-border-2 btn-tertiary text-dark400_light900"
              >
                ثبت نام
              </MobileAuthButton>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/**
 * Navigation content component
 * Renders sidebar links with active state highlighting
 */
function NavContent() {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        // Check if current route matches (exact or nested path)
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`flex items-center justify-between gap-4 bg-transparent p-4 ${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }`}
            >
              <p className={`text-right ${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={isActive ? "" : "invert-colors"}
              />
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
}
