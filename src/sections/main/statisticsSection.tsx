import AnimatedSection from "@/components/animatedSection";
import CountUp from "@/components/countUp";
import { HISTORY_LIST } from "@/constants/history";

export default function StatisticsSection() {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">숫자로 보는 우리 회사</h2>
            <div className="w-16 h-0.5 bg-white mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <AnimatedSection>
            <div>
              <div className="text-5xl font-bold mb-4">
                <CountUp
                  target={
                    new Date().getFullYear() -
                    HISTORY_LIST[HISTORY_LIST.length - 1].year
                  }
                  suffix="+"
                />
              </div>
              <div className="text-xl text-gray-300">년의 경험</div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <div className="text-5xl font-bold mb-4">
                <CountUp target={100} suffix="+" />
              </div>
              <div className="text-xl text-gray-300">전문 인력</div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <div className="text-5xl font-bold mb-4">
                <CountUp target={1000} suffix="억+" />
              </div>
              <div className="text-xl text-gray-300">연매출</div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <div className="text-5xl font-bold mb-4">
                <CountUp target={50} suffix="+" />
              </div>
              <div className="text-xl text-gray-300">파트너사</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
