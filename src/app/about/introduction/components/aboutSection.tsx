import AnimatedSection from "@/components/animatedSection";

export default function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <img
                src="/main-2.jpg"
                alt="회사 소개 이미지"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                회사 소개
              </h2>
              <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  KD Solution은 2011년 설립 이후 지속적인 성장을 통해 업계에서
                  신뢰받는 기업으로 자리잡았습니다. 고객 중심의 사고와 끊임없는
                  기술 혁신을 바탕으로 매년 꾸준한 성장을 이어가고 있으며, 품질
                  제일주의를 바탕으로 고객 만족을 실현하고 지속적으로 성장하는
                  작지만 강한 기업입니다.
                </p>
                <p>
                  앞으로도 지속가능한 경영과 사회적 책임을 다하며, 모든
                  이해관계자와 함께 성장하는 기업이 되겠습니다.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
