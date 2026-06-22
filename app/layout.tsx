import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({ // 2. Configure it
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SVG Morph Lab | Generative Design Engine",
  description: "A mathematical playground for developers to interpolate, animate, and export complex SVG vector paths with real-time feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      {/* Ensuring min-h-screen here allows the sticky canvas 
        to work correctly across the entire page flow.
      */}
      <body className="min-h-screen flex flex-col bg-black text-white selection:bg-indigo-500/30">
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}