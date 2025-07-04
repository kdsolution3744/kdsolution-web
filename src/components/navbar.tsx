"use client";
import { MENU_ITEM } from "@/constants/menu";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsHover(false);
  }, [pathName]);

  return (
    <header className={`fixed top-0 h-16 z-50  w-full text-black bg-white`}>
      <div className="w-full flex h-16 items-center justify-between md:justify-around px-4 md:px-16">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={"/logo.jpg"} width={40} height={0} alt="logo" />
          <span className="font-bold text-xl">KD Solution</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <ul
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="hidden flex-1 max-w-3/5 justify-around h-full md:flex items-center group z-50"
        >
          <div
            className={`w-full absolute border-t h-80 top-[64px] left-0
                    rounded-b-lg z-10
                    bg-white shadow ${
                      isHover
                        ? "opacity-100 duration-300 pointer-events-auto"
                        : "opacity-0 pointer-events-none duration-0 "
                    }`}
          />
          {MENU_ITEM.map((item) => (
            <li key={item.title} className="relative text-center group w-full">
              <Link
                href={item.href}
                className="text-md transition-colors hover:text-blue-700 font-bold py-4"
              >
                {item.title}
              </Link>
              <div
                className={`${
                  isHover
                    ? "opacity-100 translate-y-0 pointer-events-auto duration-300"
                    : "opacity-0 translate-y-[-20px] pointer-events-none duration-0"
                }
                              w-full pt-4 h-70 absolute top-[200%] break-keep  
                              transition-all ease-in-out py-4 text-sm z-50`}
              >
                <ul className="space-y-4">
                  {item.subItems.map((v) => (
                    <li key={v.title} className="w-full">
                      <Link
                        className="text-black w-full block hover:text-blue-700 font-semibold duration-200 text-center transition-all p-4"
                        href={v.href}
                      >
                        {v.title}
                      </Link>
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-8 md:w-[400px]">
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
                  <img src={"/logo.jpg"} width={32} />
                  {/* <span className="font-bold text-lg">KD Solution</span> */}
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
