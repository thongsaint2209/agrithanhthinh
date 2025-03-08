import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Face from "@/assets/background/Facebook.svg";
import Tele from "@/assets/background/Telegram.svg";
import Zalo from "@/assets/background/Zalo.svg";
import Insta from "@/assets/background/Instagram.svg";
import Logo from "@/assets/logo/thanh-thinh-agri.svg";

export const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#f6f9f3"
      py={4}
      px={6}
      borderTop={1}
      borderColor="black"
      gap={4}
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
                fontSize={{ xs: "1.2rem", sm: "1.6rem", md: "1.6rem" }}
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

          <Box display="flex" alignItems="center" gap={{ xs: 4, sm: 8, md: 8 }}>
            <Box width="24px" height="24px" component="img" src={Tele} />
            <Box width="24px" height="24px" component="img" src={Face} />
            <Box width="24px" height="24px" component="img" src={Zalo} />
            <Box width="24px" height="24px" component="img" src={Insta} />
          </Box>
        </Box>
      </motion.div>

      <Box height="2px" width="100%" bgcolor="black" />

      {/* Danh mục thông tin */}
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={4}
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

      <Box height="1px" width="100%" bgcolor="black" />

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography
          fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.4rem" }}
          textAlign="center"
          mt={2}
          fontWeight="bold"
          color="green"
          pb={3}
        >
          Copyright © 2025. All Right Reserved.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;
