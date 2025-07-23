import facilHead from "@/assets/헤더/소재.webp";
import SidebarLayout from "@/components/sidebarLayout";
import { MENU_ITEM } from "@/constants/menu";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarLayout imgSrc={facilHead} targetItem={MENU_ITEM[1].subItems}>
      {children}
    </SidebarLayout>
  );
}
