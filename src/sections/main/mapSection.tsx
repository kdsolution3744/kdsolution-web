"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, HardHat, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function MapSection() {
  const [activeMap, setActiveMap] = useState<"office" | "site">("office");

  const locations = {
    office: {
      title: "본사 사무실",
      address: "경기도 안산시 단원구 성곡로 176, 621호",
      iframe: () => (
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.7433696923367!2d126.75880207608637!3d37.324906172102224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b71c0bbd2ec47%3A0x6495dfacbed2271!2z6rK96riw64-EIOyViOyCsOyLnCDri6jsm5Dqtawg7ISx6rOh66GcIDE3NiA2MjHtmLg!5e0!3m2!1sko!2skr!4v1750932155461!5m2!1sko!2skr"
            className="w-full h-[500px]"
            loading="lazy"
          />
        </div>
      ),
      phone: "031-493-3744",
      hours: "평일 09:00 - 18:00",
      icon: Building2,
      color: "bg-blue-500",
    },
    site: {
      title: "공장",
      address: "경기도 시흥시 희망공원로 68 (정왕동2094-14)",
      iframe: () => (
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6345.051494932304!2d126.70940285417474!3d37.33007558173697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7143506ab1f1%3A0x6310acdb2eeb149b!2z6rK96riw64-EIOyLnO2dpeyLnCDtnazrp53qs7Xsm5DroZwgNjggMTQ!5e0!3m2!1sko!2skr!4v1751280248778!5m2!1sko!2skr"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>
        </div>
      ),
      phone: "031-493-3744",
      hours: "평일 07:00 - 17:00",
      icon: HardHat,
      color: "bg-orange-500",
    },
  };

  const currentLocation = locations[activeMap];
  const IconComponent = currentLocation.icon;
  const MapComponent = currentLocation.iframe;

  return (
    <div className="w-full max-w-6xl mx-auto p-12 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">오시는 길</h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-gray-100 p-1 rounded-lg flex space-x-1">
          <Button
            variant={activeMap === "office" ? "default" : "ghost"}
            onClick={() => setActiveMap("office")}
            className="flex items-center space-x-2"
          >
            <Building2 className="w-4 h-4" />
            <span>사무실</span>
          </Button>
          <Button
            variant={activeMap === "site" ? "default" : "ghost"}
            onClick={() => setActiveMap("site")}
            className="flex items-center space-x-2"
          >
            <HardHat className="w-4 h-4" />
            <span>공장</span>
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Display */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden py-0 gap-0">
            <CardHeader className={`${currentLocation.color} py-4 text-white`}>
              <CardTitle className="flex items-center space-x-2">
                <IconComponent className="w-5 h-5" />
                <span>{currentLocation.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative">
              <div className="relative w-full ">
                <MapComponent />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Info */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {/* <IconComponent className="w-5 h-5" /> */}
                <span>위치 정보</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">주소</p>
                  <p className="text-sm text-gray-600">
                    {currentLocation.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">연락처</p>
                  <p className="text-sm text-gray-600">
                    {currentLocation.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="font-medium">운영시간</p>
                  <p className="text-sm text-gray-600">
                    {currentLocation.hours}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Markers Legend */}
        </div>
      </div>
    </div>
  );
}
