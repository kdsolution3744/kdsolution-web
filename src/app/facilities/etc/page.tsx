import ImgCompLayout from "@/components/imgCompLayout";
import { ETC_LIST } from "@/constants/etcList";

export default function EtcPage() {
  return (
    <div>
      <ImgCompLayout title="기타 설비" imgSourceList={ETC_LIST} subTitle="" />
    </div>
  );
}
