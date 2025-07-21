import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./_fonts/PretendardVariable.ttf",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "KD Solution",
  description: "신뢰를 넘어, 미래로 KD Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>
        <Navbar />

        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
