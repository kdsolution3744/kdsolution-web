import ImgCompLayout from "@/components/imgCompLayout";
import { MACHINERY_LIST } from "@/constants/machineryList";

export default function MachineryPage() {
  return (
    <ImgCompLayout
      title="공정 설비"
      imgSourceList={MACHINERY_LIST}
      subTitle=""
    />
  );
}
