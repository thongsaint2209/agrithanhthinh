import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import Harvesting_Grapes from "@/assets/background/Harvesting_Grapes.jpg";
import Harvesting_Oranges from "@/assets/background/Harvesting_Oranges.png";
import Harvesting_Man from "@/assets/background/Harvesting_Man.png";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

export const Slider = () => {
  const navigate = useNavigate();
  const images = [Harvesting_Grapes, Harvesting_Oranges, Harvesting_Man];
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index); // Giữ ảnh cũ để không mất ngay lập tức
      setIndex((i) => (i + 1) % images.length);
    }, 4000); // Chuyển ảnh mỗi 4 giây

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box display="flex" flexDirection="column">
      {/* Section 1*/}
      <Box
        width="100vw"
        height={{ xs: "600px", sm: "710px", md: "710px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        {/* Ảnh nền động */}
        <Box width="100vw" height="100%" position="absolute" top={0} left={0}>
          {/* Ảnh cũ - Giữ lại đến khi ảnh mới fade hoàn tất */}
          <Box
            width="100%"
            height="100%"
            position="absolute"
            top={0}
            left={0}
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${images[prevIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1, // Giữ ảnh cũ trên cùng đến khi fade xong
            }}
          />

          {/* Ảnh mới - Fade vào mà không làm mất ảnh cũ ngay */}

          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${images[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 2, // Đặt trên ảnh cũ
            }}
          />
        </Box>

        {/* Nội dung Overlay */}
        <Box position="absolute" textAlign="center" color="white" zIndex={3}>
          <motion.div
            initial={{ opacity: 0, y: 75 }} // Bắt đầu mờ và cao hơn
            animate={{ opacity: 1, y: 0 }} // Hiện dần và về đúng vị trí
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} // Chuyển động mượt
          >
            <Typography
              fontSize={{ xs: "2rem", sm: "3rem", md: "3rem" }}
              fontWeight="bold"
            >
              Chào mừng đến với chúng tôi
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }} // Bắt đầu mờ và cao hơn
            animate={{ opacity: 1, y: 0 }} // Hiện dần và về đúng vị trí
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} // Chuyển động mượt
          >
            <Typography
              fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "1.8rem" }}
              mt={1}
              fontWeight="semibold"
            >
              Thực phẩm an toàn, tương lai bền vững!
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }} // Bắt đầu mờ và cao hơn
            animate={{ opacity: 1, y: 0 }} // Hiện dần và về đúng vị trí
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} // Chuyển động mượt
          >
            <Button
              variant="contained"
              sx={{
                mt: 3,
                width: { xs: "170px", sm: "200px", md: "200px" },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                padding: "10px 20px",
                borderRadius: 16,
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
