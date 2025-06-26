import Image from "next/image";

export default function MainSection() {
  return (
    <div className="w-full h-svh">
      <h1 className="z-50 text-4xl text-white absolute top-1/2 left-[10%] flex flex-col space-y-4">
        <strong>신뢰를 넘어, 미래로</strong>
        <strong>KD SOLUTION</strong>
      </h1>
      <Image src={"/main-1.jpg"} className=" brightness-60" fill alt="main01" />
    </div>
  );
}
