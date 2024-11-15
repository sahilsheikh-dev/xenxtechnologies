import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarSection } from "@/app/components/common/navigationSection/navbar-menuComponent";
import FooterSection from "@/app/components/common/footerSection/footerSection";
import CursorComponent from "@/app/components/common/cursorComponent/cursorComponent";
import ScrollToTop from "@/app/components/scrollToTopComponent/ScrollToTopComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xenx Technologies",
  description: "Software Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorComponent />
        <ScrollToTop />
        <NavbarSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
