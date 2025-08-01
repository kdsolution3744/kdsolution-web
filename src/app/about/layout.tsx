import aboutHead from "@/assets/헤더/회사소개3.webp";
import SidebarLayout from "@/components/sidebarLayout";
import { MENU_ITEM } from "@/constants/menu";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarLayout imgSrc={aboutHead} targetItem={MENU_ITEM[0].subItems}>
      {children}
    </SidebarLayout>
  );
}
