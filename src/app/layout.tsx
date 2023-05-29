"use client";
import { MoralisProvider } from "react-moralis";
import { Navbar } from "./containers/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MoralisProvider initializeOnMount={false}>
          <Navbar />
          {children}
        </MoralisProvider>
      </body>
    </html>
  );
}
