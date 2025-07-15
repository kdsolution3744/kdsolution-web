import roll from "@/assets/측정설비/롤검사기.webp";
import cordinate_scope from "@/assets/측정설비/비접촉식 좌표 측정기.webp";
import UTM from "@/assets/측정설비/인장벽리 강도시험기.webp";
import CCD from "@/assets/측정설비/전자현미경.webp";
import measure_scope from "@/assets/측정설비/측정현미경.webp";
import scope from "@/assets/측정설비/현미경.webp";
import { ImgSource } from "./imgSource";

export const MEASURE_LIST: ImgSource[] = [
  {
    title: "인장, 박리 강도 시험기(UTM)",
    imageList: [UTM],
  },
  {
    title: "전자현미경(CCD) 1대",
    imageList: [CCD],
  },
  {
    title: "롤검사기",
    imageList: [roll],
  },
  {
    title: "현미경 3대",
    imageList: [scope],
  },
  {
    title: "측정현미경 1대",
    imageList: [measure_scope],
  },
  {
    title: "비접촉식 좌표 측정기 1대",
    imageList: [cordinate_scope],
  },
];
