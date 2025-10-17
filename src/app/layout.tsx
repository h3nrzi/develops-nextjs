import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";

const vazirmatn = localFont({
  src: [
    { path: "../../public/assets/fonts/Vazirmatn-Thin.ttf", weight: "100" },
    {
      path: "../../public/assets/fonts/Vazirmatn-ExtraLight.ttf",
      weight: "200",
    },
    { path: "../../public/assets/fonts/Vazirmatn-Light.ttf", weight: "300" },
    { path: "../../public/assets/fonts/Vazirmatn-Regular.ttf", weight: "400" },
    { path: "../../public/assets/fonts/Vazirmatn-Medium.ttf", weight: "500" },
    { path: "../../public/assets/fonts/Vazirmatn-SemiBold.ttf", weight: "600" },
    { path: "../../public/assets/fonts/Vazirmatn-Bold.ttf", weight: "700" },
    {
      path: "../../public/assets/fonts/Vazirmatn-ExtraBold.ttf",
      weight: "800",
    },
    { path: "../../public/assets/fonts/Vazirmatn-Black.ttf", weight: "900" },
  ],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "دِولاپس - پلتفرم پرسش و پاسخ برنامه نویسی",
  description:
    "پلتفرمی محور انجمن برای پرسش و پاسخ سوالات برنامه نویسی. کمک بگیرید، دانش به اشتراک بگذارید و با برنامه نویسان سراسر جهان همکاری کنید.",
  icons: "/assets/images/site-logo.svg",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-vazirmatn`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster
            richColors
            position="top-right"
            dir="rtl"
            className="font-vazirmatn"
            style={{ fontFamily: "var(--font-vazirmatn)" }}
          />
        </ClerkProvider>
      </body>
    </html>
  );
}
