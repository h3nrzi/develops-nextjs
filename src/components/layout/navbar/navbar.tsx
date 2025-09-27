import GlobalSearch from "../../features/search/global-search";

import Logo from "./logo";
import MobileNav from "./mobile-nav";
import UserActions from "./user-actions";

/**
 * Main navigation bar component
 * - Fixed position with responsive layout
 * - Contains logo, search, user actions, and mobile navigation
 * - Adapts to light/dark themes
 */
export default function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      {/* Mobile navigation trigger - moved to right for RTL */}
      <MobileNav />

      {/* User actions - theme toggle and profile */}
      <UserActions />

      {/* Global search - hidden on mobile */}
      <GlobalSearch />

      {/* Brand/Logo - moved to left for RTL */}
      <Logo />
    </nav>
  );
}
