import { MENU_ITEM } from "@/constants/menu";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-border border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={"/logo.png"} width={40} height={0} alt="logo" />
                <span className="font-bold text-xl">KD Solution</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              혁신적인 기술과 품질로 고객의 성공을 함께하는 기업입니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>대표 : 이기복</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>사업자 등록 번호 : 134-86-83481</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>사무실 : 경기도 안산시 단원구 성곡로 176, 621호</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>
                  현장 : {"경기도 시흥시 희망공원로 68 (정왕동2091-14)"}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>TEL : 031-493-3744</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>email : kds3744@naver.com</span>
              </div>
            </div>
          </div>

          {MENU_ITEM.map((v) => {
            return (
              <div key={`footer-${v.title}`} className="space-y-4">
                <h3 className="font-semibold">{v.title}</h3>
                <ul className="space-y-2">
                  {v.subItems.map((t) => {
                    return (
                      <li key={`footer-${t.title}`}>
                        <Link
                          href={t.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {t.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
