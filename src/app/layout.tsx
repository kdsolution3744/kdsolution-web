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
  title: "KD Solution | 케이디솔루션 - 공식 웹사이트",
  description:
    "KD Solution(케이디솔루션) 공식 홈페이지. 품질경영, 환경경영, 첨단 소재·가공품·설비·공정·회사소개·연혁·인증서·문의 등 다양한 정보를 제공합니다.",
  keywords: [
    "KD Solution",
    "케이디솔루션",
    "품질경영",
    "환경경영",
    "소재",
    "가공품",
    "설비",
    "공정",
    "회사소개",
    "연혁",
    "인증서",
    "문의",
    "제조업",
    "산업",
    "공식 홈페이지",
    "KD Solution official website",
    "KDSolution",
    "Korea manufacturing",
    "ISO 9001",
    "ISO 14001",
  ],
  openGraph: {
    title: "KD Solution | 케이디솔루션 - 공식 웹사이트",
    description:
      "KD Solution(케이디솔루션) 공식 홈페이지. 품질경영, 환경경영, 첨단 소재·가공품·설비·공정·회사소개·연혁·인증서·문의 등 다양한 정보를 제공합니다.",
    url: "https://www.kdsolution.net/",
    siteName: "KD Solution",
    images: [
      {
        url: "/favicon.ico",
        width: 256,
        height: 256,
        alt: "KD Solution Logo",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KD Solution | 케이디솔루션 - 공식 웹사이트",
    description:
      "KD Solution(케이디솔루션) 공식 홈페이지. 품질경영, 환경경영, 첨단 소재·가공품·설비·공정·회사소개·연혁·인증서·문의 등 다양한 정보를 제공합니다.",
    images: ["/favicon.ico"],
    site: "@kdsolution",
  },
  metadataBase: new URL("https://www.kdsolution.net/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="a086dd8f8451fb6ab393f1b815526e64a7c2c9c2"
        />
      </head>
      <body className={`${pretendard.className} antialiased`}>
        <Navbar />

        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
