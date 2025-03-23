import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";
import { useInView } from "react-intersection-observer"; //
import React, { useState, useEffect } from "react";

export const CardAchieve = (pros: any) => {
  const navigate = useNavigate();
  const getThreshold = () => {
    if (window.innerWidth < 600) return 0.1; // Mobile
    if (window.innerWidth < 960) return 0.2; // Tablet
    return 0.4; // Desktop
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  });

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1000);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const isExpanded = expandedId === pros.id;

  // Cập nhật isMobile khi resize màn hình
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const motionState =
    isMobile && isExpanded ? "tap" : inView ? "visible" : "initial";

  return (
    <Box ref={ref}>
      {/* Section 2 */}

      <Box
        width={{ xs: "174px", sm: "450px", md: "450px" }}
        height={{ xs: "174px", sm: "380px", md: "380px" }}
        bgcolor="#29262C"
        color="white"
        p={{ xs: 0, sm: 10, md: 10 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        borderRadius={{ xs: 8, sm: 16, md: 16 }}
        sx={{ overflow: "hidden", cursor: "pointer", pointerEvents: "auto" }}
        component={motion.div} // Chỉ khai báo motion.div một lần duy nhất
        transition={{
          duration: 1.1,
          delay: 0.5,
          ease: [0.68, -0.4, 0.4, 1.6],
        }}
        variants={{
          initial: { opacity: 1, scale: 0 }, // Animation ban đầu
          visible: { opacity: 1, scale: 1 }, // Khi vào viewport
          hover: { scale: 1 }, // Hover trên PC
          tap: { scale: 1 }, // Tap trên Mobile
        }}
        initial="initial"
        whileTap={isMobile ? "tap" : undefined} // Tap chỉ cho Mobile
        animate={motionState} // Sử dụng biến state thay vì whileTap
        whileHover={!isMobile ? "hover" : undefined} // Hover chỉ cho PC
        onClick={() => {
          if (isMobile) {
            console.log("Tapped!"); // Debug kiểm tra click
            setExpandedId(isExpanded ? null : pros.id);
          }
        }}
      >
        {/* Tiêu đề có animation */}
        <motion.div
          variants={{
            initial: { opacity: 1, y: 100 }, // Ẩn ở dưới đáy
            hover: { opacity: 1, y: -20 }, // Khi hover, hiện lên từ từ
            tap: { opacity: 1, y: -20 }, // Khi tap trên mobile
          }}
          transition={{
            duration: 1,
            ease: [0.68, -0.4, 0.4, 1.4], // Tạo hiệu ứng giật lùi nhẹ
            delay: 0.2,
          }}
          style={{ textAlign: "center" }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={{
              xs: "center",
              sm: "flex-start",
              md: "flex-start",
            }}
            gap={{ xs: 1, sm: 2, md: 2 }}
          >
            <Box
              width={{ xs: "38px", sm: "62px", md: "62px" }}
              height={{ xs: "38px", sm: "62px", md: "62px" }}
              borderRadius={{ xs: 4, sm: 4, md: 4 }}
              bgcolor={pros.color}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              {pros.icon}
            </Box>
            <Typography
              fontSize={{ xs: "0.9rem", sm: "2.2rem", md: "2.2rem" }}
              fontWeight="bold"
              color="#ffff"
              zIndex={1}
            >
              {pros.title}
            </Typography>
          </Box>
        </motion.div>

        {/* Nội dung mô tả có animation */}
        <motion.div
          variants={{
            initial: { opacity: 0, y: 300 }, // Ẩn ở dưới đáy
            hover: { opacity: 1, y: 0 }, // Khi hover, hiện lên từ từ
            tap: { opacity: 1, y: 0 }, // Khi hover, hiện lên từ từ
          }}
          transition={{
            duration: 1,
            ease: [0.68, -0.39, 0.4, 1.4], // Tạo hiệu ứng giật lùi nhẹ
            delay: 0.2,
          }}
        >
          <Typography
            fontSize={{ xs: "0.6rem", sm: "1rem", md: "1rem" }}
            mt={{ xs: 0, sm: 2, md: 2 }}
            lineHeight={{ xs: 2, sm: 2, md: 2 }}
            textAlign={{ xs: "center", sm: "start", md: "start" }}
            px={{ xs: 2, sm: 0, md: 0 }}
            py={{ xs: 1, sm: 0, md: 0 }}
            pb={{ xs: 6, sm: 0, md: 0 }}
          >
            {pros.description}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};
