import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Face from "@/assets/background/Facebook.svg";
import Tele from "@/assets/background/Telegram.svg";
import Zalo from "@/assets/background/Zalo.svg";
import Insta from "@/assets/background/Instagram.svg";
import Logo from "@/assets/logo/thanh-thinh-agri.svg";
import { useInView } from "react-intersection-observer"; //

export const Footer = () => {
  const getThreshold = () => {
    if (window.innerWidth < 600) return 0.2; // Mobile
    if (window.innerWidth < 960) return 0.4; // Tablet
    return 0.4; // Desktop
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
      bgcolor="#f6f9f3"
      py={{ xs: 4, sm: 4, md: 4 }}
      px={{ xs: 2, sm: 6, md: 6 }}
      borderTop={1}
      borderColor="black"
      gap={{ xs: 3, sm: 4, md: 4 }}
    >
      {/* Header + Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            gap={2}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <Box
              width={{ xs: "54px", sm: "70px", md: "70px" }}
              height={{ xs: "54px", sm: "70px", md: "70px" }}
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
                fontSize={{ xs: "1rem", sm: "1.6rem", md: "1.4rem" }}
                fontWeight="bold"
                color="green"
              >
                Thuong Thinh Agri
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.2rem" }}
                color="green"
              >
                Vị Ngon Từ Đất Việt
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={{ xs: 3, sm: 8, md: 8 }}
            component={motion.div} // Thêm animation trực tiếp
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <a
              href="https://zalo.me/84357523669"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                width="24px"
                height="24px"
                component="img"
                src={Tele}
                alt="Zalo"
                sx={{ cursor: "pointer" }}
              />
            </a>
            <a
              href="https://zalo.me/84357523669"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                width="24px"
                height="24px"
                component="img"
                src={Face}
                alt="Zalo"
                sx={{ cursor: "pointer" }}
              />
            </a>
            <a
              href="https://zalo.me/84357523669"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                width="24px"
                height="24px"
                component="img"
                src={Zalo}
                alt="Zalo"
                sx={{ cursor: "pointer" }}
              />
            </a>
            <a
              href="https://zalo.me/84357523669"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                width="24px"
                height="24px"
                component="img"
                src={Insta}
                alt="Zalo"
                sx={{ cursor: "pointer" }}
              />
            </a>
          </Box>
        </Box>
      </motion.div>

      <Box
        height="1px"
        width="100%"
        bgcolor="black"
        component={motion.div}
        initial={{ scaleX: 0 }} // Bắt đầu từ 0 (ẩn hoàn toàn)
        animate={inView ? { scaleX: 1 } : {}} // Khi hiển thị, mở rộng ra hai bên
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
        }}
        sx={{ transformOrigin: "center" }} // Đặt điểm mở rộng từ giữa
      />

      {/* Danh mục thông tin */}
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={4}
        component={motion.div} // Thêm animation trực tiếp
        initial={{ opacity: 0, x: -200 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
        }}
      >
        {/* Giới thiệu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            flexDirection="column"
            gap={3}
          >
            <Typography
              fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.4rem" }}
              fontWeight="bold"
              color="green"
            >
              Giới thiệu
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Sứ mệnh & tầm nhìn
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Quá trình hình thành
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Tiêu chuẩn & chứng nhận
            </Typography>
          </Box>
        </motion.div>

        {/* Sản phẩm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            flexDirection="column"
            gap={3}
          >
            <Typography
              fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.4rem" }}
              fontWeight="bold"
              color="green"
            >
              Sản phẩm
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Trái cây chủ lực
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Đặt hàng
            </Typography>
          </Box>
        </motion.div>

        {/* Quy trình */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            flexDirection="column"
            gap={3}
          >
            <Typography
              fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.4rem" }}
              fontWeight="bold"
              color="green"
            >
              Quy trình
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Mô tả
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Truy xuất nguồn gốc
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Ứng dụng công nghệ
            </Typography>
          </Box>
        </motion.div>

        {/* Đối tác & khách hàng */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            flexDirection="column"
            gap={3}
          >
            <Typography
              fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.4rem" }}
              fontWeight="bold"
              color="green"
            >
              Đối tác & khách hàng
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Thông tin đối tác
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Đánh giá
            </Typography>
          </Box>
        </motion.div>

        {/* Liên hệ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            flexDirection="column"
            gap={3}
          >
            <Typography
              fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.4rem" }}
              fontWeight="bold"
              color="green"
            >
              Liên hệ
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Email: info@ghub.com
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}>
              Sđt: 0908 900 484
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Box
        height="1px"
        width="100%"
        bgcolor="black"
        component={motion.div}
        initial={{ scaleX: 0 }} // Bắt đầu từ 0 (ẩn hoàn toàn)
        animate={inView ? { scaleX: 1 } : {}} // Khi hiển thị, mở rộng ra hai bên
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
        }}
        sx={{ transformOrigin: "center" }} // Đặt điểm mở rộng từ giữa
      />

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography
          fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.2rem" }}
          textAlign="center"
          mt={2}
          fontWeight="bold"
          color="green"
          pb={3}
          component={motion.div} // Thêm animation trực tiếp
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
        >
          Copyright © 2025. All Right Reserved.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;
