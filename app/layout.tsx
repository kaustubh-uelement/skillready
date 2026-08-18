import type { Metadata } from "next";
import { Host_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-host-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SkillReady.ai — The Bridge Between Learning and Employment",
  description:
    "SkillReady connects students, colleges, and companies through a structured ecosystem that transforms career aspirations into real opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-black bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
