import React, { useEffect, useState, createContext, useContext } from "react";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { StoryUs } from "@/features/intro/components/story-us";
import { Vision } from "@/features/intro/components/vision";
import { Certificate } from "@/features/intro/components/certificate";

export const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column">
      {/* Section 1 */}
      <StoryUs />
      {/* Section 2 */}
      <Vision />
      {/* Section 3 */}
      <Certificate />
    </Box>
  );
};
