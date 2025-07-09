import facilHead from "@/assets/about.jpg";
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
