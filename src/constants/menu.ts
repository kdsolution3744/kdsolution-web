export interface IMenu {
  title: string;
  href: string;
}

export interface IMenuList extends IMenu {
  subItems: IMenu[];
}

export const MENU_ITEM: IMenuList[] = [
  {
    title: "회사소개",
    href: "/about",
    subItems: [
      { title: "회사소개", href: "/about/introduction" },
      { title: "연혁", href: "/about/history" },
      { title: "비전", href: "/about/vision" },
    ],
  },
  {
    title: "제품소개",
    href: "/products",
    subItems: [
      { title: "주력 제품", href: "/products/main" },
      { title: "신제품", href: "/products/new" },
      { title: "카탈로그", href: "/products/catalog" },
      { title: "기술 자료", href: "/products/technical" },
    ],
  },
  {
    title: "설비 및 공정",
    href: "/facilities",
    subItems: [
      { title: "공정 설비", href: "/facilities/machinery" },
      { title: "측정 설비", href: "/facilities/measurement" },
      { title: "기타 설비", href: "/facilities/etc" },
      { title: "공정", href: "/facilities/process" },
    ],
  },
  {
    title: "문의",
    href: "/contact",
    subItems: [
      { title: "오시는 길", href: "/about/location" },
      { title: "고객 문의", href: "/about/inquiry" },
    ],
  },
];
