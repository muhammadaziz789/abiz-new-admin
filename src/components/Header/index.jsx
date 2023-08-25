import cls from "./style.module.scss";
import CSearchInput from "../CElements/CSearchInput";
import { MoonIcon, NotificationIcon } from "../../IconPicker/svg";

export const Header = () => {
  return (
    <div className={cls.header}>
      <h1 className={cls.title}>Hisob kitob oynasi</h1>
      <div className={cls.line}></div>
      <CSearchInput />
      <div className={cls.line}></div>
      <button>
        <NotificationIcon />
      </button>
      <button>
        <MoonIcon />
      </button>
      <div className={cls.line}></div>
    </div>
  );
};
