import { useState } from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { color } from "@/themes/color";
import Logo from "@/assets/logo/thanh-thinh-agri.svg";
import { motion } from "framer-motion"; // Import Framer Motion
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

export const NAVBAR_ROUTES = [
  { id: "home", name: "Trang chủ", link: "/trang-chu" },
  { id: "Intro", name: "Giới thiệu", link: "/gioi-thieu" },
  { id: "product", name: "Sản phẩm", link: "/san-pham" },
  { id: "procedure", name: "Quy trình", link: "/quy-trinh" },
  { id: "contact-us", name: "Liên hệ", link: "/lien-lac" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (link: any) => {
    navigate(link); // Chuyển trang
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#218D56"
      px={{ xs: 2, sm: 2, md: 4 }}
    >
      {/* Menu + Logo */}
      <Box
        display="flex"
        alignItems="center"
        gap={{ xs: 1, sm: 1, md: 1 }}
        sx={{ cursor: "pointer" }}
      >
        {/* Nút mở sidebar chỉ hiển thị trên mobile */}
        <IconButton
          sx={{ display: { xs: "auto", sm: "none" }, color: "#ffff" }}
          onClick={(e) => {
            e.stopPropagation(); // Ngăn chặn việc mở sidebar khi click vào icon
            setOpen(true);
          }}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Box
          onClick={() => (window.location.href = "/trang-chu")}
          sx={{ cursor: "pointer" }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              width={{ xs: "35px", sm: "45px", md: "45px" }}
              height={{ xs: "35px", sm: "45px", md: "45px" }}
              component="img"
              src={Logo}
              alt="Logo"
            />
            <Typography
              fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
              color="#ffff"
            >
              Thuong Thinh Agri
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Sidebar */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box width="150px" p={2}>
          {NAVBAR_ROUTES.map((route) => (
            <NavLink
              key={route.id}
              to={route.link}
              className="nav-link"
              onClick={() => {
                setOpen(false); // Đóng Drawer
                navigate(route.link); // Chuyển sang trang mới
                window.scrollTo(0, 0);
              }}
            >
              <Typography
                component={motion.span}
                fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                color="black"
                sx={{
                  display: "block",
                  padding: "14px 14px",
                  borderRadius: "8px",
                  transition: "background 0.3s ease-out",
                  "&:hover": {
                    backgroundColor: "#64AF89",
                    color: "white",
                  },
                }}
              >
                {route.name}
              </Typography>
            </NavLink>
          ))}
        </Box>
      </Drawer>
      {/* Navbar Desktop */}
      <Box display={{ xs: "none", sm: "flex" }} gap={2}>
        {NAVBAR_ROUTES.map((route) => (
          <Box
            key={route.id}
            component={NavLink}
            to={route.link}
            onClick={() => handleNavigate(route.link)}
            sx={{ textDecoration: "none" }} // Xóa gạch chân mặc định của NavLink
          >
            <Typography
              component={motion.span}
              fontSize="1rem"
              color="white"
              data-active={location.pathname === route.link}
              sx={{
                position: "relative",
                padding: "15px 16px",
                borderRadius: "8px",
                display: "inline-block",
                transition: "color 0.3s ease-out",
                zIndex: 1,

                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#64AF89",
                  borderRadius: "6px",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                  opacity: 0,
                  transition: "opacity 0.3s ease-out",
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: "0px",
                  width: 0,
                  height: "2.6px",
                  borderRadius: "6px",
                  backgroundColor: "#DFEE45",
                  transition: "width 0.3s ease-out, left 0.3s ease-out",
                  zIndex: 2,
                },

                "&:hover::before, &[data-active='true']::before": {
                  opacity: 1,
                },

                "&:hover::after, &[data-active='true']::after": {
                  width: "100%",
                  left: 0,
                },
              }}
            >
              {route.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <a
        href="https://zalo.me/84357523669"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={{ xs: 1, sm: 0.5, md: 1 }}
          sx={{ cursor: "pointer" }}
        >
          {/* Contact */}
          <Typography
            fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
            color="#ffff"
          >
            +84 357523669
          </Typography>
          <Box
            width={{ xs: "32px", sm: "32px", md: "36px" }}
            height={{ xs: "32px", sm: "32px", md: "36px" }}
            borderRadius={{ xs: 16, sm: 16, md: 16 }}
            bgcolor="#ffff"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <PhoneRoundedIcon
              sx={{
                width: { xs: "26px", sm: "26px", md: "26px" },
                height: { xs: "26px", sm: "26px", md: "26px" },
                color: "#11472B", // Màu của icon
              }}
            />
          </Box>
        </Box>
      </a>
    </Box>
  );
};
