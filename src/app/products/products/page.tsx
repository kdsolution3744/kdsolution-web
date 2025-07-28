import ImgCompLayout from "@/components/imgCompLayout";
import { MACHINERY_LIST } from "@/constants/machineryList";

export default function MachineryPage() {
  return (
    <ImgCompLayout title="가공품" imgSourceList={MACHINERY_LIST} subTitle="" />
  );
}
