import aboutHead from "@/assets/link-section-1.jpg";
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
