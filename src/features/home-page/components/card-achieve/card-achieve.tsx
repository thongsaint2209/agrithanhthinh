import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";

export const CardAchieve = (pros: any) => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Section 2 */}

      <Box
        width={{ xs: "240px", sm: "450px", md: "450px" }}
        height={{ xs: "240px", sm: "380px", md: "380px" }}
        bgcolor="#29262C"
        color="white"
        p={{ xs: 3, sm: 10, md: 10 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        borderRadius={{ xs: 12, sm: 16, md: 16 }}
        sx={{ overflow: "hidden" }} // Tránh nội dung tràn ra ngoài
        component={motion.div} // Biến Box thành motion.div để bắt hover
        whileHover="hover" // Khi hover kích hoạt animation
        initial="initial"
      >
        {/* Tiêu đề có animation */}
        <motion.div
          variants={{
            initial: { opacity: 1, y: 100 }, // Ẩn ở dưới đáy
            hover: { opacity: 1, y: 0 }, // Khi hover, hiện lên từ từ
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
            justifyContent="flex-start"
            gap={2}
          >
            <Box
              width={{ xs: "44px", sm: "62px", md: "62px" }}
              height={{ xs: "44px", sm: "62px", md: "62px" }}
              borderRadius={{ xs: 4, sm: 4, md: 4 }}
              bgcolor="#11472B"
            />
            <Typography
              fontSize={{ xs: "1.2rem", sm: "2.2rem", md: "2.2rem" }}
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
          }}
          transition={{
            duration: 1,
            ease: [0.68, -0.39, 0.4, 1.4], // Tạo hiệu ứng giật lùi nhẹ
            delay: 0.2,
          }}
        >
          <Typography
            fontSize={{ xs: "0.81rem", sm: "1rem", md: "1rem" }}
            mt={{ xs: 0, sm: 2, md: 2 }}
            lineHeight={{ xs: 2, sm: 2, md: 2 }}
            textAlign="start"
          >
            {pros.description}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};
