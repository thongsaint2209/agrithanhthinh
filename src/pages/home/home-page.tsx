import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import Harvesting_Grapes from "@/assets/background/Harvesting_Grapes.jpg";
import Harvesting_Oranges from "@/assets/background/Harvesting_Oranges.png";
import Harvesting_Man from "@/assets/background/Harvesting_Man.png";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";

export const HomePage = () => {
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
      <Box
        width="100vw"
        height="100vh"
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
            <Typography fontSize="3rem" fontWeight="bold">
              Chào mừng đến với chúng tôi
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }} // Bắt đầu mờ và cao hơn
            animate={{ opacity: 1, y: 0 }} // Hiện dần và về đúng vị trí
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} // Chuyển động mượt
          >
            <Typography fontSize="1.8rem" mt={2} fontWeight="semibold">
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

      {/* Section 2*/}
      <Box
        display="flex"
        flexDirection="row"
        height="1000px"
        bgcolor="black"
        overflow="hidden"
        p={4}
        gap={4}
      >
        {/* Ảnh bên trái chiếm 3/4 */}
        <Box
          flex={2.3} // 75% chiều ngang
          component="img"
          src={Harvesting_section2} // Thay bằng đường dẫn hình ảnh thật
          alt="Vườn cam"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 20,
          }}
        />

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
            src={Orange_1} // Thay bằng đường dẫn hình ảnh thật
            alt="Vườn cam"
            sx={{
              position: "absolute",
              width: "400px",
              height: "400px",
              objectFit: "cover",
              transform: "rotate(40deg)",
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
            Về HTX Thuong Thinh Agri
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
      </Box>
    </Box>
  );
};
