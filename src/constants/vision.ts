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
        title: "Small But Top",
        desc: "작지만 최고의 기업이 되자",
      },
      {
        title: "Slow and Steady",
        desc: "한 걸음씩 꾸준히 정진하자",
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
        title: "신제품 개발능력 향상",
      },
      {
        title: "효율적인 개발시스템 구축",
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
        desc: "고객불만 ZERO",
      },
      {
        title: "최적의 작업환경 유지",
        desc: "3정 5S 생활화",
      },
      {
        title: "지속적인 개선활동 전개",
        desc: "불량요인 사전제거",
      },
    ],
  },
];
