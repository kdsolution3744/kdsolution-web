import AnimatedSection from "@/components/animatedSection";
import { VISION_LIST } from "@/constants/vision";

export default function VisionSection() {
  return (
    <section className=" bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Our{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              지속가능한 성장을 위한 우리의 경영 철학과 목표
            </p>
          </div>
        </AnimatedSection>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {VISION_LIST.map((category) => (
            <AnimatedSection key={category.title}>
              <div className="h-full">
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${category.color} p-6 rounded-t-2xl border-t-4 ${category.borderColor}`}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    {category.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-medium tracking-wide">
                    {category.subtitle}
                  </p>
                </div>

                {/* Category Content */}
                <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100 border-t-0">
                  <div className="p-6 space-y-4">
                    {category.content.map((item) => (
                      <AnimatedSection key={item.title}>
                        <div className="group cursor-pointer">
                          <div className="p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200">
                            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                              {item.title}
                            </h3>
                            {item?.desc && (
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Message */}
        <AnimatedSection>
          <div className="text-center bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Together
                </span>{" "}
                We Grow
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                명확한 비전과 체계적인 방침을 바탕으로, 모든 구성원이 하나의
                목표를 향해 나아가며
                <br />
                지속가능한 성장과 고객 만족을 실현해나가겠습니다.
              </p>
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
