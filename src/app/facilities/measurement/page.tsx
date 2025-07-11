import ImgCompLayout from "@/components/imgCompLayout";
import { MEASURE_LIST } from "@/constants/measureList";

export default function MeasurementPage() {
  return (
    <div>
      <ImgCompLayout
        title="측정 설비"
        imgSourceList={MEASURE_LIST}
        subTitle=""
      />
    </div>
  );
}
