import {
  Battery,
  Cpu,
  Keyboard,
  LucideIcon,
  Monitor,
  Smartphone,
  Sticker,
} from "lucide-react";

export interface IPETExample {
  title: string;
  content: string[];
  bgColor: string;
  color: string;
  icon: LucideIcon;
}

export const PETExampleList: IPETExample[] = [
  {
    title: "디스플레이",
    content: ["보호필름", "편광판 지지층", "백라이트 시트"],
    bgColor: "bg-blue-500",
    color: "text-blue-600",
    icon: Monitor,
  },
  {
    title: "터치스크린",
    content: ["커버필름", "OCA 접착층 지지재"],
    bgColor: "bg-green-500",
    color: "text-green-600",
    icon: Smartphone,
  },
  {
    title: "절연/방열 부품",
    content: ["절연 필름", "회로기판 절연 시트", "모터 절연재"],
    bgColor: "bg-orange-500",
    color: "text-orange-600",
    icon: Cpu,
  },
  {
    title: "하우징 부품",
    content: ["키보드 하판", "기기 내부 구조 부품(사출 PET-G 등)"],
    bgColor: "bg-gray-500",
    color: "text-gray-600",
    icon: Keyboard,
  },
  {
    title: "배터리 구조재",
    content: ["리튬이온배터리의 separator 외 피복재"],
    bgColor: "bg-red-500",
    color: "text-red-600",
    icon: Battery,
  },
  {
    title: "라벨 및 마킹",
    content: ["내열 pet 라벨", "전자기기 뒷면 로고 스티커 등"],
    bgColor: "bg-yellow-400",
    color: "text-yellow-500",
    icon: Sticker,
  },
];
