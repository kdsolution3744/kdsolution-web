import AboutSection from "./components/aboutSection";
import VisionSection from "./components/visionSection";

export default function IntroductionPage() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <AboutSection />
      <VisionSection />
    </div>
  );
}
