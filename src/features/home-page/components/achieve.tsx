import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import Harvesting_section3 from "@/assets/background/Harvesting_section3.png";
import Grapefruit from "@/assets/background/Grapefruit.png";

export const Achieve = (props: any) => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection="row"
        height="1000px"
        bgcolor="black"
        overflow="hidden"
        p={4}
        gap={4}
      >
        {/* Nội dung bên phải chiếm 1/4 */}
        <Box
          flex={1.6} // 25% chiều ngang
          bgcolor="#16412B"
          color="white"
          p={8}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          borderRadius={20}
          gap={8}
          position="relative" // Để các vòng tròn bám vào
          overflow="hidden"
        >
          {/* Vòng tròn lớn */}
          <Box
            sx={{
              position: "absolute",
              width: "500px",
              height: "500px",
              bgcolor: "#254A36",
              borderRadius: "50%",
              top: "-150px",
              right: "-150px",
              opacity: 0.7,
              zIndex: 0, // Đặt dưới nội dung
            }}
          />
          {/* Vòng tròn nhỏ */}
          <Box
            sx={{
              position: "absolute",
              width: "500px",
              height: "500px",
              bgcolor: "#254A36",
              borderRadius: "50%",
              bottom: "-150px",
              left: "-180px",
              opacity: 0.7,
              zIndex: 0, // Đặt dưới nội dung
            }}
          />

          <Box
            flex={2.3} // 75% chiều ngang
            component="img"
            src={Grapefruit} // Thay bằng đường dẫn hình ảnh thật
            alt="Vườn cam"
            sx={{
              position: "absolute",
              width: "450px",
              height: "450px",
              objectFit: "cover",
              transform: "rotate(0deg)",
              bottom: "-80px",
              right: "-90px",
              borderRadius: 20,
            }}
          />
          {/* Nội dung */}
          <Typography
            fontSize="2.4rem"
            fontWeight="bold"
            color="#D4E051"
            zIndex={1}
          >
            Thành tựu nổi bật của chúng tôi
          </Typography>

          <Typography fontSize="1.4rem" mt={2} zIndex={1}>
            Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc
            hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước,
            ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.
          </Typography>

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
                zIndex: "1",
              }}
              onClick={() => navigate("/about")}
            >
              Tìm hiểu thêm
            </Button>
          </motion.div>
        </Box>

        {/* Ảnh bên trái chiếm 3/4 */}
        <Box
          flex={2.3} // 75% chiều ngang
          component="img"
          src={Harvesting_section3} // Thay bằng đường dẫn hình ảnh thật
          alt="Vườn cam"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
      </Box>
    </Box>
  );
};
