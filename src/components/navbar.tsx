"use client";
import { MENU_ITEM } from "@/constants/menu";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 h-16 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out">
      <div className="w-full flex h-16 items-center justify-between md:justify-around px-4 md:px-16">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">L</span>
          </div>
          <span className="font-bold text-xl">Company</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <ul className="hidden h-full sm:flex items-center group space-x-16 z-50">
          <div
            className="w-full  fixed group-hover:h-52 top-[100%] left-0 translate-y-[-50px] group-hover:translate-y-0
                    group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out rounded-b-lg z-10"
          />
          {MENU_ITEM.map((item) => (
            <li key={item.title} className="relative group">
              <Link
                href={item.href}
                className="text-md transition-colors hover:text-blue-700 font-bold text-black py-4"
              >
                {item.title}
              </Link>
              <div
                className="absolute top-[200%] opacity-0 translate-y-[-50px] pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-in-out py-4 text-sm z-50 min-w-[160px]"
                style={{ minWidth: "160px" }}
              >
                <ul className="space-y-4">
                  {item.subItems.map((v) => (
                    <li key={v.title}>
                      <Link href={v.href}>{v.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-8 sm:w-[400px]">
            <div className="flex flex-col h-full justify-between space-y-4 mt-4">
              <nav className="flex flex-col space-y-2">
                {MENU_ITEM.map((item) => (
                  <Collapsible key={item.title}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-180">
                      {item.title}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 pl-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </nav>
              <div className="w-full flex justify-end">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">
                      L
                    </span>
                  </div>
                  <span className="font-bold text-lg">Company</span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
