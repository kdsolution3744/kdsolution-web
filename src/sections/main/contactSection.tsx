import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="w-full bg-gray-100 p-8 md:p-16 lg:p-24 space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl">
            <strong>고객지원</strong>
          </h3>
          <p className="text-lg md:text-xl xl:text-3xl text-gray-700">
            고객만족, 신뢰를 위하여 최고의 서비스를 제공합니다.
          </p>
        </div>
        <div className="bg-white p-6 md:p-8 content-center rounded-2xl md:rounded-3xl">
          <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-lg xl:text-2xl">
            <Link
              href={"/products/technical"}
              className="text-center hover:text-blue-600 transition-colors duration-200 border-b md:border-b-0 md:border-r-2 border-gray-200 md:border-gray-300 pb-2 md:pb-0 md:pr-8"
            >
              기술 자료
            </Link>
            <Link
              href={"/facilities/process"}
              className="text-center hover:text-blue-600 transition-colors duration-200 border-b md:border-b-0 md:border-r-2 border-gray-200 md:border-gray-300 pb-2 md:pb-0 md:pr-8"
            >
              공정
            </Link>
            <Link
              href={"/contact/location"}
              className="text-center hover:text-blue-600 transition-colors duration-200 border-b md:border-b-0 md:border-r-2 border-gray-200 md:border-gray-300 pb-2 md:pb-0 md:pr-8"
            >
              오시는 길
            </Link>
            <Link
              href={"/contact/inquiry"}
              className="text-center hover:text-blue-600 transition-colors duration-200 border-b border-gray-200 md:border-gray-300 pb-2 md:pb-0 md:border-none"
            >
              고객 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
