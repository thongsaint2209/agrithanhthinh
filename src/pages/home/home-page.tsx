import React, { useEffect, useState, createContext, useContext } from "react";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { Intro } from "@/features/home-page/components/intro";
import { Product } from "@/features/home-page/components/product";
import { Achieve } from "@/features/home-page/components/achieve";
import { JoinUs } from "@/features/home-page/components/Join-us";
import { Feedback } from "@/features/home-page/components/feedback";
import { ListAchieve } from "@/features/home-page/components/list-achieve";
import { Slider } from "@/features/home-page/components/slider";
import { ListProduct } from "@/features/product/components/list-product/list-product.";
import { useMediaQuery } from "@mui/material";

export const HomePage = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {/* Section 1 */}
      <Slider />

      {/* Các Section tiếp theo - Thêm hiệu ứng khi scroll */}

      <Intro />

      <Box>{isMobile ? <ListProduct /> : <Product />}</Box>

      <Achieve />

      <ListAchieve />

      <Feedback />

      <JoinUs />
    </Box>
  );
};
