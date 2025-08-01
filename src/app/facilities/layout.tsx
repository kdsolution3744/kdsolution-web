import facilHead from "@/assets/헤더/설비및공정.webp";
import SidebarLayout from "@/components/sidebarLayout";
import { MENU_ITEM } from "@/constants/menu";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarLayout cover imgSrc={facilHead} targetItem={MENU_ITEM[2].subItems}>
      {children}
    </SidebarLayout>
  );
}
