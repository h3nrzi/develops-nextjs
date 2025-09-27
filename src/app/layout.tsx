import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "دو فلو - پلتفرم پرسش و پاسخ برنامهنویسی",
  description:
    "پلتفرمی محور انجمن برای پرسش و پاسخ سوالات برنامهنویسی. کمک بگیرید، دانش به اشتراک بگذارید و با برنامهنویسان سراسر جهان همکاری کنید.",
  icons: "/assets/images/site-logo.svg",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-vazirmatn rtl-content`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
