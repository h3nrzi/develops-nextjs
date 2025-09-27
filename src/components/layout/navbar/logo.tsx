import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo component with consistent styling
 * Hidden text on mobile devices
 */
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src="/assets/images/site-logo.svg"
        width={23}
        height={23}
        alt="DevFlow"
      />
      <p className="h2-bold font-vazirmatn text-dark-100 dark:text-light-900 max-sm:hidden">
        دو <span className="text-primary-500">فلو</span>
      </p>
    </Link>
  );
}
