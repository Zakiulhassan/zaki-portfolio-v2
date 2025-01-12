import type { Metadata } from "next";
import "./globals.css";
import { Gloria_Hallelujah } from "next/font/google";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";

// Set up Gloria Hallelujah
const gloriaHallelujah = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: '--font-gloria', // Add this for CSS variable
});


export const metadata: Metadata = {
  title: "Zaki ul Hassan | UX Designer & Development",
  description: "UI/UX Design & Full-Stack Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-aeonik ${gloriaHallelujah.variable}`}>
      <body className="antialiased bg-background font-aeonik">
        <Header />
        {/* <NoiseOverlay/> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}