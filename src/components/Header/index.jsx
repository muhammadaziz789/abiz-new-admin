import cls from "./style.module.scss";
import CSearchInput from "../CElements/CSearchInput";
import { MoonIcon, NotificationIcon } from "../../IconGenerator/Svg";
import useLocationLang from "../../hooks/useLocationLang";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { GetTitle } = useLocationLang();
  const { t } = useTranslation();

  return (
    <div className={cls.header}>
      <h1 className={cls.title}>{t(GetTitle("header"))}</h1>
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
