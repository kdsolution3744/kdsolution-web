import { MENU_ITEM } from "@/constants/menu";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-border border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  L
                </span>
              </div>
              <span className="font-bold text-xl">Company</span>
            </div>
            <p className="text-sm text-muted-foreground">
              혁신적인 기술과 품질로 고객의 성공을 함께하는 기업입니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>서울특별시 강남구 테헤란로 123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@company.co.kr</span>
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

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              개인정보처리방침
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
