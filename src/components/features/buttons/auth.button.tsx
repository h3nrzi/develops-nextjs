import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  href: string;
  icon: string;
  alt: string;
  text: string;
  className: string;
  textClassName?: string;
}

/**
 * Reusable authentication button component for sign-in/sign-up actions
 * Shows icon on mobile, text on desktop
 */
export default function AuthButton({
  href,
  icon,
  alt,
  text,
  className,
  textClassName,
}: AuthButtonProps) {
  return (
    <Link href={href}>
      <Button
        className={`small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ${className}`}
      >
        <span className={`max-lg:hidden ${textClassName || ""}`}>{text}</span>
        <Image
          src={icon}
          alt={alt}
          width={20}
          height={20}
          className="invert-colors lg:hidden"
        />
      </Button>
    </Link>
  );
}
