import cls from "./style.module.scss";
import SidebarSection from "./Section";

export const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className="border-b border-blackCommon p-[24px]">
        <img src="/logo-full.svg" alt="logo" />
      </div>
      <SidebarSection />
    </div>
  );
};
