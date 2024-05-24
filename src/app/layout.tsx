import type { Metadata } from "next";
import { Saira_Condensed } from "next/font/google";
import "./globals.css";

const sairaCondensed = Saira_Condensed({ subsets: ["latin"], weight: "500" });

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
      <body className={sairaCondensed.className}>{children}</body>
    </html>
  );
}
