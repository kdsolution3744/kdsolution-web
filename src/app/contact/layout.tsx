import contactHead from "@/assets/헤더/문의.webp";
import SidebarLayout from "@/components/sidebarLayout";
import { MENU_ITEM } from "@/constants/menu";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarLayout imgSrc={contactHead} targetItem={MENU_ITEM[3].subItems}>
      {children}
    </SidebarLayout>
  );
}
