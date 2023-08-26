import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import cls from "./style.module.scss";
import { useState } from "react";

const MainLayout = () => {
  const [state, setState] = useState({
    isAnimating: false,
    key: 0,
  });

  return (
    <div className={cls.layout}>
      <Sidebar />
      <div className={cls.content}>
        <Header />
        <Outlet />

        {/* <MainSkeleton /> */}
      </div>
    </div>
  );
};

export default MainLayout;
