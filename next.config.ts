import { MENU_ITEM } from "@/constants/menu";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    const redirects = MENU_ITEM.map((v) => {
      return {
        source: v.href,
        destination: v.subItems[0].href,
        permanent: true,
      };
    });
    return redirects;
  },
};

export default nextConfig;
