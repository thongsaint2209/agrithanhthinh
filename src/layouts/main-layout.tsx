import React, { Suspense } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Footer } from "@/components/footer/footer";

const navbarHeight = 64; // Đặt chiều cao cố định cho Navbar

export const MainLayout = (props: any) => {
  return (
    <Suspense>
      <Box display="flex" flexDirection="column">
        {/* Navbar luôn hiển thị ở trên */}
        <Box
          id="nav-bar"
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height={navbarHeight}
          zIndex={1200}
        >
          <Navbar {...props} />
        </Box>

        {/* Nội dung chính cần thêm padding-top để không bị Navbar che mất */}
        <Box
          id="page-layout"
          display="flex"
          flexDirection="column"
          flex={1}
          pt={`${navbarHeight}px`}
          width="100%"
        >
          <Outlet />
        </Box>
        <Box display="flex" flexDirection="column" flex={1} width="100%">
          <Footer />
        </Box>
      </Box>
    </Suspense>
  );
};
