import facilHead from "@/assets/기계설비/고속 프레스 전경.png";
import SidebarLayout from "@/components/sidebarLayout";
import { MENU_ITEM } from "@/constants/menu";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarLayout imgSrc={facilHead} targetItem={MENU_ITEM[2].subItems}>
      {children}
    </SidebarLayout>
  );
}
