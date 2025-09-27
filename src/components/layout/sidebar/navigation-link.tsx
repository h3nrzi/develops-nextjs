import Image from "next/image";
import Link from "next/link";

interface NavigationLinkProps {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
}

/**
 * Individual navigation link component with active state styling
 */
export default function NavigationLink({
  href,
  icon,
  label,
  isActive,
}: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between gap-4 bg-transparent p-4 ${
        isActive
          ? "primary-gradient rounded-lg text-light-900"
          : "text-dark300_light900"
      }`}
    >
      <p className={`max-lg:hidden text-right ${isActive ? "base-bold" : "base-medium"}`}>
        {label}
      </p>
      <Image
        src={icon}
        alt={label}
        width={20}
        height={20}
        className={isActive ? "" : "invert-colors"}
      />
    </Link>
  );
}
