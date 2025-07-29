import CommonHeader from "@/components/commonHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PETProductSpecList, removerSpecList } from "@/constants/productsSpec";
import { HardHat, Layers, Palette, Phone, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function MachineryPage() {
  return (
    <div>
      <CommonHeader
        title="제품"
        titleBold="설명"
        subTitle="고품질 PET 가공품의 상세 정보와 사양"
      />
      {/* Remover Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <CommonHeader
            title="리무버"
            titleBold="(Removable Tape)"
            subTitle="PET에 실리콘, 아크릴 점착제를 도포한 제품으로 일반적인 테이프와
              달리 잔여물이 남지 않고, 표면 손상이 없이 떼어낼 수 있는 점이 특징입니다."
          />

          {/* Remover Types */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Silicone Remover */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  1. 실리콘 리무버 (Silicone Removable Tape)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  실리콘계 점착제를 사용한 탈착형 테이프로, 고온에서도 안정적인
                  접착력을 유지하면서도, 떼어낼 때 잔사가 거의 없고 표면 손상이
                  없는 것이 큰 장점입니다.
                </p>
                <p className="text-gray-700">
                  일반 아크릴 점착제보다 내열성과 이형성이 뛰어나 디스플레이,
                  반도체, 전자 부품 제조 공정 등 고정밀 산업 분야에서 주로
                  사용됩니다.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">고온 안정성</Badge>
                  <Badge variant="secondary">무잔사</Badge>
                  <Badge variant="secondary">고정밀 공정</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Acrylic Remover */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700 flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  2. 아크릴 리무버 (Acrylic Removable Tape)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  아크릴계 점착제를 사용한 탈착형 테이프로, 잔사가 거의 없고,
                  표면 손상이 없는 특징이 있습니다.
                </p>
                <p className="text-gray-700">
                  특히 항온항습의 신뢰성 평가에서 우수한 물성을 가지며, 탈착 후
                  유분기가 없는 장점이 있으며, 정전기방지 등 기능성을 추가할 수
                  있는 특성도 있습니다.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">신뢰성 우수</Badge>
                  <Badge variant="secondary">무유분</Badge>
                  <Badge variant="secondary">기능성 추가</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Remover Specifications Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">리무버 제품 사양표</CardTitle>
              <CardDescription>
                다양한 두께와 점착제 옵션으로 제공되는 리무버 제품군
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold text-center">
                        NO.
                      </TableHead>
                      <TableHead className="font-bold text-center">
                        제품두께
                      </TableHead>
                      <TableHead className="font-bold text-center">
                        점착제
                      </TableHead>
                      <TableHead className="font-bold text-center">
                        점착력
                      </TableHead>
                      <TableHead className="font-bold text-center">
                        라이너
                      </TableHead>
                      <TableHead className="font-bold text-center">
                        사용용도
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {removerSpecList.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.thickness}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            variant={
                              spec.type === "실리콘" ? "default" : "secondary"
                            }
                          >
                            {spec.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.adhesiveness}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.liner}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.purpose}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Processing PET Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <CommonHeader
            title="가공용"
            titleBold="PET"
            subTitle="다양한 코팅 기술을 적용한 고기능성 PET 필름으로 각종 산업 분야의
              특수 요구사항을 만족합니다."
          />

          {/* Processing Types */}
          <div className="space-y-8 mb-12">
            {/* UV Coating */}
            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-700 flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  1. UV 코팅 (UV Coating)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-gray-700">
                      자외선(UV)로 경화되는 코팅방법으로 사용용도는 광택,
                      색상보호, 인쇄보호로 인쇄물, 라벨, 플라스틱 포장 등으로
                      사용하고 있으며 저렴하고 경화가 빠르며 광택이 우수하다는
                      장점이 있습니다.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          주요 용도
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 인쇄물 보호</li>
                          <li>• 라벨 코팅</li>
                          <li>• 플라스틱 포장</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          주요 장점
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 저렴한 비용</li>
                          <li>• 빠른 경화</li>
                          <li>• 우수한 광택</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=200&width=250&text=UV+코팅+적용+예시"
                      alt="UV 코팅 적용 예시"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hard Coating */}
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-700 flex items-center">
                  <HardHat className="w-5 h-5 mr-2" />
                  2. 하드코팅 (Hard Coating)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-gray-700">
                      스크래치성과 화학성을 높이는 고경도 코팅으로 스크래치
                      방지, 내구성 향상을 위하여 사용하며 디스플레이 필름,
                      스마트폰 보호필름, 자동차 부품, 렌즈 등에 사용되고 있으며,
                      가격은 상대적으로 높지만 스크래치 보호와 화학성이
                      우수하다는 장점이 있습니다.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          주요 용도
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 디스플레이 필름</li>
                          <li>• 스마트폰 보호필름</li>
                          <li>• 자동차 부품</li>
                          <li>• 렌즈</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          주요 장점
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 스크래치 보호</li>
                          <li>• 우수한 화학성</li>
                          <li>• 높은 내구성</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=200&width=250&text=하드코팅+적용+예시"
                      alt="하드코팅 적용 예시"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* INMOLD */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  3. 인몰드 (INMOLD)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-gray-700">
                      플라스틱 제품을 성형할 때, 금형 내부에 필름, 라벨, 그래픽
                      또는 기능성 시트를 미리 삽입한 후 그 위에 플라스틱 수지를
                      주입하여 성형과 동시에 장식 또는 기능부여를 완료하는
                      기술이며 냉장고, 세탁기 조작부, 패널 자동차 터치식 버튼
                      등에 사용되고 있으며, 3D 곡면 디자인이 가능하고 내구성이
                      강한 장점이 있습니다.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          주요 용도
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 냉장고 조작부</li>
                          <li>• 세탁기 패널</li>
                          <li>• 자동차 터치 버튼</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          주요 장점
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 3D 곡면 디자인</li>
                          <li>• 강한 내구성</li>
                          <li>• 일체형 성형</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=200&width=250&text=인몰드+적용+예시"
                      alt="인몰드 적용 예시"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Processing PET Specifications Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">가공용 PET 제품 사양표</CardTitle>
              <CardDescription>
                다양한 두께와 용도별로 제공되는 가공용 PET 제품군
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold text-center">
                        NO.
                      </TableHead>
                      <TableHead className="font-bold text-center">
                        제품두께
                      </TableHead>
                      <TableHead className="font-bold text-center">
                        사용용도
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PETProductSpecList.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.thickness}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.purpose}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            제품에 대해 더 자세히 알아보세요
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            전문가와 상담하여 최적의 솔루션을 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone />
              <Link href={"/contact/inquiry"}>문의 하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
