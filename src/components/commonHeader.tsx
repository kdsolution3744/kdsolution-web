import AnimatedSection from "./animatedSection";

interface prop {
  title: string;
  titleBold: string;
  subTitle?: string;
}

export default function CommonHeader({ title, titleBold, subTitle }: prop) {
  return (
    <AnimatedSection>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
          {`${title} `}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {titleBold}
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subTitle}
        </p>
      </div>
    </AnimatedSection>
  );
}
