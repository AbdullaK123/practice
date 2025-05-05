import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Random Quote Generator",
  description: "Generates random quotes using an API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto_mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
