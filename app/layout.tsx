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

const title = "Singapore Guitar Teacher | Learn Guitar in Singapore";
const description =
  "Private guitar lessons in Singapore with Jin — beginner-friendly, all genres, acoustic & electric, home visits available.";

export const metadata: Metadata = {
  metadataBase: new URL("https://singaporeguitarteacher.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "singaporeguitarteacher",
    images: ["/images/hero-portrait.jpg"],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-portrait.jpg"],
  },
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
