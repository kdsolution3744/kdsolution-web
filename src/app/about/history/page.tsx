import { HISTORY_LIST } from "@/constants/history";
import HistoryItem from "./_components/historyItem";

export default function HistoryPage() {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            회사 연혁
          </h1>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            2011년 설립 이후 지속적인 성장과 혁신을 통해 업계를 선도해온 우리의
            발자취
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          {/* Timeline items */}
          <div>
            {HISTORY_LIST.map((v, idx) => (
              <HistoryItem key={v.year} item={v} idx={idx} />
            ))}
          </div>
        </div>
        {/* Closing */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            지속가능한 성장을 위한 여정
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {`우리는 지난 ${
              new Date().getFullYear() -
              HISTORY_LIST[HISTORY_LIST.length - 1].year
            }년간의 성장을 바탕으로 앞으로도 혁신과 도전을 통해 더 나은 미래를 만들어가겠습니다.`}
          </p>
        </div>
      </div>
    </div>
  );
}
