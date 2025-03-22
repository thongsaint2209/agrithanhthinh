import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";

import { motion } from "framer-motion";
import { useRef } from "react";
import Orange_1 from "@/assets/images/orange-1.jpg";
import Orange_2 from "@/assets/images/orange-2.png";
import Orange_3 from "@/assets/images/orange-3.jpg";
import Orange_4 from "@/assets/images/orange-4.jpg";
import { useInView } from "react-intersection-observer"; //
import crop from "@/assets/images/crop.svg";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import { IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useState } from "react";
import { Height } from "@mui/icons-material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const ProductDetail = (props: any) => {
  const data = props?.data;
  console.log("data", data.data);

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

  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (tabIndex: any) => {
    setOpenTab(openTab === tabIndex ? null : tabIndex);
  };

  const [startIndex, setStartIndex] = useState(0); // Vị trí đầu của 4 ảnh hiển thị
  const [selectedImage, setSelectedImage] = useState(data.images[0]); // Ảnh lớn hiển thị

  const visibleCount = 4; // Luôn hiển thị 4 ảnh

  const handleNext = () => {
    if (startIndex + visibleCount < data.images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <Box ref={ref} display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        height={{ xs: "auto", sm: "auto", md: "1000px" }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        justifyContent="flex-start"
        py={2}
        px={4}
        pb={{ xs: "auto", sm: 8, md: 14 }}
        gap={2}
        flexWrap="wrap" // Mobile tránh tràn nội dung
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          width="97%"
        >
          {/* Icon quay lại */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
            display="flex"
            alignItems="center" // Căn giữa icon theo chiều dọc
            justifyContent="center" // Căn giữa icon theo chiều ngang
            width="54px" // Định rõ kích thước để dễ căn giữa
            height="100%"
          >
            <IconButton
              sx={{
                width: { xs: "0px", sm: "48px", md: "48px" },
                height: { xs: "0px", sm: "48px", md: "48px" },
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "50%",
                "&:hover": { backgroundColor: "primary.dark" },
                display: { xs: "none", sm: "flex" },
              }}
              onClick={() => navigate("/san-pham")}
            >
              <NavigateBeforeRoundedIcon sx={{ fontSize: "38px" }} />
            </IconButton>
          </Box>

          {/* Tiêu đề sản phẩm */}
          <Typography
            fontSize={{ xs: "2.4rem", sm: "2.8rem", md: "2.8rem" }}
            fontWeight="bold"
            textAlign="center"
            color="white"
            // Giúp tiêu đề tự căn giữa
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.68, -0.4, 0.4, 1.6],
            }}
            flexGrow={1}
          >
            Sản phẩm
          </Typography>
        </Box>

        {/* Section 2 */}

        {/* Nội dung bên phải */}
        <Box
          flex={{ xs: "none", sm: 1.4, md: 1.6 }}
          height={{ xs: "1400px", sm: "1560px", md: "100%" }}
          bgcolor="#16412B"
          color="white"
          px={{ xs: 4, sm: 50, md: 12 }}
          py={{ xs: 4, sm: 4, md: 8 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          borderRadius={{ xs: 12, sm: 16, md: 16 }}
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
            display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            justifyContent={{
              xs: "flex-start",
              sm: "center",
              md: "flex-start",
            }}
            alignContent="center"
            gap={{ xs: 2, sm: 2, md: 12 }}
            zIndex={1}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={{
                xs: "flex-start",
                sm: "center",
                md: "flex-start",
              }}
              alignContent="center"
              gap={{ xs: 2, sm: 2, md: 4 }}
            >
              {/* Ảnh lớn */}
              <Box
                src={selectedImage}
                alt="Ảnh lớn"
                sx={{
                  height: { xs: "380px", sm: "460px", md: "460px" },
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: { xs: 12, sm: 12, md: 12 },
                }}
                component={motion.img}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.68, -0.4, 0.4, 1.6],
                }}
              />

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                {/* Dãy ảnh nhỏ có scroll */}
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  gap={{ xs: 2, sm: 4, md: 4 }}
                  sx={{
                    p: 1,
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    maxWidth: "100%",
                    height: { xs: "100px", sm: "160px", md: "140px" },
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none", // Ẩn thanh cuộn trên Firefox
                    "&::-webkit-scrollbar": { display: "none" }, // Ẩn thanh cuộn trên Chrome
                  }}
                >
                  {data.images
                    .slice(startIndex, startIndex + visibleCount)
                    .map((img: any, index: any) => (
                      <Box
                        key={index}
                        component={motion.img}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.68, -0.4, 0.4, 1.6],
                        }}
                        src={img}
                        alt={`Ảnh ${startIndex + index + 1}`}
                        sx={{
                          height: { xs: "80px", sm: "140px", md: "120px" },
                          width: { xs: "80px", sm: "140px", md: "120px" },
                          objectFit: "cover",
                          borderRadius: { xs: 4, sm: 6, md: 6 },
                          cursor: "pointer",
                          border:
                            startIndex + index === startIndex
                              ? "3px solid white"
                              : "3px solid transparent",
                          transition: "border 0.3s",
                          "&:focus": {
                            border: "2px solid white !important",
                          },
                          "&:hover": {
                            border: "2px solid white !important",
                          },
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{
                          scale: 0.95,
                          transition: { duration: 0.2 },
                        }}
                        onClick={() => setSelectedImage(img)}
                      />
                    ))}
                </Box>

                {/* Nút điều hướng */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.68, -0.4, 0.4, 1.6],
                  }}
                  display="flex"
                  justifyContent="center"
                  gap={2}
                  mt={0}
                >
                  <IconButton
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      height: "40px",
                      width: "40px",
                      "&:disabled": {
                        backgroundColor: "gray !important", // Giữ màu không bị mất
                        color: "white !important",
                      },
                      borderRadius: "50%",
                      "&:hover": { backgroundColor: "primary.dark" },
                      "&:focus": { outline: "none" }, // Chắc chắn không có viền focus
                    }}
                  >
                    <KeyboardArrowDownRoundedIcon
                      sx={{ fontSize: "32px", rotate: "90deg" }}
                    />
                  </IconButton>

                  <IconButton
                    onClick={handleNext}
                    disabled={startIndex + 4 >= data.images.length}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      height: "40px",
                      width: "40px",
                      "&:disabled": {
                        backgroundColor: "gray !important", // Giữ màu không bị mất
                        color: "white !important",
                      },
                      borderRadius: "50%",
                      "&:hover": { backgroundColor: "primary.dark" },
                      "&:focus": { outline: "none" }, // Chắc chắn không có viền focus
                    }}
                  >
                    <KeyboardArrowDownRoundedIcon
                      sx={{ fontSize: "32px", rotate: "-90deg" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            <Box
              flex={{ xs: "none", sm: 1, md: 1 }}
              display="flex"
              flexDirection="column"
              gap={{ xs: 2, sm: 2, md: 2 }}
            >
              <Typography
                fontSize={{ xs: "1.8rem", sm: "2.4rem", md: "2.4rem" }}
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
                {data.name}
              </Typography>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  fontSize={{ xs: "1.4rem", sm: "1.8rem", md: "1.8rem" }}
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
                  {data.price}
                </Typography>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 200 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.3,
                    delay: 0.5,
                    ease: [0.68, -0.4, 0.4, 1.6],
                  }}
                  height="100%"
                  width={{ xs: "140px", sm: "180px", md: "180px" }}
                  zIndex={1}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: { xs: "140px", sm: "180px", md: "180px" },
                      height: { xs: "50px" },
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                      padding: "10px 20px",
                      borderRadius: 16,
                    }}
                    onClick={() => navigate("/lien-lac")}
                  >
                    Liên hệ ngay
                  </Button>
                </Box>
              </Box>
              {/* part 1 */}
              <Box
                height="1px"
                width="100%"
                bgcolor="#ffff"
                component={motion.div}
                initial={{ scaleX: 0 }} // Bắt đầu từ 0 (ẩn hoàn toàn)
                animate={inView ? { scaleX: 1 } : {}} // Khi hiển thị, mở rộng ra hai bên
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                sx={{ transformOrigin: "center" }} // Đặt điểm mở rộng từ giữa
                zIndex={1}
              />

              <Typography
                fontSize={{ xs: "1.4rem", sm: "1.6rem", md: "1.6rem" }}
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
                Mô tả
              </Typography>

              <Typography
                fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                mt={{ xs: 0, sm: 0, md: 0 }}
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
                {data.describe}
              </Typography>

              {/* part 1 */}
              <Box
                height="1px"
                width="100%"
                bgcolor="#ffff"
                component={motion.div}
                initial={{ scaleX: 0 }} // Bắt đầu từ 0 (ẩn hoàn toàn)
                animate={inView ? { scaleX: 1 } : {}} // Khi hiển thị, mở rộng ra hai bên
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                sx={{ transformOrigin: "center" }} // Đặt điểm mở rộng từ giữa
                zIndex={1}
              />
              <Typography
                fontSize={{ xs: "1.4rem", sm: "1.6rem", md: "1.6rem" }}
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
                Chi tiết
              </Typography>

              <Box zIndex={1}>
                {data.title_detail.map((tab: any, i: any) => (
                  <Box
                    key={i + 1}
                    display="flex"
                    flexDirection="column"
                    mb={2}
                    component={motion.div}
                    initial={{ opacity: 0, x: 200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 1.3,
                      delay: 0.5,
                      ease: [0.68, -0.4, 0.4, 1.6],
                    }}
                  >
                    {/* HEADER */}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography
                          fontSize={{
                            xs: "1rem",
                            sm: "1.1rem",
                            md: "1.1rem",
                          }}
                          fontWeight="semibold"
                          zIndex={1}
                          lineHeight={2}
                        >
                          {data.title_detail[i]}
                        </Typography>
                      </Box>

                      {/* NÚT ICON */}
                      <IconButton
                        onClick={() => toggleTab(i)}
                        sx={{
                          width: { xs: "40px", sm: "40px", md: "40px" },
                          height: { xs: "40px", sm: "40px", md: "40px" },
                          backgroundColor: "primary.main",
                          color: "white",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          "&:focus": { outline: "none" },
                          "&:hover": { backgroundColor: "primary.dark" },
                        }}
                      >
                        <Box
                          component={motion.div}
                          animate={{ rotate: openTab === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <KeyboardArrowDownRoundedIcon
                            sx={{ fontSize: "32px" }}
                          />
                        </Box>
                      </IconButton>
                    </Box>

                    {/* NỘI DUNG */}
                    <Box
                      component={motion.div} // Dùng Box thay vì motion.div
                      initial={false}
                      animate={openTab === i ? "open" : "closed"}
                      variants={{
                        open: { height: "auto", opacity: 1, marginTop: 4 },
                        closed: { height: 0, opacity: 0, marginTop: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      sx={{ overflow: "hidden" }}
                    >
                      <Typography
                        fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                        zIndex={1}
                        lineHeight={2}
                      >
                        {data.detail[i]}
                      </Typography>
                    </Box>

                    {/* ĐƯỜNG LINE */}
                    <Box
                      component={motion.div}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      sx={{
                        height: "2px",
                        width: "100%",
                        backgroundColor: "#fff",
                        transformOrigin: "center",
                        marginTop: 3,
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
