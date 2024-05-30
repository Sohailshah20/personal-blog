import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Fira_Code } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Sohail Ali",
  description:
    "Step into my digital world at Sohail's personal website, where I share my passions, experiences, and the things that make life uniquely mine.",
};

const satoshiFont = localFont({
  src: './Satoshi-Regular.woff',
  display: 'swap',
  variable: "--font-regular"
})

const font = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshiFont.variable} dark`}
    >
      <body
        className="font-regular max-w-[900px] text-lg mx-auto sm:px-0 px-6 tracking-wide"
      >
        <Navbar />
        <main className="mb-10">{children}</main>
      </body>
    </html>
  );
}
