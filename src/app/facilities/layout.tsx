import SidebarLayout from "@/components/sidebarLayout";
import { MENU_ITEM } from "@/constants/menu";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarLayout imgSrc="/about.png" targetItem={MENU_ITEM[2].subItems}>
      {children}
    </SidebarLayout>
  );
}
