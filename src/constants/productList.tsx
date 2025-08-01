import {
  HardHat,
  Layers,
  LucideIcon,
  Palette,
  Printer,
  Shield,
  Zap,
} from "lucide-react";

export interface ProductSpec {
  thickness: string;
  type?: string;
  adhesiveness?: string;
  liner?: string;
  purpose: string;
}

export interface ProductCard {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  borderColor: string;
  textColor: string;
  icon: LucideIcon;
}

export interface ProductSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cards: ProductCard[];
  specs: ProductSpec[];
}

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: "REMOVER",
    title: "리무버",
    subtitle: "(Removable Tape)",
    description:
      "PET에 실리콘, 아크릴 점착제를 도포한 제품으로 일반적인 테이프와 달리 잔여물이 남지 않고, 표면 손상이 없이 떼어낼 수 있는 점이 특징입니다.",
    cards: [
      {
        title: "실리콘 리무버 (Silicone Removable Tape)",
        subtitle: "고온 안정성, 무잔사, 고정밀 공정",
        description:
          "실리콘계 점착제를 사용한 탈착형 테이프로, 고온에서도 안정적인 접착력을 유지하면서도, 떼어낼 때 잔사가 거의 없고 표면 손상이 없는 것이 큰 장점입니다. 일반 아크릴 점착제보다 내열성과 이형성이 뛰어나 디스플레이, 반도체, 전자 부품 제조 공정 등 고정밀 산업 분야에서 주로 사용됩니다.",
        features: ["고온 안정성", "무잔사", "고정밀 공정"],
        color: "green",
        borderColor: "border-green-200",
        textColor: "text-green-700",
        icon: Shield,
      },
      {
        title: "아크릴 리무버 (Acrylic Removable Tape)",
        subtitle: "신뢰성 우수, 무유분, 기능성 추가",
        description:
          "아크릴계 점착제를 사용한 탈착형 테이프로, 잔사가 거의 없고, 표면 손상이 없는 특징이 있습니다. 특히 항온항습의 신뢰성 평가에서 우수한 물성을 가지며, 탈착 후 유분기가 없는 장점이 있으며, 정전기방지 등 기능성을 추가할 수 있는 특성도 있습니다.",
        features: ["신뢰성 우수", "무유분", "기능성 추가"],
        color: "blue",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        icon: Layers,
      },
    ],
    specs: [
      {
        thickness: "50μm",
        type: "실리콘",
        adhesiveness: "300gf/25mm",
        liner: "PET",
        purpose: "고정밀 공정",
      },
      {
        thickness: "75μm",
        type: "실리콘",
        adhesiveness: "500gf/25mm",
        liner: "PET",
        purpose: "반도체 제조",
      },
      {
        thickness: "100μm",
        type: "아크릴",
        adhesiveness: "400gf/25mm",
        liner: "PET",
        purpose: "디스플레이 제조",
      },
      {
        thickness: "125μm",
        type: "아크릴",
        adhesiveness: "600gf/25mm",
        liner: "PET",
        purpose: "전자 부품",
      },
    ],
  },
  {
    id: "PET",
    title: "가공용 PET",
    subtitle: "다양한 코팅 기술",
    description:
      "다양한 코팅 기술을 적용한 고기능성 PET 필름으로 각종 산업 분야의 특수 요구사항을 만족합니다.",
    cards: [
      {
        title: "인쇄용 PET",
        subtitle: "내수성, 내습성, 내열성, 내화학성",
        description:
          "인쇄용 PET(Polyethylene Terephthalate) 필름은 인쇄 공정에 적합하도록 처리된 PET 필름으로, 고해상도 이미지나 텍스트를 정밀하게 표현할 수 있어 산업용, 포장용, 광고용, 전자재료 등 다양한 분야에 활용 됩니다. 표면이 코로나 처리, 프라이머 코팅 등으로 처리되어 있어 잉크 밀착력이 우수하며, 내수성, 내습성, 내열성, 내화학성이 좋다는 장점이 있습니다.",
        features: ["내수성", "내습성", "내열성", "내화학성"],
        color: "blue",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        icon: Printer,
      },
      {
        title: "UV 코팅 (UV Coating)",
        subtitle: "저렴한 비용, 빠른 경화, 우수한 광택",
        description:
          "자외선(UV)로 경화되는 코팅방법으로 사용용도는 광택, 색상보호, 인쇄보호로 인쇄물, 라벨, 플라스틱 포장 등으로 사용하고 있으며 저렴하고 경화가 빠르며 광택이 우수하다는 장점이 있습니다.",
        features: ["저렴한 비용", "빠른 경화", "우수한 광택"],
        color: "red",
        borderColor: "border-red-200",
        textColor: "text-red-700",
        icon: Palette,
      },
      {
        title: "하드코팅 (Hard Coating)",
        subtitle: "스크래치 보호, 우수한 화학성, 높은 내구성",
        description:
          "스크래치성과 화학성을 높이는 고경도 코팅으로 스크래치 방지, 내구성 향상을 위하여 사용하며 디스플레이 필름, 스마트폰 보호필름, 자동차 부품, 렌즈 등에 사용되고 있으며, 가격은 상대적으로 높지만 스크래치 보호와 화학성이 우수하다는 장점이 있습니다.",
        features: ["스크래치 보호", "우수한 화학성", "높은 내구성"],
        color: "purple",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
        icon: HardHat,
      },
      {
        title: "인몰드 (INMOLD)",
        subtitle: "3D 곡면 디자인, 강한 내구성, 일체형 성형",
        description:
          "플라스틱 제품을 성형할 때, 금형 내부에 필름, 라벨, 그래픽 또는 기능성 시트를 미리 삽입한 후 그 위에 플라스틱 수지를 주입하여 성형과 동시에 장식 또는 기능부여를 완료하는 기술이며 냉장고, 세탁기 조작부, 패널 자동차 터치식 버튼 등에 사용되고 있으며, 3D 곡면 디자인이 가능하고 내구성이 강한 장점이 있습니다.",
        features: ["3D 곡면 디자인", "강한 내구성", "일체형 성형"],
        color: "green",
        borderColor: "border-green-200",
        textColor: "text-green-700",
        icon: Zap,
      },
    ],
    specs: [
      { thickness: "25μm", purpose: "UV 코팅용" },
      { thickness: "50μm", purpose: "하드코팅용" },
      { thickness: "75μm", purpose: "인몰드용" },
      { thickness: "100μm", purpose: "특수 코팅용" },
      { thickness: "125μm", purpose: "고내구성용" },
    ],
  },
];

export const SECTION_NAMES = {
  REMOVER: "리무버",
  PET: "가공용 PET",
} as const;
