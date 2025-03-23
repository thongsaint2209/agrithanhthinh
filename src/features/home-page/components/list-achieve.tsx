import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { CardAchieve } from "@/features/home-page/components/card-achieve/card-achieve";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import AgricultureRoundedIcon from "@mui/icons-material/AgricultureRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SafetyDividerRoundedIcon from "@mui/icons-material/SafetyDividerRounded";

export const ListAchieve = () => {
  // Mảng dữ liệu cho các CardAchieve
  const achievements = [
    {
      id: 1,
      title: "Chất lượng",
      color: "#11472B",
      icon: (
        <MilitaryTechRoundedIcon
          sx={{
            width: { xs: "28px", sm: "42px", md: "42px" },
            height: { xs: "28px", sm: "42px", md: "42px" },
          }}
        ></MilitaryTechRoundedIcon>
      ),
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      id: 2,
      title: "Tầm nhìn",
      color: "#C85817",
      icon: (
        <RemoveRedEyeRoundedIcon
          sx={{
            width: { xs: "24px", sm: "32px", md: "32px" },
            height: { xs: "24px", sm: "32px", md: "32px" },
          }}
        ></RemoveRedEyeRoundedIcon>
      ),
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      id: 3,
      title: "Tiêu chuẩn",
      color: "#AEAE24",
      icon: (
        <AssignmentRoundedIcon
          sx={{
            width: { xs: "24px", sm: "32px", md: "32px" },
            height: { xs: "24px", sm: "32px", md: "32px" },
          }}
        ></AssignmentRoundedIcon>
      ),
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      id: 4,
      title: "Vận chuyển",
      color: "#726AE2",
      icon: (
        <AgricultureRoundedIcon
          sx={{
            width: { xs: "24px", sm: "32px", md: "32px" },
            height: { xs: "24px", sm: "32px", md: "32px" },
          }}
        ></AgricultureRoundedIcon>
      ),
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      id: 5,
      title: "Công nghệ",
      color: "#F25858",
      icon: (
        <RocketLaunchRoundedIcon
          sx={{
            width: { xs: "24px", sm: "32px", md: "32px" },
            height: { xs: "24px", sm: "32px", md: "32px" },
          }}
        ></RocketLaunchRoundedIcon>
      ),
      description:
        "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    },
    {
      id: 6,
      title: "Đối tác",
      color: "#5133B3",
      icon: (
        <SafetyDividerRoundedIcon
          sx={{
            width: { xs: "24px", sm: "32px", md: "32px" },
            height: { xs: "24px", sm: "32px", md: "32px" },
          }}
        ></SafetyDividerRoundedIcon>
      ),
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
            icon={item.icon}
            color={item.color}
            description={item.description}
          />
        ))}
      </Box>
    </Box>
  );
};
