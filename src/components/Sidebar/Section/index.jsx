import cls from "./style.module.scss";
import { NavLink } from "react-router-dom";
import websiteState from "../../../store/website";
import { useMemo } from "react";
import { observer } from "mobx-react";
import IconGenerator from "../../../IconGenerator";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useTranslation } from "react-i18next";

const SidebarSection = observer(() => {
  const { checkPath } = usePageRouter();
  const { t } = useTranslation();

  const List = useMemo(() => {
    return websiteState.routes;
  }, [websiteState.routes]);

  return (
    <div className={cls.section}>
      {Object.entries(List)?.map(([key, value]) => (
        <div key={key} className={cls.menu}>
          <h3 className={cls.title}>{t(key)}</h3>

          {value?.map(
            (element) =>
              element.sidebar && (
                <NavLink
                  key={element.id}
                  to={element.path}
                  style={{
                    background: checkPath(element.path) ? "#282c38" : "",
                  }}
                  className={cls.menu__link}
                >
                  <IconGenerator
                    icon={element?.icon}
                    fill={checkPath(element.path, "icon")}
                  />
                  <p>{element.title}</p>
                </NavLink>
              )
          )}
        </div>
      ))}
    </div>
  );
});

export default SidebarSection;
