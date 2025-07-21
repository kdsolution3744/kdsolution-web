import AnimatedSection from "@/components/animatedSection";
import CommonHeader from "@/components/commonHeader";
import { CONTACT_INFO } from "@/constants/contactInfo";

export default function InquiryPage() {
  return (
    <div className=" bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <CommonHeader
          title="Contact"
          titleBold="Us"
          subTitle="궁금한 점이 있으시거나 협업을 원하신다면 언제든지 연락해주세요"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form. 실제 이메일 전송기능 네이버 정책으로 불가능 하여 우선 주석처리 */}
          {/* <AnimatedSection delay={200}>
            <EmailForm />
          </AnimatedSection> */}

          {/* Contact Information */}
          <AnimatedSection delay={400}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                연락처 정보
              </h2>
              <div className="space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-600">{info?.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={600}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                운영 시간
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">평일</span>
                  <span className="font-medium text-gray-900">
                    09:00 - 18:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">주말/공휴일</span>
                  <span className="font-medium text-red-600">휴무</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>긴급 문의:</strong> 이메일/팩스로 연락주시면 24시간 내
                  답변드립니다.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
