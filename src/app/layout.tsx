import type { Metadata } from "next";
import { Saira_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const sairaCondensed = Saira_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "World Capital Tower",
  description: "World Capital Tower",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sairaCondensed.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
