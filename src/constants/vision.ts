interface visionContent {
  title: string;
  desc?: string;
}

export interface IVision {
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  content: visionContent[];
}

export const VISION_LIST: IVision[] = [
  {
    title: "경영방침",
    subtitle: "Management Policy",
    color: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-500",
    content: [
      {
        title: "안전우선 안전경영",
      },
      {
        title: "기업을 위한 현장소통과 기업 주도 성장 강화",
      },
      {
        title: "한걸음씩 꾸준히 정진하자",
      },
    ],
  },
  {
    title: "품질방침",
    subtitle: "Quality Policy",
    color: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-500",
    content: [
      {
        title: "품질 제일주의",
      },
      {
        title: "품질 경쟁력 확보",
      },
      {
        title: "지속적 품질 개선 활동",
      },
    ],
  },
  {
    title: "경영목표",
    subtitle: "Management Goals",
    color: "from-purple-50 to-pink-50",
    borderColor: "border-purple-500",
    content: [
      {
        title: "고객만족 실현",
        desc: "고객우선주의 생활화",
      },
      {
        title: "품질강화 실현",
      },
      {
        title: "신제품 및 기술 개발능력 향상",
        desc: "효율적인 개발시스템 구축",
      },
    ],
  },
];
