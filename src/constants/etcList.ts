import sensor1 from "@/assets/기타설비/센서 커팅기1.png";
import sensor2 from "@/assets/기타설비/센서 커팅기2.png";
import manual from "@/assets/기타설비/수동 커팅기.png";
import auto from "@/assets/기타설비/자동 커팅기.png";
import dust1 from "@/assets/기타설비/집진기1.png";
import dust2 from "@/assets/기타설비/집진기2.png";
import dust3 from "@/assets/기타설비/집진기3.png";
import { ImgSource } from "./imgSource";

export const ETC_LIST: ImgSource[] = [
  {
    title: "센서 커팅기 1대",
    imageList: [sensor1, sensor2],
  },
  {
    title: "자동 커팅기 1대",
    imageList: [auto],
  },
  {
    title: "수동 커팅기 1대",
    imageList: [manual],
  },
  {
    title: "집진기 5대",
    imageList: [dust1, dust2, dust3],
  },
];
