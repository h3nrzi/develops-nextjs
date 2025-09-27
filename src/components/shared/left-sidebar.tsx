"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";

import { sidebarLinks } from "@/constants";

import { Button } from "../ui/button";

const AuthButton = ({
  href,
  icon,
  alt,
  text,
  className,
  textClassName,
}: {
  href: string;
  icon: string;
  alt: string;
  text: string;
  className: string;
  textClassName?: string;
}) => (
  <Link href={href}>
    <Button
      className={`small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ${className}`}
    >
      <Image
        src={icon}
        alt={alt}
        width={20}
        height={20}
        className="invert-colors lg:hidden"
      />
      <span className={`max-lg:hidden ${textClassName || ""}`}>{text}</span>
    </Button>
  </Link>
);

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`flex items-center justify-start gap-4 bg-transparent p-4 ${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={isActive ? "" : "invert-colors"}
              />
              <p
                className={`max-lg:hidden ${isActive ? "base-bold" : "base-medium"}`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-3">
          <AuthButton
            href="/sign-in"
            icon="/assets/icons/account.svg"
            alt="login"
            text="Log In"
            className="btn-secondary"
            textClassName="primary-text-gradient"
          />
          <AuthButton
            href="/sign-up"
            icon="/assets/icons/sign-up.svg"
            alt="sign up"
            text="Sign Up"
            className="light-border-2 btn-tertiary text-dark400_light900"
          />
        </div>
      </SignedOut>
    </section>
  );
}
