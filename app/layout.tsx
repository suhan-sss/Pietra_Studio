import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/effects/Cursor";
import SmoothScroll from "@/components/effects/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pietra — Interior Architecture & Design",
    template: "%s",
  },
  description:
    "Pietra is a studio of twelve in Lisbon and Milan, working on a small number of rooms at a time. Interior architecture, surfaces, joinery, lighting.",
  openGraph: {
    title: "Pietra — Interior Architecture & Design",
    description: "Studio of twelve in Lisbon and Milan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body
        className="antialiased bg-cream text-charcoal relative"
        suppressHydrationWarning
      >
        <SmoothScroll />
        <Cursor />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
