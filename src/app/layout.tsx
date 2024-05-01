import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarSection } from "@/components/common/navigationSection/navbar-menuComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarSection></NavbarSection>
        {children}
      </body>
    </html>
  );
}
