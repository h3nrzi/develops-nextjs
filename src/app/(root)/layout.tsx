import { PropsWithChildren } from "react";

import { LeftSidebar, Navbar } from "@/components/layout";

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex max-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        RightSidebar
      </div>
      {/* Toaster */}
    </main>
  );
}

export default Layout;
