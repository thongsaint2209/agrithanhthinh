import React, { useEffect, useState, createContext, useContext } from "react";
import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

import { ContactUs } from "@/features/contact-us/components/contact-us";

export const ContactUsPage = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column">
      {/* Section 1 */}
      <ContactUs />
    </Box>
  );
};
