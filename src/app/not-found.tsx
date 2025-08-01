import CommonHeader from "@/components/commonHeader";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <CommonHeader
          title="페이지를"
          titleBold="찾을 수 없습니다"
          subTitle="요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."
        />

        <div className="mt-12 mb-8">
          <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
          <p className="text-lg text-gray-600 mb-8">
            죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
            <br />
            URL을 다시 확인하시거나 아래 버튼을 통해 홈으로 돌아가세요.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              홈으로 돌아가기
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
