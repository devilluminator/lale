import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/sonner"

const shabnam = localFont({
  src: "../public/fonts/Shabnam.woff2",
});
// Numbers
const shabnam_numbers = localFont({
  src:"../public/fonts/Shabnam-FD-WOL.woff2"
})

export const metadata: Metadata = {
  title: "TAK STORE",
  description: "TAK STORE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${shabnam.className} ${shabnam_numbers.className} antialiased flex justify-start items-center flex-col min-h-screen`}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
