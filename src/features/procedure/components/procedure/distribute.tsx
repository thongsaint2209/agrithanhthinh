import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";
import { useInView } from "react-intersection-observer"; //
import distribute from "@/assets/images/distribute.svg";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

export const Distribute = (pros: any) => {
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
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        height={{ xs: "auto", sm: "1000px", md: "1000px" }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        justifyContent="center"
        py={0}
        px={4}
        pb={{ xs: 4, sm: 4, md: 4 }}
        gap={2}
        flexWrap="wrap" // Mobile tránh tràn nội dung
      >
        {/* Nội dung bên phải */}
        <Box
          flex={{ xs: "none", sm: 1.4, md: 1.6 }}
          height={{ xs: "auto", sm: "100%", md: "100%" }}
          bgcolor="#16412B"
          color="white"
          px={8}
          py={{ xs: 4, sm: 0, md: 0 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          borderRadius={{ xs: 12, sm: 16, md: 16 }}
          gap={{ xs: 0, sm: 0, md: 0 }}
          position="relative"
          overflow="hidden"
        >
          {/* Vòng tròn lớn */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "300px", sm: "360px", md: "400px" },
              height: { xs: "300px", sm: "360px", md: "400px" },
              bgcolor: "#254A36",
              borderRadius: "50%",
              top: "-120px",
              right: "-120px",
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
              width: { xs: "300px", sm: "360px", md: "400px" },
              height: { xs: "300px", sm: "360px", md: "400px" },
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
          <Box
            component={motion.img}
            src={distribute}
            alt="Logo"
            sx={{
              position: "absolute",
              width: { xs: "120px", sm: "160px", md: "200px" },
              height: { xs: "120px", sm: "160px", md: "200px" },
              top: "20px",
              right: "20px",
              opacity: 0.7,
            }}
            initial={{ opacity: 0, x: 200, y: -200 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          />
          {/* Nút bấm */}
          <Typography
            fontSize={{ xs: "4rem", sm: "8rem", md: "8rem" }}
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
            05
          </Typography>
          <Typography
            fontSize={{ xs: "1.6rem", sm: "2rem", md: "2rem" }}
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
            Phân phối
          </Typography>
          <Typography
            fontSize={{ xs: "0.9rem", sm: "1.1rem", md: "1.1rem" }}
            mt={{ xs: 2, sm: 4, md: 4 }}
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap={{ xs: 2, sm: 2, md: 2 }}
            mt={{ xs: 0, sm: 2, md: 2 }}
            px={{ xs: 0, sm: 0, md: 0 }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
          >
            {/* Nút mở sidebar chỉ hiển thị trên mobile */}
            <DoneAllRoundedIcon
              sx={{
                width: { xs: "36px", sm: "44px", md: "50px" },
                height: { xs: "36px", sm: "48px", md: "56px" },
                color: "#D4E051", // Màu chính
                stroke: "#D4E051",
                strokeWidth: 0.4, // Độ dày viền
              }}
            />

            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.1rem", md: "1.1rem" }}
              zIndex={1}
              lineHeight={2}
            >
              Tiêu chuẩn canh tác: hướng đến hữu cơ.
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap={{ xs: 2, sm: 2, md: 2 }}
            mt={{ xs: 0, sm: 0, md: 0 }}
            px={{ xs: 0, sm: 0, md: 0 }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
            zIndex={4}
          >
            {/* Nút mở sidebar chỉ hiển thị trên mobile */}
            <DoneAllRoundedIcon
              sx={{
                width: { xs: "36px", sm: "44px", md: "50px" },
                height: { xs: "36px", sm: "48px", md: "56px" },
                color: "#D4E051", // Màu chính
                stroke: "#D4E051",
                strokeWidth: 0.4, // Độ dày viền
              }}
            />

            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.1rem", md: "1.1rem" }}
              zIndex={1}
              lineHeight={2}
            >
              Tiêu chuẩn canh tác: hướng đến hữu cơ.
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap={{ xs: 2, sm: 2, md: 2 }}
            mt={{ xs: 0, sm: 0, md: 0 }}
            px={{ xs: 0, sm: 0, md: 0 }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
            zIndex={4}
          >
            {/* Nút mở sidebar chỉ hiển thị trên mobile */}
            <DoneAllRoundedIcon
              sx={{
                width: { xs: "36px", sm: "44px", md: "50px" },
                height: { xs: "36px", sm: "48px", md: "56px" },
                color: "#D4E051", // Màu chính
                stroke: "#D4E051",
                strokeWidth: 0.4, // Độ dày viền
              }}
            />

            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.1rem", md: "1.1rem" }}
              zIndex={1}
              lineHeight={2}
            >
              Tiêu chuẩn canh tác: hướng đến hữu cơ.
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap={{ xs: 2, sm: 2, md: 2 }}
            mt={{ xs: 0, sm: 0, md: 0 }}
            px={{ xs: 0, sm: 0, md: 0 }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
            zIndex={4}
          >
            {/* Nút mở sidebar chỉ hiển thị trên mobile */}
            <DoneAllRoundedIcon
              sx={{
                width: { xs: "36px", sm: "44px", md: "50px" },
                height: { xs: "36px", sm: "48px", md: "56px" },
                color: "#D4E051", // Màu chính
                stroke: "#D4E051",
                strokeWidth: 0.4, // Độ dày viền
              }}
            />

            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.1rem", md: "1.1rem" }}
              zIndex={1}
              lineHeight={2}
            >
              Tiêu chuẩn canh tác: hướng đến hữu cơ.
            </Typography>
          </Box>
        </Box>
        {/* Ảnh bên trái */}

        <Box
          flex={{ xs: "none", sm: 1.8, md: 2.6 }}
          src={Harvesting_section2}
          alt="Vườn cam"
          sx={{
            height: { xs: "500px", sm: "100%", md: "100%" }, // Mobile: ảnh lớn hơn
            width: { xs: "100%", sm: "50%", md: "100%" },
            objectFit: "cover",
            borderRadius: { xs: 12, sm: 16, md: 16 },
          }}
          component={motion.img} // Thêm animation trực tiếp
          initial={{ opacity: 0, x: 500, y: 0 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{
            duration: 1.3,
            delay: 0.5,
            ease: [0.68, -0.4, 0.4, 1.4],
          }}
        />
      </Box>
    </Box>
  );
};
