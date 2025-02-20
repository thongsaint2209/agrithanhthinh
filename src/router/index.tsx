import { useNavigate, useRoutes } from "react-router-dom";
import { PublicRoutes } from "./public-route";

export const AppRoutes = () => {
  const routes = PublicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
