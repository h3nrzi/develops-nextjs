import Link from "next/link";

import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileAuthButtonProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

/**
 * Reusable auth button component for mobile navigation
 * Automatically closes the sheet when clicked
 */
export default function MobileAuthButton({
  href,
  children,
  className,
}: MobileAuthButtonProps) {
  return (
    <SheetClose asChild>
      <Link href={href}>
        <Button
          className={`small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ${className}`}
        >
          {children}
        </Button>
      </Link>
    </SheetClose>
  );
}
