import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chroma Constrictors - Premium Snakes & Expert Care",
  description: "Discover beautiful, healthy snakes with exceptional care at Chroma Constrictors. We provide premium ball pythons, corn snakes, and kingsnakes with lifetime support and health guarantees.",
  keywords: ["snakes", "ball python", "corn snake", "kingsnake", "reptiles", "pets", "snake breeding", "snake care"],
  authors: [{ name: "Chroma Constrictors" }],
  openGraph: {
    title: "Chroma Constrictors - Premium Snakes & Expert Care",
    description: "Discover beautiful, healthy snakes with exceptional care at Chroma Constrictors.",
    url: "https://chromaconstrictors.com",
    siteName: "Chroma Constrictors",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
