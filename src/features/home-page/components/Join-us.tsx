import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

import Joinus from "@/assets/background/joinus.jpg";

export const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column">
      <Box
        width="100vw"
        height="420px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        {/* Ảnh nền động */}
        <Box width="100vw" height="100%" position="absolute" top={0} left={0}>
          <Box
            width="100%"
            height="100%"
            position="absolute"
            top={0}
            left={0}
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${Joinus})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>

        {/* Nội dung Overlay */}
        <Box position="absolute" textAlign="center" color="white" zIndex={3}>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Typography fontSize="2rem" fontWeight="bold">
              Tham gia với chúng tôi
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Typography fontSize="1.4rem" mt={2} fontWeight="semibold">
              Mỗi trái cam đều tươi ngon, mọng nước và giữ nguyên hương vị tự
              nhiên.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Typography fontSize="1.4rem" fontWeight="semibold">
              Dịch vụ giao hàng nhanh chóng, đóng gói cẩn thận .
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 3,
                width: "200px",
                fontSize: "1rem",
                padding: "10px 20px",
                borderRadius: "60px",
              }}
              onClick={() => navigate("/about")}
            >
              Tìm hiểu thêm
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};
