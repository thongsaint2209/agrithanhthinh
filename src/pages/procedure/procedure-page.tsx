import React, { useEffect, useState, createContext, useContext } from "react";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { Crop } from "@/features/procedure/components/procedure/crop";
import { Care } from "@/features/procedure/components/procedure/care";
import { Harvest } from "@/features/procedure/components/procedure/harvest";
import { Preserve } from "@/features/procedure/components/procedure/preserve";
import { Distribute } from "@/features/procedure/components/procedure/distribute";
import { Origin } from "@/features/procedure/components/origin/origin";

export const ProceDurePage = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column">
      {/* Section 1 */}
      <Crop />

      {/* Section 2 */}
      <Care></Care>

      {/* Section 3 */}
      <Harvest></Harvest>

      {/* Section 4*/}
      <Preserve></Preserve>

      {/* Section 5*/}
      <Distribute></Distribute>

      {/* Section 6*/}
      <Origin></Origin>
    </Box>
  );
};
