import { SignedOut } from "@clerk/nextjs";

import AuthButton from "../../auth/auth-button";

/**
 * Authentication section for sidebar
 * Shows sign-in and sign-up buttons when user is signed out
 */
export default function SidebarAuth() {
  return (
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
  );
}
