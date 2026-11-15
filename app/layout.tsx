import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export const metadata: Metadata = {
  title: "JK AGENCY - Creative Digital Agency",
  description:
    "JK AGENCY is a creative digital agency that builds and designs digital products by combining technology with creativity. We build websites, apps, and digital experiences that help businesses grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
