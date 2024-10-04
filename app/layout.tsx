import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StopLoss : API Documentation",
  description: "StopLoss API Documentation Project",
  icons: {
    icon: "/logo.png",
  },
  creator: "Mehul Kumar (Coder Mehul)",
  publisher: "Mehul Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
