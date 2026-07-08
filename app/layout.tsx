import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Positivus",
    template: "%s | Positivus",
  },
  description:
    "Navigating the digital landscape for success. Digital Marketing Agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} min-h-screen flex flex-col`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
