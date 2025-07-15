import { Factory, House, Mail, Phone, Printer } from "lucide-react";
import { ReactNode } from "react";

export interface IContactInfo {
  title: string;
  content: string;
  desc?: string;
  icon: ReactNode;
}

export const CONTACT_INFO: IContactInfo[] = [
  {
    title: "TEL",
    content: "031-493-3744",
    desc: "평일 09:00 - 18:00",
    icon: <Phone />,
  },
  {
    title: "FAX",
    content: "031-493-3745",
    desc: "24시간 접수 가능",
    icon: <Printer />,
  },
  {
    title: "이메일",
    content: "kds3744@naver.com",
    desc: "24시간 접수 가능",
    icon: <Mail />,
  },
  {
    title: "사무실 주소",
    content: "경기도 안산시 단원구 성곡로 176",
    desc: "621호",
    icon: <House />,
  },
  {
    title: "현장 주소",
    content: "경기도 시흥시 희망공원로 68 (정왕동2094-14)",
    icon: <Factory />,
  },
];
