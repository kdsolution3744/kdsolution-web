import pressView from "@/assets/기계설비/고속 프레스 전경.png";
import press1 from "@/assets/기계설비/고속 프레스1.png";
import press2 from "@/assets/기계설비/고속 프레스2.png";
import press3 from "@/assets/기계설비/고속 프레스3.png";
import rotary1 from "@/assets/기계설비/반칼 로터리1.png";
import rotary2 from "@/assets/기계설비/반칼 로터리2.png";
import slitter from "@/assets/기계설비/슬리터기.png";
import press4 from "@/assets/기계설비/프레스1.png";
import press5 from "@/assets/기계설비/프레스2.png";
import { ImgSource } from "./imgSource";

export const MACHINERY_LIST: ImgSource[] = [
  {
    title: "고속 프레스 3조 6대",
    imageList: [press1, press2, press3],
  },
  {
    title: "고속 프레스 전경",
    imageList: [pressView],
  },
  {
    title: "프레스 2대",
    imageList: [press4, press5],
  },
  {
    title: "반칼 로터리 3대",
    imageList: [rotary1, rotary2],
  },
  {
    title: "슬리터기 1대",
    imageList: [slitter],
  },
];
