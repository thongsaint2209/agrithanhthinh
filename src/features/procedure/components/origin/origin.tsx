import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";
import Grapefruit from "@/assets/background/Grapefruit.png";
import { useInView } from "react-intersection-observer"; //
import Logo from "@/assets/logo/thanh-thinh-agri.svg";

export const Origin = (pros: any) => {
  const navigate = useNavigate();
  // Dùng useInView để phát hiện khi phần tử hiển thị 60% trên màn hình
  const getThreshold = () => {
    if (window.innerWidth < 700) return 0.1; // Mobile
    if (window.innerWidth < 960) return 0.2; // Tablet
    return 0.6; // Desktop
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  });

  return (
    <Box ref={ref} display="flex" flexDirection="column">
      {/* Section 2 */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        height={{ xs: "auto", sm: "800px", md: "800px" }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        px={{ xs: 2, sm: 4, md: 4 }}
        gap={4}
        pb={4}
        flexWrap="wrap" // Mobile tránh tràn nội dung
      >
        {/* Nội dung bên phải */}
        <Box
          flex={{ xs: "none", sm: 1.4, md: 1.6 }}
          height={{ xs: "560px", sm: "100%", md: "100%" }}
          bgcolor="#16412B"
          color="white"
          p={8}
          px={{ xs: 4, sm: 8, md: 8 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          borderRadius={{ xs: 12, sm: 16, md: 16 }}
          gap={{ xs: 6, sm: 8, md: 8 }}
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
            initial={{ opacity: 0, scale: 0.25, rotate: 40 }} // Thêm giá trị rotate ban đầu
            animate={inView ? { opacity: 1, scale: 1, rotate: 40 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.4],
            }}
            src={Orange_1}
            alt="Cam"
            sx={{
              position: "absolute",
              width: { xs: "280px", sm: "300px", md: "340px" },
              height: { xs: "280px", sm: "300px", md: "340px" },
              objectFit: "cover",
              bottom: "-80px",
              right: "-90px",
              borderRadius: 20,
            }}
          />

          {/* Nút bấm */}
          <Typography
            fontSize={{ xs: "1.4rem", sm: "2.2rem", md: "2.4rem" }}
            fontWeight="bold"
            color="#D4E051"
            zIndex={1}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            Nguồn gốc sản phẩm
          </Typography>

          <Typography
            fontSize={{ xs: "0.8rem", sm: "1.2rem", md: "1.2rem" }}
            mt={{ xs: 0, sm: 2, md: 2 }}
            zIndex={1}
            lineHeight={2}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
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
        </Box>
        {/* Ảnh bên trái */}

        <Box
          flex={{ xs: "none", sm: 1.4, md: 1.6 }}
          height={{ xs: "560px", sm: "100%", md: "100%" }}
          bgcolor="#16412B"
          color="white"
          p={8}
          px={{ xs: 4, sm: 8, md: 8 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          borderRadius={{ xs: 12, sm: 16, md: 16 }}
          gap={{ xs: 6, sm: 8, md: 8 }}
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
              width: { xs: "320px", sm: "380px", md: "400px" },
              height: { xs: "320px", sm: "380px", md: "400px" },
              objectFit: "cover",
              transform: "rotate(0deg)",
              bottom: "-70px",
              right: "-90px",
              borderRadius: 20,
            }}
          />

          {/* Nút bấm */}
          <Typography
            fontSize={{ xs: "1.4rem", sm: "2.2rem", md: "2.4rem" }}
            fontWeight="bold"
            color="#D4E051"
            zIndex={1}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            Ứng dụng công nghệ
          </Typography>

          <Typography
            fontSize={{ xs: "0.8rem", sm: "1.2rem", md: "1.2rem" }}
            mt={{ xs: 0, sm: 2, md: 2 }}
            zIndex={1}
            lineHeight={2}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
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
        </Box>
      </Box>
    </Box>
  );
};
