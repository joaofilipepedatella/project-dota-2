import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/_header/header";
import { HeroProvider } from "./contexts/HeroContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dota 2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroProvider>
          <Header />
          {children}
        </HeroProvider>
      </body>
    </html>
  );
}
