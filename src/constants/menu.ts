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
      { title: "인증서", href: "/about/certificate" },
    ],
  },
  {
    title: "제품소개",
    href: "/products",
    subItems: [
      { title: "소재", href: "/products/material" },
      { title: "가공품", href: "/products/products" },
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
      { title: "오시는 길", href: "/contact/location" },
      { title: "고객 문의", href: "/contact/inquiry" },
    ],
  },
];
