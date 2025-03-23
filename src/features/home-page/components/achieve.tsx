import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section3 from "@/assets/background/Harvesting_section3.png";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Grapefruit from "@/assets/background/Grapefruit.png";
import { useInView } from "react-intersection-observer"; //

export const Achieve = () => {
  const navigate = useNavigate();
  const getThreshold = () => {
    if (window.innerWidth < 700) return 0.1; // Mobile
    if (window.innerWidth < 960) return 0.2; // Tablet
    return 0.6; // Desktop
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  });

  const handleClick = () => {
    navigate("/gioi-thieu");
    window.scrollTo(0, 0); // Reset về đầu trang
  };

  return (
    <Box ref={ref} display="flex" flexDirection="column" width="100%">
      {/* Section 2 */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        width="100%"
        height={{ xs: "auto", sm: "800px", md: "800px" }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        p={{ xs: 2, sm: 4, md: 4 }}
        gap={2}
        flexWrap="wrap" // Mobile tránh tràn nội dung
      >
        {/* Ảnh bên trái */}
        <Box
          flex={{ xs: "none", sm: 1.8, md: 2.6 }}
          src={Harvesting_section3}
          alt="Vườn cam"
          sx={{
            height: { xs: "540px", sm: "100%", md: "100%" }, // Mobile: ảnh lớn hơn
            width: { xs: "100%", sm: "50%", md: "100%" },
            objectFit: "cover",
            borderRadius: { xs: 12, sm: 16, md: 16 },
          }}
          component={motion.img} // Thêm animation trực tiếp
          initial={{ opacity: 0, x: -500, y: 0 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{
            duration: 1.3,
            delay: 0.5,
            ease: [0.68, -0.4, 0.4, 1.4],
          }}
        />

        {/* Nội dung bên phải */}
        <Box
          flex={{ xs: "none", sm: 1.4, md: 1.6 }}
          height={{ xs: "540px", sm: "100%", md: "100%" }}
          bgcolor="#16412B"
          color="white"
          p={{ xs: 6, sm: 8, md: 8 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          borderRadius={{ xs: 12, sm: 16, md: 16 }}
          gap={{ xs: 4, sm: 8, md: 10 }}
          position="relative"
          overflow="hidden"
        >
          {/* Vòng tròn lớn */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "360px", sm: "360px", md: "400px" },
              height: { xs: "360px", sm: "360px", md: "400px" },
              bgcolor: "#254A36",
              borderRadius: "50%",
              top: "-150px",
              right: "-180px",
              opacity: 0.7,
            }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: 200, y: -200 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          />

          {/* Vòng tròn nhỏ */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "360px", sm: "360px", md: "400px" },
              height: { xs: "360px", sm: "360px", md: "400px" },
              bgcolor: "#254A36",
              borderRadius: "50%",
              bottom: "-150px",
              left: "-180px",
              opacity: 0.7,
            }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200, y: 200 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          />

          {/* Hình cam */}
          <Box
            component={motion.img}
            initial={{ opacity: 0, scale: 0.25 }} // Thêm giá trị rotate ban đầu
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.4],
            }}
            src={Grapefruit}
            alt="Cam"
            sx={{
              position: "absolute",
              width: { xs: "300px", sm: "380px", md: "400px" },
              height: { xs: "300px", sm: "380px", md: "400px" },
              objectFit: "cover",
              transform: "rotate(0deg)",
              bottom: "-70px",
              right: "-90px",
              borderRadius: 20,
            }}
          />

          {/* Nội dung */}
          <Typography
            fontSize={{ xs: "1.4rem", sm: "2rem", md: "2rem" }}
            fontWeight="bold"
            color="#D4E051"
            zIndex={1}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            Thành tựu nổi bật của chúng tôi
          </Typography>

          <Typography
            fontSize={{ xs: "0.9rem", sm: "1.2rem", md: "1.2rem" }}
            zIndex={1}
            lineHeight={2}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc
            hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước,
            ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.
          </Typography>

          {/* Nút bấm */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xs: "160px", sm: "200px", md: "200px" },
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                padding: "10px 20px",
                borderRadius: 16,
              }}
              onClick={handleClick}
            >
              Tìm hiểu thêm
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};
