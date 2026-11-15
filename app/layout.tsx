import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Luma | Practical courses for curious people",
  description:
    "Learn design, technology and business skills through concise courses taught by practitioners.",
  openGraph: {
    title: "Luma | Practical courses for curious people",
    description:
      "Learn design, technology and business skills through concise courses taught by practitioners.",
    type: "website",
  },
};

type RootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={geist.variable} lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
