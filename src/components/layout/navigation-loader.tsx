"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart);

    const originalPush = window.history.pushState;
    const originalReplace = window.history.replaceState;

    window.history.pushState = function (...args) {
      handleStart();
      return originalPush.apply(this, args);
    };

    window.history.replaceState = function (...args) {
      handleStart();
      return originalReplace.apply(this, args);
    };

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.history.pushState = originalPush;
      window.history.replaceState = originalReplace;
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-light-400 border-t-primary-500 dark:border-dark-400 dark:border-t-primary-500" />
        <p className="text-light-400 dark:text-dark-400">در حال بارگذاری...</p>
      </div>
    </div>
  );
}
