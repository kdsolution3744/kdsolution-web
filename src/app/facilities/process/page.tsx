"use client";

import CommonHeader from "@/components/commonHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

type ProcessStep = {
  id: string;
  title: string;
  description?: string;
  type: "normal" | "decision" | "inspection";
  branches?: {
    ok?: string;
    ng?: string;
  };
};

const mainProcess: ProcessStep[] = [
  { id: "1", title: "ORDER 접수", type: "normal" },
  { id: "2", title: "소재 사양 확인", type: "normal" },
  {
    id: "3",
    title: "사양 도면 확인",
    type: "normal",
  },
  { id: "4", title: "소재 발주", type: "normal" },
  { id: "5", title: "금형 발주", type: "normal" },
  {
    id: "6",
    title: "소재 입고 및 수입 검사",
    type: "decision",
    branches: { ng: "4", ok: "7" },
  },
  {
    id: "7",
    title: "금형 입고 및 검수",
    type: "decision",
    branches: { ng: "5", ok: "9" },
  },
  {
    id: "8",
    title: "모델 작업 셋팅",
    type: "normal",
  },
  {
    id: "9",
    title: "공정 검사",
    type: "decision",
    branches: { ng: "9", ok: "11" },
  },
  {
    id: "10",
    title: "제품 생산",
    type: "normal",
  },
  {
    id: "11",
    title: "출하 검사",
    type: "decision",
    branches: { ng: "검사", ok: "13" },
  },
  { id: "12", title: "포장/출하", type: "normal" },
];

const inspectionProcess: ProcessStep[] = [
  { id: "i1", title: "현상 파악", type: "inspection" },
  { id: "i2", title: "임시조치", type: "inspection" },
  { id: "i3", title: "원인분석", type: "inspection" },
  { id: "i4", title: "개선대책수립", type: "inspection" },
  {
    id: "i5",
    title: "이상 유/무 체크",
    type: "decision",
    branches: { ng: "i1", ok: "13" },
  },
];

export default function ProcessPage() {
  const [selectedDecision, setSelectedDecision] = useState<{
    [key: string]: "ok" | "ng" | null;
  }>({});
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const handleDecisionClick = (stepId: string, decision: "ok" | "ng") => {
    setSelectedDecision((prev) => ({
      ...prev,
      [stepId]: prev[stepId] === decision ? null : decision,
    }));
  };

  const getStepIcon = (type: string) => {
    switch (type) {
      case "decision":
        return <AlertTriangle className="w-4 h-4" />;
      case "inspection":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case "decision":
        return "border-yellow-300 bg-yellow-50";
      case "inspection":
        return "border-blue-300 bg-blue-50";
      default:
        return "border-gray-300 bg-white";
    }
  };

  const renderProcessStep = (step: ProcessStep, isInspection = false) => {
    const decision = selectedDecision[step.id];
    const isHovered = hoveredStep === step.id;

    return (
      <div key={step.id} className="flex flex-row gap-4 items-center">
        <Card
          className={`w-48 transition-all duration-200 cursor-pointer ${getStepColor(
            step.type
          )} ${isHovered ? "shadow-lg scale-105" : "shadow-md"}`}
          onMouseEnter={() => setHoveredStep(step.id)}
          onMouseLeave={() => setHoveredStep(null)}
        >
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {getStepIcon(step.type)}
              <Badge variant={"outline"} className="text-xs">
                {isInspection ? `검사-${step.id.replace("i", "")}` : step.id}
              </Badge>
            </div>
            <h3 className="font-semibold text-sm mb-2">{step.title}</h3>

            {step.type === "decision" && (
              <div className="flex gap-2 justify-center">
                <Button
                  size="sm"
                  variant={decision === "ok" ? "default" : "outline"}
                  className="text-xs px-2 py-1 h-6"
                  onClick={() => handleDecisionClick(step.id, "ok")}
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  OK
                </Button>
                <Button
                  size="sm"
                  variant={decision === "ng" ? "destructive" : "outline"}
                  className="text-xs px-2 py-1 h-6"
                  onClick={() => handleDecisionClick(step.id, "ng")}
                >
                  <XCircle className="w-3 h-3 mr-1" />
                  NG
                </Button>
              </div>
            )}

            {decision && step.branches && (
              <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                {decision === "ok" && step.branches.ok && (
                  <div className="text-green-600">
                    →{" "}
                    {step.branches.ok === "inspection"
                      ? "검사 프로세스"
                      : `${step.branches.ok} 단계`}
                    로 이동
                  </div>
                )}
                {decision === "ng" && step.branches.ng && (
                  <div className="text-red-600">
                    →{" "}
                    {step.branches.ng === "i1"
                      ? "검사 프로세스"
                      : `${step.branches.ng} 단계`}
                    로 이동
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Arrow */}
        <div className="my-2">
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-gray-50 p-6 ">
      <div className="max-w-6xl mx-auto">
        <CommonHeader
          title="제조"
          titleBold="프로세스"
          subTitle="제조 프로세스 흐름을 확인하세요"
        />

        <div className="grid xl:grid-cols-3 gap-8">
          {/* Main Process */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
                메인 프로세스
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {mainProcess.map((step) => (
                  <div key={step.id}>{renderProcessStep(step)}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Inspection Process */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-200">
              <h2 className="text-xl font-semibold mb-6 text-center text-blue-800">
                검사 프로세스
              </h2>

              <div className="space-y-4">
                {inspectionProcess.map((step) => (
                  <div key={step.id} className="flex flex-col items-center">
                    {renderProcessStep(step, true)}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  검사 프로세스 안내
                </h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 출하검사에서 NG 시 진입</li>
                  <li>• 이상 유/무 체크에서 NG 시 현상파악으로 순환</li>
                  <li>• 이상 유/무 체크에서 OK 시 포장/출하로 이동</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">범례</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
              <span className="text-sm">일반 단계</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-50 border border-yellow-300 rounded"></div>
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              <span className="text-sm">판단 단계 (OK/NG)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-50 border border-blue-300 rounded"></div>
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm">검사 프로세스</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
