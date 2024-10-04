import { Bricolage_Grotesque, Plus_Jakarta_Sans, Gloria_Hallelujah } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/navigation/Footer';

export const metadata: Metadata = {
  title: "Zaki ul Hassan",
  description: "UI/UX Design & Full-Stack Development",
};

// Import Google fonts from next/font/google
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400','500','600', '700', '800'],
  variable: '--font-bricolage',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '400','500','600', '700', '800'],
  variable: '--font-jakarta',
});

const gloria = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-gloria',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakartaSans.variable} ${gloria.variable}`}>
      <body className="antialiased bg-[#FFFEF5]">
          <section>
            <main className="flex-grow">{children}</main>
            <Footer />
          </section>
      </body>
    </html>
  );
}
