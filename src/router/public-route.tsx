import { Navigate } from "react-router-dom";
import { lazyImport } from "@/utils/lazy-import";
import { HomePage } from "@/pages/home/home-page";
// import { UserInfoPage } from "@/pages/user-info/user-info-page";

const { MainLayout } = lazyImport(
  () => import("@/layouts/main-layout"),
  "MainLayout"
);
const { NotFoundPublicPage } = lazyImport(
  () => import("@/pages/not-found/not-found-public-page"),
  "NotFoundPublicPage"
);

export const PublicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        skipLazyLoad: true,
        element: <Navigate to="home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPublicPage />,
  },
];
