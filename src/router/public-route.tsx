import { Navigate } from "react-router-dom";
import { lazyImport } from "@/utils/lazy-import";
import { HomePage } from "@/pages/home/home-page";
import { IntroPage } from "@/pages/intro-page/intro-page";
import { ListProductPage } from "@/pages/product/list-product-page";
import { ProductDetailPage } from "@/pages/product/product-detail-page";
import { ProceDurePage } from "@/pages/procedure/procedure-page";
import { ContactUsPage } from "@/pages/contact-us/contact-us-page";

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
        element: <Navigate to="trang-chu" />,
      },
      {
        path: "/trang-chu",
        element: <HomePage />,
      },
      {
        path: "/gioi-thieu",
        element: <IntroPage />,
      },
      {
        path: "/san-pham",
        element: <ListProductPage />,
      },
      {
        path: "/san-pham/:sanphamID",
        element: <ProductDetailPage />,
      },
      {
        path: "/quy-trinh",
        element: <ProceDurePage />,
      },
      {
        path: "/lien-lac",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPublicPage />,
  },
];
