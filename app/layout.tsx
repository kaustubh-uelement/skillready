import type { Metadata } from "next";
import { Host_Grotesk, Inter } from "next/font/google";
import "./globals.css";

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

import AuthProvider from "@/components/providers/AuthProvider";
import ConditionalChrome from "@/components/layout/ConditionalChrome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-black bg-white">
        <AuthProvider>
          <ConditionalChrome>{children}</ConditionalChrome>
        </AuthProvider>
      </body>
    </html>
  );
}
