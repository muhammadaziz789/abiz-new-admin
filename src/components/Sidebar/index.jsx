import cls from "./style.module.scss";

export const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className="border-b border-blackCommon p-[24px]">
        <img src="../../../public/logo-full.svg" alt="logo" />
      </div>
    </div>
  );
};
