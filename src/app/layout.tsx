import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bingqing Li",
  description:
    "Bingqing Li is a Ph.D. candidate in Marketing at Virginia Tech. She researches how emerging technologies influence consumer behavior and marketing decisions, using machine learning, econometrics, and experiments to understand the impact of digital platforms on consumer behavior and marketing decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.variable} suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
