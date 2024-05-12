import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarSection } from "@/components/common/navigationSection/navbar-menuComponent";
import FooterSection from "@/components/common/footerSection/footerSection";
import CursorComponent from "@/components/common/cursorComponent/cursorComponent";

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
        <NavbarSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
