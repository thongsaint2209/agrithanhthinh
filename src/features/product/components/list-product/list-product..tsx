import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import { useState } from "react";
import Orange1 from "@/assets/images/orange.png";
import Quyt from "@/assets/images/quyt.jpg";
import QuytHong from "@/assets/images/quyt-hong.png";
import Buoi from "@/assets/images/buoi.jpg";
import { useInView } from "react-intersection-observer"; //

const fruits = [
  {
    id: 1,
    name: "Cam sành",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: Orange1,
  },
  {
    id: 2,
    name: "Quýt đường",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: Quyt,
  },
  {
    id: 3,
    name: "Bưởi",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: Buoi,
  },
  {
    id: 4,
    name: "Quýt hồng",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: QuytHong,
  },
];

export const ListProduct = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getThreshold = () => {
    console.log(innerWidth);
    if (window.innerWidth < 600) return 0.1; // Mobile
    if (window.innerWidth < 1000) return 0.1; // Tablet
    if (window.innerWidth < 1400) return 0.3; // Tablet
    if (window.innerWidth < 1500) return 0.6; // Tablet
    return 0.8; // Desktop
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  });

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      bgcolor="black"
      p={2}
      gap={4}
      pb={8}
    >
      <Box justifyContent="center">
        <Typography
          fontSize={{ xs: "1.8rem", sm: "3rem", md: "2.8rem" }}
          fontWeight="bold"
          textAlign="center"
          color="white"
          component={motion.div} // Thêm animation trực tiếp
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.68, -0.4, 0.4, 1.6],
          }}
        >
          Sản phẩm
        </Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr", // 1 cột trên màn hình nhỏ
          sm: "repeat(2, 1fr)", // 2 cột trên màn hình nhỏ
          md: "repeat(4, 1fr)", // 4 cột trên màn hình lớn
          rowGap: 50, // khoảng cách giữa các dòng
          columnGap: 0, // khoảng cách giữa các cột
          justifyItems: "center", // Căn giữa ngang (theo cột)
          alignItems: "center",
        }}
        mr={{ xs: 0, sm: 0, md: 12 }} // Khoảng cách giữa các items
        ml={{ xs: 0, sm: 0, md: 12 }}
      >
        {fruits.map((fruit) => {
          const isExpanded = expandedId === fruit.id;

          return (
            <motion.div
              key={fruit.id}
              animate={{ width: isExpanded ? 300 : 300 }}
              initial={{ filter: "brightness(1.4)" }}
              transition={{
                duration: 1.3,
                delay: 0.5,
                ease: [0.68, -0.4, 0.4, 1.6],
              }}
              style={{
                maxWidth: 300, // Giữ layout nhất quán
              }}
            >
              <Box
                height={{ xs: "500px", sm: "600px", md: "680px" }}
                borderRadius={16}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
                position="relative"
                overflow="hidden"
                p={4}
                sx={{
                  cursor: "pointer",
                  background: "black",
                  width: "100%",
                }}
                component={motion.div}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(0.75)",
                }} // Thay đổi thuộc tính khi hover
                onHoverStart={() => setExpandedId(fruit.id)} // Thiết lập trạng thái khi bắt đầu hover
                onHoverEnd={() => setExpandedId(null)} // Thiết lập trạng thái khi kết thúc hover
                transition={{
                  duration: 0.4,

                  ease: [0.68, -0.4, 0.4, 1.6],
                }}
              >
                {/* Ảnh nền */}
                <Box
                  width="100%"
                  height="100%"
                  position="absolute"
                  top={0}
                  left={0}
                  component={motion.div}
                  initial={{ height: "0px", y: 400, opacity: 0 }} // Bắt đầu từ chiều cao 0
                  animate={
                    inView
                      ? { height: "680px", y: 0, opacity: 1 } // Khi vào view, mở rộng chiều cao
                      : { height: "80px", y: 400, opacity: 0 } // Thu nhỏ chiều cao khi ra ngoài view
                  }
                  transition={{
                    duration: 1.3, // Thời gian mượt
                    ease: [0.25, 1, 0.5, 1.2], // Easing mượt
                  }}
                  style={{
                    transformOrigin: "center", // Mở rộng từ giữa (trên và dưới)
                  }}
                >
                  <Box
                    width="100%"
                    height="100%"
                    position="absolute"
                    top={0}
                    left={0}
                    sx={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${fruit.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      zIndex: 1,
                    }}
                  />
                </Box>

                {/* Nội dung */}
                <motion.div
                  initial={false}
                  animate={isExpanded ? "open" : "collapsed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{
                    duration: 1,

                    ease: [0.68, -0.4, 0.4, 1.3],
                  }}
                  style={{
                    overflow: "hidden",
                    zIndex: 2,
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <Typography
                    fontSize={{ xs: "1.5rem", sm: "2.4rem", md: "2.4rem" }}
                    fontWeight="bold"
                  >
                    {fruit.name}
                  </Typography>
                  <Typography
                    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                    mt={1}
                  >
                    {fruit.des}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      width: { xs: "170px", sm: "200px", md: "200px" },
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                      padding: "10px 20px",
                      borderRadius: 16,
                    }}
                    onClick={() => navigate(`/san-pham/${fruit.id}`)}
                  >
                    Tìm hiểu thêm
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};
