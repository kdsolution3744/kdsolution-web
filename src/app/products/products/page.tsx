"use client";
import CommonHeader from "@/components/commonHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PETProductSpecList, removerSpecList } from "@/constants/productsSpec";
import { useState } from "react";

const SECTION = {
  REMOVER: "리무버",
  PET: "가공용 PET",
} as const;
type SectionKey = keyof typeof SECTION;

export default function ProductBPage() {
  const [section, setSection] = useState<SectionKey>("REMOVER");

  return (
    <div>
      <CommonHeader
        title="제품"
        titleBold="AB테스트 B버전"
        subTitle="버튼을 눌러 주요 제품 섹션을 전환해보세요."
      />
      <div className="flex gap-4 justify-center my-8">
        <Button
          variant={section === "REMOVER" ? "default" : "secondary"}
          onClick={() => setSection("REMOVER")}
        >
          {SECTION.REMOVER}
        </Button>
        <Button
          variant={section === "PET" ? "default" : "secondary"}
          onClick={() => setSection("PET")}
        >
          {SECTION.PET}
        </Button>
      </div>
      {section === "REMOVER" && (
        <section className="py-8 px-4 bg-gray-50 rounded-xl mb-8">
          <CommonHeader
            title="리무버"
            titleBold="(Removable Tape)"
            subTitle="잔여물 없이 깔끔하게 떼어낼 수 있는 고기능성 테이프"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">실리콘 리무버</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  고온 안정성, 무잔사, 고정밀 공정에 적합
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">고온 안정성</Badge>
                  <Badge variant="secondary">무잔사</Badge>
                  <Badge variant="secondary">고정밀 공정</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">아크릴 리무버</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  신뢰성 우수, 무유분, 기능성 추가 가능
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">신뢰성 우수</Badge>
                  <Badge variant="secondary">무유분</Badge>
                  <Badge variant="secondary">기능성 추가</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>리무버 제품 사양표</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">NO.</TableHead>
                      <TableHead className="text-center">제품두께</TableHead>
                      <TableHead className="text-center">점착제</TableHead>
                      <TableHead className="text-center">점착력</TableHead>
                      <TableHead className="text-center">라이너</TableHead>
                      <TableHead className="text-center">사용용도</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {removerSpecList.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.thickness}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.type}
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
        </section>
      )}
      {section === "PET" && (
        <section className="py-8 px-4 bg-white rounded-xl mb-8">
          <CommonHeader
            title="가공용"
            titleBold="PET"
            subTitle="다양한 코팅 기술을 적용한 고기능성 PET 필름"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700">UV 코팅</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  저렴한 비용, 빠른 경화, 우수한 광택
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-700">하드코팅</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  스크래치 보호, 우수한 화학성, 높은 내구성
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">인몰드</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2">
                  3D 곡면 디자인, 강한 내구성, 일체형 성형
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>가공용 PET 제품 사양표</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">NO.</TableHead>
                      <TableHead className="text-center">제품두께</TableHead>
                      <TableHead className="text-center">사용용도</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PETProductSpecList.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center">
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
        </section>
      )}
    </div>
  );
}
