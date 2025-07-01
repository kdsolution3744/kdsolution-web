import ContactSection from "@/sections/main/contactSection";
import LinkSection from "@/sections/main/linkSection";
import MainSection from "@/sections/main/mainSection";
import StatisticsSection from "@/sections/main/statisticsSection";

export default function Home() {
  return (
    <div>
      <MainSection />
      <StatisticsSection />
      <LinkSection />
      {/* <MapSection /> */}
      <ContactSection />
    </div>
  );
}
