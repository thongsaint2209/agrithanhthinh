import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

import Joinus from "@/assets/background/joinus.jpg";
import { useInView } from "react-intersection-observer"; //
import { useState } from "react";

export const JoinUs = () => {
  const navigate = useNavigate();
  const getThreshold = () => {
    if (window.innerWidth < 600) return 0.2; // Mobile
    if (window.innerWidth < 960) return 0.2; // Tablet
    return 0.8; // Desktop
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Joinus;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <Box ref={ref} display="flex" flexDirection="column">
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
              backgroundImage: imageLoaded
                ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${Joinus})`
                : "none", // Không load ảnh ngay lập tức
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#0000",
              opacity: 0,
            }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </Box>

        {/* Nội dung Overlay */}
        <Box position="absolute" textAlign="center" color="white" zIndex={3}>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Typography
              fontSize={{ xs: "1.6rem", sm: "2rem", md: "2rem" }}
              fontWeight="bold"
              component={motion.div} // Thêm animation trực tiếp
              initial={{ opacity: 0, y: -200 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.3,
                delay: 0.5,
                ease: [0.68, -0.4, 0.4, 1.6],
              }}
            >
              Tham gia với chúng tôi
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.2rem", md: "1.2rem" }}
              mt={2}
              pr={{ xs: 2 }}
              pl={{ xs: 2 }}
              fontWeight="semibold"
            >
              Mỗi trái cam đều tươi ngon, mọng nước và giữ nguyên hương vị tự
              nhiên.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.2rem", md: "1.2rem" }}
              fontWeight="semibold"
              pr={{ xs: 2 }}
              pl={{ xs: 2 }}
            >
              Dịch vụ giao hàng nhanh chóng, đóng gói cẩn thận .
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
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
