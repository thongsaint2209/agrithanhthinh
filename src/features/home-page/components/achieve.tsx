import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section3 from "@/assets/background/Harvesting_section3.png";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Grapefruit from "@/assets/background/Grapefruit.png";

export const Achieve = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column">
      {/* Section 2 */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        height={{ xs: "auto", sm: "900px", md: "900px" }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        p={4}
        pt={2}
        gap={4}
        flexWrap="wrap" // Mobile tránh tràn nội dung
      >
        {/* Ảnh bên trái */}
        <Box
          flex={{ xs: "none", sm: 1.8, md: 2.6 }}
          component="img"
          src={Harvesting_section3}
          alt="Vườn cam"
          sx={{
            height: { xs: "780px", sm: "100%", md: "100%" }, // Mobile: ảnh lớn hơn
            width: { xs: "100%", sm: "50%", md: "100%" },
            objectFit: "cover",
            borderRadius: { xs: 12, sm: 16, md: 16 },
          }}
        />

        {/* Nội dung bên phải */}
        <Box
          flex={{ xs: "none", sm: 1.4, md: 1.6 }}
          height={{ xs: "auto", sm: "100%", md: "100%" }}
          bgcolor="#16412B"
          color="white"
          p={8}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          borderRadius={{ xs: 12, sm: 16, md: 16 }}
          gap={8}
          position="relative"
          overflow="hidden"
        >
          {/* Vòng tròn lớn */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "360px", sm: "360px", md: "420px" },
              height: { xs: "360px", sm: "360px", md: "420px" },
              bgcolor: "#254A36",
              borderRadius: "50%",
              top: "-150px",
              right: "-180px",
              opacity: 0.7,
            }}
          />

          {/* Vòng tròn nhỏ */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "360px", sm: "360px", md: "420px" },
              height: { xs: "360px", sm: "360px", md: "420px" },
              bgcolor: "#254A36",
              borderRadius: "50%",
              bottom: "-150px",
              left: "-180px",
              opacity: 0.7,
            }}
          />

          {/* Hình cam */}
          <Box
            component="img"
            src={Grapefruit}
            alt="Cam"
            sx={{
              position: "absolute",
              width: { xs: "320px", sm: "380px", md: "440px" },
              height: { xs: "320px", sm: "380px", md: "440px" },
              objectFit: "cover",
              transform: "rotate(0deg)",
              bottom: "-70px",
              right: "-90px",
              borderRadius: 20,
            }}
          />

          {/* Nội dung */}
          <Typography
            fontSize={{ xs: "2rem", sm: "2.2rem", md: "2.2rem" }}
            fontWeight="bold"
            color="#D4E051"
            zIndex={1}
          >
            Thành tựu nổi bật của chúng tôi
          </Typography>

          <Typography
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.2rem" }}
            mt={2}
            zIndex={1}
            lineHeight={2}
          >
            Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc
            hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước,
            ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.
          </Typography>

          {/* Nút bấm */}
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Button
              variant="contained"
              sx={{
                mt: 3,
                width: { xs: "180px", sm: "200px", md: "200px" },
                fontSize: "1rem",
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
