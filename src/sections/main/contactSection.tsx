import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="w-full bg-gray-100 p-24 space-y-12 grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-6">
        <h3 className="text-5xl">
          <strong>고객지원</strong>
        </h3>
        <p className="text-3xl">
          고객만족, 신뢰를 위하여 최고의 서비스를 제공합니다.
        </p>
      </div>
      <div
        className="flex flex-row items-center justify-around
      bg-white p-8 rounded-3xl text-2xl [&_a]:hover:text-blue-300 [&_a]:border-r-2 [&_a]:pr-8"
      >
        <Link href={"/products/technical"}>기술 자료</Link>
        <Link href={"/facilities/process"}>공정</Link>
        <Link href={"/contact/location"}>오시는 길</Link>
        <Link className="border-none" href={"/contact/inquiry"}>
          고객 문의
        </Link>
      </div>
    </div>
  );
}
