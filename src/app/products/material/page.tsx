import AnimatedSection from "@/components/animatedSection";
import CommonHeader from "@/components/commonHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PETExampleList } from "@/constants/PETExample";
import { Eye, Shield, Thermometer, Zap } from "lucide-react";
import Link from "next/link";
import ExampleCard from "./_component/exampleCard";

export default function MachineryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <CommonHeader title="PET" titleBold="소재" />
          <AnimatedSection>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              내열성, 강도, 투명성, 화학적 안정성이 우수한 PET 소재로 다양한
              산업 분야에서 신뢰받는 솔루션을 제공합니다
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              PET 소재의 핵심 특성
            </h3>
            <p className="text-lg text-gray-600">
              산업용 애플리케이션에 최적화된 우수한 물성
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">내열성</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  높은 온도에서도 안정적인 성능을 유지하여 고온 환경에서 사용
                  가능
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">강도</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  우수한 기계적 강도로 내구성이 요구되는 용도에 적합
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">투명성</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  뛰어난 광학적 투명성으로 디스플레이 및 광학 용도에 최적
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">화학적 안정성</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  다양한 화학물질에 대한 우수한 저항성으로 안정적인 성능 보장
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              주요 적용 분야
            </h3>
            <p className="text-lg text-gray-600">
              다양한 산업 분야에서 활용되는 PET 소재
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PETExampleList.map((v) => {
              return <ExampleCard key={v.title} target={v} />;
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            PET 소재 솔루션이 필요하신가요?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            전문가와 상담하여 최적의 솔루션을 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href={"/contact/inquiry"}>문의 하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
