import React from "react";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";
import { useInView } from "react-intersection-observer"; //
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { Box, Typography, IconButton } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import Logo from "@/assets/logo/thanh-thinh-agri.svg";
import Story from "@/assets/images/story-us.svg";

export const StoryUs = (pros: any) => {
  const navigate = useNavigate();
  // Dùng useInView để phát hiện khi phần tử hiển thị 60% trên màn hình
  const getThreshold = () => {
    if (window.innerWidth < 700) return 0.1; // Mobile
    if (window.innerWidth < 960) return 0.2; // Tablet
    return 0.2; // Desktop
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  });

  const boxRef = useRef<HTMLDivElement | null>(null);
  const [boxHeight, setBoxHeight] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      const newHeight = boxRef.current.offsetHeight + 800; // ✅ Giữ nguyên kiểu số
      setBoxHeight(newHeight);
    }
  }, []);

  const newHeight = boxRef.current ? boxRef.current.offsetHeight + 700 : 1160;
  //   console.log("Chiều cao mới (newHeight):", newHeight);
  return (
    <Box ref={ref} display="flex" flexDirection="column">
      {/* Section 2 */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        height={{
          xs: `calc(${newHeight}px - 260px)`,
          sm: `${newHeight}px`,
          md: `${newHeight}px`,
        }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        p={2}
        gap={4}
        alignItems="flex-start" // Căn giữa các phần tử con theo chiều dọc
        justifyContent="flex-start"
        position="relative"
      >
        <Box
          ref={ref}
          display="flex"
          flexDirection="column"
          height={{ xs: "80%", sm: "80%", md: "80%" }}
          position="relative"
        >
          <Box
            flex={{ xs: "none", sm: 1.4, md: 1.6 }}
            height={{ xs: "100%", sm: "100%", md: "100%" }}
            bgcolor="#16412B"
            color="white"
            pt={{ xs: 4, sm: 8, md: 8 }}
            px={{ xs: 2, sm: 8, md: 8 }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            borderRadius={{ xs: 12, sm: 16, md: 16 }}
            gap={{ xs: 1, sm: 1, md: 1 }}
            position="relative"
            overflow="hidden"
            minHeight="300px"
          >
            {/* Vòng tròn lớn */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: "360px", sm: "360px", md: "400px" },
                height: { xs: "360px", sm: "360px", md: "400px" },
                bgcolor: "#254A36",
                borderRadius: "50%",
                top: "-100px",
                right: "-100px",
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
            {/* icon */}
            <Box
              component={motion.img}
              src={Story}
              alt="Logo"
              sx={{
                position: "absolute",
                width: { xs: "0px", sm: "240px", md: "300px" },
                height: { xs: "0px", sm: "240px", md: "300px" },
                top: "0px",
                right: "0px",
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
            <Box
              display={{ xs: "none", sm: "flex", md: "flex" }}
              alignItems="center"
              justifyContent="flex-start"
              flexDirection="row"
              gap={2}
              pb={{ xs: 1, sm: 4, md: 4 }}
              component={motion.div} // Thêm animation trực tiếp
              initial={{ opacity: 0, x: -200 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeInOut",
              }}
              // sx={{
              //   position: "absolute",

              //   top: "50px",
              //   left: "50px",
              //   opacity: 0.7,
              // }}
              zIndex={4}
            >
              <Box
                width={{ xs: "42px", sm: "54px", md: "54px" }}
                height={{ xs: "42px", sm: "54px", md: "54px" }}
                component="img"
                src={Logo}
              />
              <Box
                pt={0}
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
              >
                <Typography
                  fontSize={{ xs: "0.8rem", sm: "1.2rem", md: "1.2rem" }}
                  fontWeight="bold"
                  color="#fffff"
                >
                  Thuong Thinh Agri
                </Typography>
                <Typography
                  fontSize={{ xs: "0.8rem", sm: "1rem", md: "1rem" }}
                  color="#fffff"
                >
                  Vị Ngon Từ Đất Việt
                </Typography>
              </Box>
            </Box>
            <Box ref={boxRef} pb={{ xs: 8, sm: 16, md: 16 }} zIndex={8}>
              {/* Tiêu đề*/}
              <Typography
                textAlign="center"
                alignSelf="center"
                fontSize={{ xs: "1.4rem", sm: "2rem", md: "2rem" }}
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
                pb={{ xs: 0, sm: 2, md: 2 }}
              >
                Câu chuyện của chúng tôi
              </Typography>

              <Typography
                fontSize={{ xs: "0.8rem", sm: "1.1rem", md: "1.2rem" }}
                px={{ xs: 4, sm: 10, md: 28 }}
                mt={{ xs: 1, sm: 2, md: 2 }}
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
                Xuất phát từ niềm đam mê với nông nghiệp sạch, Thành Thịnh Agri
                được thành lập với sứ mệnh mang đến những sản phẩm an toàn và
                chất lượng cao cho người tiêu dùng. HTX với diện tích canh tác
                quy mô lên 50 ha, tập trung vào các loại cây ăn quả chủ lực như
                cam sành,quýt và bưởi. Nhờ áp dụng kỹ thuật tiên tiến và mô hình
                hợp tác bền vững, HTX duy trì sản lượng ổn định, đáp ứng thị
                trường trong và ngoài nước. Đồng thời, HTX hỗ trợ nông dân về kỹ
                thuật, giống cây, quy trình sản xuất và luôn hướng tới nền nông
                nghiệp bền vững và đáp ứng các tiêu chí sau:
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap={{ xs: 2, sm: 2, md: 2 }}
                mt={{ xs: 1, sm: 0, md: 0 }}
                px={{ xs: 4, sm: 10, md: 28 }}
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
                    width: { xs: "32px", sm: "44px", md: "50px" },
                    height: { xs: "32px", sm: "48px", md: "56px" },
                    color: "#D4E051", // Màu chính
                    stroke: "#D4E051",
                    strokeWidth: 0.4, // Độ dày viền
                  }}
                />

                <Typography
                  fontSize={{ xs: "0.8rem", sm: "1.1rem", md: "1.1rem" }}
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
                px={{ xs: 4, sm: 10, md: 28 }}
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
                    width: { xs: "32px", sm: "44px", md: "50px" },
                    height: { xs: "32px", sm: "48px", md: "56px" },
                    color: "#D4E051", // Màu chính
                    stroke: "#D4E051",
                    strokeWidth: 0.4, // Độ dày viền
                  }}
                />

                <Typography
                  fontSize={{ xs: "0.8rem", sm: "1.1rem", md: "1.1rem" }}
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
                px={{ xs: 4, sm: 10, md: 28 }}
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
                    width: { xs: "32px", sm: "44px", md: "50px" },
                    height: { xs: "32px", sm: "48px", md: "56px" },
                    color: "#D4E051", // Màu chính
                    stroke: "#D4E051",
                    strokeWidth: 0.4, // Độ dày viền
                  }}
                />

                <Typography
                  fontSize={{ xs: "0.8rem", sm: "1.1rem", md: "1.1rem" }}
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
                px={{ xs: 4, sm: 10, md: 28 }}
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
                    width: { xs: "32px", sm: "44px", md: "50px" },
                    height: { xs: "32px", sm: "48px", md: "56px" },
                    color: "#D4E051", // Màu chính
                    stroke: "#D4E051",
                    strokeWidth: 0.4, // Độ dày viền
                  }}
                />

                <Typography
                  fontSize={{ xs: "0.8rem", sm: "1.1rem", md: "1.1rem" }}
                  zIndex={1}
                  lineHeight={2}
                >
                  Tiêu chuẩn canh tác: hướng đến hữu cơ.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Hình cam */}
        <Box
          flex={{ xs: "none", sm: 1.8, md: 2.6 }}
          src={Harvesting_section2}
          alt="Vườn cam"
          sx={{
            position: "absolute",
            width: { xs: "60%", sm: "60%", md: "60%" },
            height: { xs: "30%", sm: "40%", md: "38%" },
            objectFit: "cover",
            left: { xs: "20%", sm: "20%", md: "20%" },
            top: { xs: "68.5%", sm: "55%", md: "58%" },
            transform: "translate(-50%, -50%)", // Căn giữa
            borderRadius: { xs: 12, sm: 16, md: 16 },
          }}
          zIndex={8}
          component={motion.img} // Thêm animation trực tiếp
          initial={{ opacity: 0, x: 0, y: 0 }}
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
