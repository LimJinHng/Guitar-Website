import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Learn Guitar in Singapore | singaporeguitarteacher",
  description:
    "Private guitar lessons in Singapore with Jin — beginner-friendly, all genres, acoustic & electric, home visits available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
