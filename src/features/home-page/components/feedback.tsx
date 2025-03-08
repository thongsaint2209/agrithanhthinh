import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";

export const Feedback = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column">
      {/* Section 2 */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        height={{ xs: "1960px", sm: "900px", md: "900px" }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        p={4}
        gap={4}
        flexWrap="wrap" // Mobile tránh tràn nội dung
      >
        {/* Nội dung bên phải */}
        <Box
          flex={{ xs: "none", sm: 1.4, md: 1.6 }}
          height={{ xs: "100%", sm: "100%", md: "100%" }}
          bgcolor="#16412B"
          color="white"
          p={8}
          display="flex"
          flexDirection="column"
          borderRadius={{ xs: 12, sm: 16, md: 16 }}
          gap={8}
          position="relative"
          overflow="hidden"
          textAlign="center"
          justifyContent={{ xs: "flex-start", sm: "center", md: "center" }}
        >
          {/* Vòng tròn lớn */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "360px", sm: "900px", md: "1000px" },
              height: { xs: "360px", sm: "980px", md: "1050px" },
              bgcolor: "#254A36",
              borderRadius: "100%",
              top: "-80px",
              left: "-180px",
              opacity: 0.7,
            }}
          />

          {/* Vòng tròn nhỏ */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "460px", sm: "500px", md: "660px" },
              height: { xs: "460px", sm: "500px", md: "660px" },
              bgcolor: "#254A36",
              borderRadius: "50%",
              bottom: "-200px",
              right: "-180px",
              opacity: 0.7,
            }}
          />

          {/* box 1 */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "160px", sm: "100px", md: "100px" },
              left: { xs: "30%", sm: "100px", md: "140px" },
              transform: "rotate(10deg)",
            }}
          >
            {/* Box vàng có hiệu ứng scale */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} // Chỉ scale Box vàng
              transition={{ duration: 0.4, ease: "anticipate" }}
              style={{ display: "inline-block" }} // Tránh lệch vị trí khi scale
            >
              <Box
                sx={{
                  width: { xs: "260px", sm: "260px", md: "300px" },
                  height: { xs: "260px", sm: "260px", md: "300px" },
                  bgcolor: "#7EE87B",
                  borderRadius: "30px 100px 30px 30px",
                  position: "relative",
                }}
              />
            </motion.div>
            {/* Nội dung cố định, không bị scale */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "left",
                justifyContent: "space-between",
                width: "80%",
                pointerEvents: "none", // Tránh bị ảnh hưởng khi hover
              }}
            >
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
                mb={1}
              >
                chất lượng sản phẩm
              </Typography>
              <Typography
                fontSize={{ xs: "0.8rem", sm: "0.8rem", md: "0.9rem" }}
                color="#000"
                lineHeight={1.8}
                mb={1}
              >
                “Sản phẩm trái cây ở đây luôn đạt chuẩn chất lượng. Tôi đánh giá
                cao việc kiểm soát chất lượng từ nguồn gốc đến khâu đóng gói.
                Mỗi lần đặt hàng, sản phẩm đều được giao đúng hẹn và tươi mới
                như mong đợi.”
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
              >
                Tùng - Cần Thơ
              </Typography>
            </Box>
          </Box>

          {/* box 2 */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "440px", sm: "40px", md: "40px" },
              right: { xs: "30%", sm: "35%", md: "600px" },
              transform: "rotate(-5deg)",
            }}
          >
            {/* Box vàng có hiệu ứng scale */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} // Chỉ scale Box vàng
              transition={{ duration: 0.4, ease: "anticipate" }}
              style={{ display: "inline-block" }} // Tránh lệch vị trí khi scale
            >
              <Box
                sx={{
                  width: { xs: "260px", sm: "260px", md: "300px" },
                  height: { xs: "260px", sm: "260px", md: "300px" },
                  bgcolor: "#F8F85D",
                  borderRadius: "30px 100px 30px 30px",
                  position: "relative",
                }}
              />
            </motion.div>
            {/* Nội dung cố định, không bị scale */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "left",
                justifyContent: "space-between",
                width: "80%",
                pointerEvents: "none", // Tránh bị ảnh hưởng khi hover
              }}
            >
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
                mb={1}
              >
                chất lượng sản phẩm
              </Typography>
              <Typography
                fontSize={{ xs: "0.8rem", sm: "0.8rem", md: "0.9rem" }}
                color="#000"
                lineHeight={1.8}
                mb={1}
              >
                “Sản phẩm trái cây ở đây luôn đạt chuẩn chất lượng. Tôi đánh giá
                cao việc kiểm soát chất lượng từ nguồn gốc đến khâu đóng gói.
                Mỗi lần đặt hàng, sản phẩm đều được giao đúng hẹn và tươi mới
                như mong đợi.”
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
              >
                Tùng - Cần Thơ
              </Typography>
            </Box>
          </Box>

          {/* box 3 */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "720px", sm: "80px", md: "80px" },
              right: { xs: "20%", sm: "100px", md: "140px" },
              transform: "rotate(5deg)",
            }}
          >
            {/* Box vàng có hiệu ứng scale */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} // Chỉ scale Box vàng
              transition={{ duration: 0.4, ease: "anticipate" }}
              style={{ display: "inline-block" }} // Tránh lệch vị trí khi scale
            >
              <Box
                sx={{
                  width: { xs: "260px", sm: "260px", md: "300px" },
                  height: { xs: "260px", sm: "260px", md: "300px" },
                  bgcolor: "#FF9340",
                  borderRadius: "30px 100px 30px 30px",
                  position: "relative",
                }}
              />
            </motion.div>
            {/* Nội dung cố định, không bị scale */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "left",
                justifyContent: "space-between",
                width: "80%",
                pointerEvents: "none", // Tránh bị ảnh hưởng khi hover
              }}
            >
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
                mb={1}
              >
                chất lượng sản phẩm
              </Typography>
              <Typography
                fontSize={{ xs: "0.8rem", sm: "0.8rem", md: "0.9rem" }}
                color="#000"
                lineHeight={1.8}
                mb={1}
              >
                “Sản phẩm trái cây ở đây luôn đạt chuẩn chất lượng. Tôi đánh giá
                cao việc kiểm soát chất lượng từ nguồn gốc đến khâu đóng gói.
                Mỗi lần đặt hàng, sản phẩm đều được giao đúng hẹn và tươi mới
                như mong đợi.”
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
              >
                Tùng - Cần Thơ
              </Typography>
            </Box>
          </Box>

          {/* box 4 */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "990px", sm: "480px", md: "480px" },
              left: { xs: "20%", sm: "120px", md: "160px" },
              transform: "rotate(-10deg)",
            }}
          >
            {/* Box vàng có hiệu ứng scale */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} // Chỉ scale Box vàng
              transition={{ duration: 0.4, ease: "anticipate" }}
              style={{ display: "inline-block" }} // Tránh lệch vị trí khi scale
            >
              <Box
                sx={{
                  width: { xs: "260px", sm: "260px", md: "300px" },
                  height: { xs: "260px", sm: "260px", md: "300px" },
                  bgcolor: "#EDF336",
                  borderRadius: "30px 100px 30px 30px",
                  position: "relative",
                }}
              />
            </motion.div>
            {/* Nội dung cố định, không bị scale */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "left",
                justifyContent: "space-between",
                width: "80%",
                pointerEvents: "none", // Tránh bị ảnh hưởng khi hover
              }}
            >
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
                mb={1}
              >
                chất lượng sản phẩm
              </Typography>
              <Typography
                fontSize={{ xs: "0.8rem", sm: "0.8rem", md: "0.9rem" }}
                color="#000"
                lineHeight={1.8}
                mb={1}
              >
                “Sản phẩm trái cây ở đây luôn đạt chuẩn chất lượng. Tôi đánh giá
                cao việc kiểm soát chất lượng từ nguồn gốc đến khâu đóng gói.
                Mỗi lần đặt hàng, sản phẩm đều được giao đúng hẹn và tươi mới
                như mong đợi.”
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
              >
                Tùng - Cần Thơ
              </Typography>
            </Box>
          </Box>

          {/* box 5 */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "1280px", sm: "500px", md: "500px" },
              right: { xs: "20%", sm: "35%", md: "580px" },
              transform: "rotate(-0deg)",
            }}
          >
            {/* Box vàng có hiệu ứng scale */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} // Chỉ scale Box vàng
              transition={{ duration: 0.4, ease: "anticipate" }}
              style={{ display: "inline-block" }} // Tránh lệch vị trí khi scale
            >
              <Box
                sx={{
                  width: { xs: "260px", sm: "260px", md: "300px" },
                  height: { xs: "260px", sm: "260px", md: "300px" },
                  bgcolor: "#FFB94F",
                  borderRadius: "30px 100px 30px 30px",
                  position: "relative",
                }}
              />
            </motion.div>
            {/* Nội dung cố định, không bị scale */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "left",
                justifyContent: "space-between",
                width: "80%",
                pointerEvents: "none", // Tránh bị ảnh hưởng khi hover
              }}
            >
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
                mb={1}
              >
                chất lượng sản phẩm
              </Typography>
              <Typography
                fontSize={{ xs: "0.8rem", sm: "0.8rem", md: "0.9rem" }}
                color="#000"
                lineHeight={1.8}
                mb={1}
              >
                “Sản phẩm trái cây ở đây luôn đạt chuẩn chất lượng. Tôi đánh giá
                cao việc kiểm soát chất lượng từ nguồn gốc đến khâu đóng gói.
                Mỗi lần đặt hàng, sản phẩm đều được giao đúng hẹn và tươi mới
                như mong đợi.”
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
              >
                Tùng - Cần Thơ
              </Typography>
            </Box>
          </Box>

          {/* box 6 */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "1560px", sm: "480px", md: "480px" },
              right: { xs: "30%", sm: "100px", md: "140px" },
              transform: "rotate(-15deg)",
            }}
          >
            {/* Box vàng có hiệu ứng scale */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }} // Chỉ scale Box vàng
              transition={{ duration: 0.4, ease: "anticipate" }}
              style={{ display: "inline-block" }} // Tránh lệch vị trí khi scale
            >
              <Box
                sx={{
                  width: { xs: "260px", sm: "260px", md: "300px" },
                  height: { xs: "260px", sm: "260px", md: "300px" },
                  bgcolor: "#37CC32",
                  borderRadius: "30px 100px 30px 30px",
                  position: "relative",
                }}
              />
            </motion.div>
            {/* Nội dung cố định, không bị scale */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "left",
                justifyContent: "space-between",
                width: "80%",
                pointerEvents: "none", // Tránh bị ảnh hưởng khi hover
              }}
            >
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
                mb={1}
              >
                chất lượng sản phẩm
              </Typography>
              <Typography
                fontSize={{ xs: "0.8rem", sm: "0.8rem", md: "0.9rem" }}
                color="#000"
                lineHeight={1.8}
                mb={1}
              >
                “Sản phẩm trái cây ở đây luôn đạt chuẩn chất lượng. Tôi đánh giá
                cao việc kiểm soát chất lượng từ nguồn gốc đến khâu đóng gói.
                Mỗi lần đặt hàng, sản phẩm đều được giao đúng hẹn và tươi mới
                như mong đợi.”
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                fontWeight="bold"
                color="#000"
              >
                Tùng - Cần Thơ
              </Typography>
            </Box>
          </Box>
          {/* Nội dung */}
          <Typography
            fontSize={{ xs: "1.8rem", sm: "2.2rem", md: "2.2rem" }}
            fontWeight="bold"
            color="#D4E051"
            zIndex={1}
          >
            Phản hồi từ khách hàng
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
