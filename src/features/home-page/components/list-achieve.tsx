import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { CardAchieve } from "@/features/home-page/components/card-achieve/card-achieve";

export const ListAchieve = () => {
  // Mảng dữ liệu cho các CardAchieve
  const achievements = [
    {
      title: "Chất lượng",
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      title: "Tầm nhìn",
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      title: "Tiêu chuẩn",
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      title: "Vận chuyển",
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      title: "Công nghệ",
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      title: "Đối tác",
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
  ];

  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr 1fr", // Mobile: 1 card mỗi hàng
          sm: "1fr 1fr", // Tablet: 2 card mỗi hàng
          md: "1fr 1fr 1fr", // PC: 3 card mỗi hàng
        }}
        height={{ xs: "auto", sm: "1200px", md: "800px" }}
        bgcolor="black"
        overflow="hidden"
        sx={{
          pr: 2,
          pl: 2,
          rowGap: 4, // khoảng cách giữa các dòng
          columnGap: 0, // khoảng cách giữa các cột
          justifyItems: "center", // Căn giữa ngang (theo cột)
          alignItems: "center",
        }}
      >
        {/* Dùng map để render danh sách CardAchieve */}
        {achievements.map((item, index) => (
          <CardAchieve
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
    </Box>
  );
};
