"use client";
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
import { PRODUCT_SECTIONS, SECTION_NAMES } from "@/constants/productList";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SECTION = SECTION_NAMES;
type SectionKey = keyof typeof SECTION;

export default function ProductBPage() {
  const [section, setSection] = useState<SectionKey>("REMOVER");

  const currentSection = PRODUCT_SECTIONS.find((s) => s.id === section);

  return (
    <div>
      <CommonHeader
        title="제품"
        titleBold="설명"
        subTitle="고품질 PET 가공품의 상세 정보와 사양"
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
      {currentSection && (
        <section
          className={`py-8 px-4 ${
            section === "REMOVER" ? "bg-gray-50" : "bg-white"
          } rounded-xl mb-8`}
        >
          <CommonHeader
            title={currentSection.title}
            titleBold={currentSection.subtitle}
            subTitle={currentSection.description}
          />
          <div
            className={`grid grid-cols-1 lg:grid-cols-2
            } gap-8 mb-8`}
          >
            {currentSection.cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className={`${card.borderColor} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-xl ${card.textColor} flex items-center`}
                    >
                      <IconComponent className="w-5 h-5 mr-2" />
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">{card.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {card.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">
                {currentSection.title} 제품 사양표
              </CardTitle>
              <CardDescription>
                다양한 사양으로 제공되는 {currentSection.title} 제품군
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
                      {section === "REMOVER" && (
                        <>
                          <TableHead className="font-bold text-center">
                            점착제
                          </TableHead>
                          <TableHead className="font-bold text-center">
                            점착력
                          </TableHead>
                          <TableHead className="font-bold text-center">
                            라이너
                          </TableHead>
                        </>
                      )}
                      <TableHead className="font-bold text-center">
                        사용용도
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentSection.specs.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center font-medium">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-center">
                          {spec.thickness}
                        </TableCell>
                        {section === "REMOVER" && (
                          <>
                            <TableCell className="text-center">
                              <Badge
                                variant={
                                  spec.type === "실리콘"
                                    ? "default"
                                    : "secondary"
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
                          </>
                        )}
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
