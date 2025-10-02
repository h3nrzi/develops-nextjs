import { PropsWithChildren } from "react";

import LeftSidebar from "@/components/layout/left-sidebar/left-sidebar";
import Navbar from "@/components/layout/navbar/navbar";
import RightSidebar from "@/components/layout/right-sidebar/right-sidebar";

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />

      <div className="flex">
        <RightSidebar />
        <section className="flex max-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <LeftSidebar />
      </div>

      {/* Toaster */}
    </main>
  );
}

export default Layout;
