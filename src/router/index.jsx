import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sections } from "./state";
import websiteState from "../store/website";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";
import Finance from "../views/Finance";
import HistoryDebit from "../views/Finance/HistoryDebit";
import HistoryIncome from "../views/Finance/HistoryIncome";
import HistoryOutcome from "../views/Finance/HistoryOutcome";

const Router = () => {
  const isAuth = true;
  const [list, setList] = useState([]);
  const [routes, setRoutes] = useState({ ...Sections });

  const getPath = ({ parent, link, title, icon, sidebar }) => {
    const path = `${parent}/${link}`;
    const obj = {
      path: path,
      sidebar,
      permission: path,
      id: path,
      title,
      icon,
    };

    if (!list.includes(obj.id)) {
      setRoutes((prev) => ({
        ...prev,
        [parent]: [...prev[parent], obj],
      }));
      setList((prev) => [...prev, obj.id]);
    }

    return path;
  };

  useEffect(() => {
    websiteState.routes = routes;
  }, []);

  if (!isAuth)
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/login " />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="finance/main" />} />
        <Route
          path={getPath({
            parent: "finance",
            link: "main",
            sidebar: true,
            title: "Hisob kitob oynasi",
            icon: "finance",
          })}
          element={<Finance />}
        />
        <Route
          path={getPath({
            parent: "finance",
            link: "history-income",
            sidebar: true,
            title: "Kirim tarixi",
            icon: "history-income",
          })}
          element={<HistoryIncome />}
        />
        <Route
          path={getPath({
            parent: "finance",
            link: "history-outcome",
            sidebar: true,
            title: "Chiqim tarixi",
            icon: "history-outcome",
          })}
          element={<HistoryOutcome />}
        />
        <Route
          path={getPath({
            parent: "finance",
            link: "history-debit",
            sidebar: true,
            title: "Qarzdorlik tarixi",
            icon: "history-debit",
          })}
          element={<HistoryDebit />}
        />
        <Route
          path={getPath({
            parent: "storage",
            link: "products",
            sidebar: true,
            title: "Mahsulotlar",
            icon: "products",
          })}
          element={<HistoryDebit />}
        />
        <Route
          path={getPath({
            parent: "storage",
            link: "history-imports",
            sidebar: true,
            title: "Importlar tarixi",
            icon: "vehicle",
          })}
          element={<HistoryDebit />}
        />
        <Route
          path={getPath({
            parent: "storage",
            link: "history-sell",
            sidebar: true,
            title: "Sotuvlar tarixi",
            icon: "list",
          })}
          element={<HistoryDebit />}
        />
        <Route
          path={getPath({
            parent: "storage",
            link: "history-limit",
            sidebar: true,
            title: "Limitdagilar",
            icon: "limit",
          })}
          element={<HistoryDebit />}
        />
        <Route
          path={getPath({
            parent: "storage",
            link: "transactions",
            sidebar: true,
            title: "O‘tkazmalar",
            icon: "transactions",
          })}
          element={<HistoryDebit />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
