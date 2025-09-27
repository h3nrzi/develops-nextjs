import { SignedIn, UserButton } from "@clerk/nextjs";

import Theme from "./theme";

/**
 * User actions section containing theme toggle and user profile
 * Only shows user button when signed in
 */
export default function UserActions() {
  return (
    <div className="flex-between gap-5">
      <Theme />
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: { avatarBox: "h-10 w-10" },
            variables: { colorPrimary: "#ff7000" },
          }}
        />
      </SignedIn>
    </div>
  );
}
