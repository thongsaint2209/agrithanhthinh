import React from "react";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import Orange_1 from "@/assets/background/Orange_1.png";
import { useInView } from "react-intersection-observer"; //
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { Box, Typography, TextField, CircularProgress } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import Logo from "@/assets/logo/thanh-thinh-agri.svg";
import Story from "@/assets/images/story-us.svg";
import contact from "@/assets/images/contact-us.svg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ENV_CONFIG } from "@/configs/url";
import GoogleMap, { defaultCenter } from "@/components/google-map/google-map";
import { Marker } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

export const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  const key_gmail = ENV_CONFIG.VITE_API_GMAIL;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true); // Bắt đầu trạng thái tải

    const formData = new FormData(event.target);
    formData.append("access_key", key_gmail);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Gửi thành công",
        text: "Chúng tôi sẽ liên hệ với bạn sớm nhất!!!",
        icon: "success",
      });
      setIsLoading(false);
    }
  };

  const getThreshold = () => {
    if (window.innerWidth < 700) return 0.1;
    if (window.innerWidth < 960) return 0.2;
    return 0.2;
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: getThreshold(),
  });

  const boxRef = useRef<HTMLDivElement | null>(null);
  const [boxHeight, setBoxHeight] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      const newHeight = boxRef.current.offsetHeight + 800;
      setBoxHeight(newHeight);
    }
  }, []);

  const newHeight = boxRef.current ? boxRef.current.offsetHeight + 660 : 1160;

  const [marker, setMarker] = useState({
    lat: 11.134440681007296,
    lng: 106.93900177245008,
  });

  const onMapClick = (e: any) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <Box ref={ref} display="flex" flexDirection="column">
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row", md: "row" }}
        height={{
          xs: `1500px`,
          sm: `1460px`,
          md: `1460px`,
        }} // PC: 940px, Mobile: auto
        bgcolor="black"
        overflow="hidden"
        p={4}
        px={{ xs: 2, sm: 8, md: 8 }}
        alignItems="flex-start" // Căn giữa các phần tử con theo chiều dọc
        justifyContent="flex-start"
        position="relative"
      >
        <Box
          ref={ref}
          display="flex"
          flexDirection="column"
          width="100%"
          height={{ xs: "80%", sm: "80%", md: "80%" }}
          position="relative"
          alignItems="center" // Căn giữa các phần tử con theo chiều dọc
          justifyContent="center"
        >
          <Box
            flex={{ xs: "none", sm: 1.4, md: 1 }}
            width="100%"
            height={{ xs: "100%", sm: "100%", md: "100%" }}
            bgcolor="#16412B"
            color="white"
            pt={{ xs: 4, sm: 4, md: 4 }}
            px={{ xs: 4, sm: 8, md: 8 }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
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
            {/* icon */}
            <Box
              component={motion.img}
              src={contact}
              alt="Logo"
              sx={{
                position: "absolute",
                width: { xs: "0px", sm: "340px", md: "440px" },
                height: { xs: "0px", sm: "340px", md: "440px" },
                top: "0px",
                right: "-50px",
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

            <Box
              ref={boxRef}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              pb={{ xs: 8, sm: 16, md: 6 }}
              zIndex={8}
              gap={{ xs: 2, sm: 2, md: 2 }}
            >
              {/* Tiêu đề*/}
              <Typography
                textAlign="center"
                alignSelf="center"
                fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.4rem" }}
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
              >
                Liên hệ với chúng tôi
              </Typography>
              <Box
                component="form"
                onSubmit={onSubmit}
                display="flex"
                flexDirection="column"
                gap={2}
                width={{ xs: "340px", sm: "400px", md: "400px" }}
                p={4}
                py={3}
                bgcolor="#fff"
                borderRadius={{ xs: 8, sm: 8, md: 8 }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignContent="flex-start"
                  component={motion.div} // Thêm animation trực tiếp
                  initial={{ opacity: 0, x: 0, y: 10 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 1.3,
                    delay: 0.5,
                    ease: [0.68, -0.4, 0.4, 1.6],
                  }}
                >
                  <Typography
                    textAlign="center"
                    alignSelf="flex-start"
                    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                    fontWeight="bold"
                    color="#16412B"
                    zIndex={1}
                    pb={{ xs: 1, sm: 1, md: 1 }}
                  >
                    Tên của bạn
                  </Typography>
                  <TextField
                    label="Tên của bạn"
                    type="text"
                    name="Họ và tên"
                    variant="outlined"
                    required
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: {
                          xs: 10, // Kích thước chữ cho màn hình nhỏ
                          sm: 12, // Kích thước chữ cho màn hình trung bình
                          md: 14, // Kích thước chữ cho màn hình lớn
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: {
                          xs: 12,
                          sm: 12,
                          md: 14,
                        },
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "12px", // Bán kính bo góc
                          borderWidth: "2px", // Độ dày đường viền
                          borderColor: "gray", // Màu sắc đường viền
                        },
                        "&:hover fieldset": {
                          borderColor: "#16412B", // Màu sắc đường viền khi hover
                        },
                      },
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignContent="flex-start"
                  width="100%"
                  component={motion.div} // Thêm animation trực tiếp
                  initial={{ opacity: 0, x: 0, y: 10 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 1.3,
                    delay: 0.5,
                    ease: [0.68, -0.4, 0.4, 1.6],
                  }}
                >
                  <Typography
                    textAlign="center"
                    alignSelf="flex-start"
                    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                    fontWeight="bold"
                    color="#16412B"
                    zIndex={1}
                    pb={{ xs: 1, sm: 1, md: 1 }}
                  >
                    Email
                  </Typography>
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    required
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: {
                          xs: 10, // Kích thước chữ cho màn hình nhỏ
                          sm: 12, // Kích thước chữ cho màn hình trung bình
                          md: 14, // Kích thước chữ cho màn hình lớn
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: {
                          xs: 12,
                          sm: 12,
                          md: 14,
                        },
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "12px", // Bán kính bo góc
                          borderWidth: "2px", // Độ dày đường viền
                          borderColor: "gray", // Màu sắc đường viền
                        },
                        "&:hover fieldset": {
                          borderColor: "#16412B", // Màu sắc đường viền khi hover
                        },
                      },
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignContent="flex-start"
                  component={motion.div} // Thêm animation trực tiếp
                  initial={{ opacity: 0, x: 0, y: 10 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 1.3,
                    delay: 0.5,
                    ease: [0.68, -0.4, 0.4, 1.6],
                  }}
                >
                  <Typography
                    textAlign="center"
                    alignSelf="flex-start"
                    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                    fontWeight="bold"
                    color="#16412B"
                    zIndex={1}
                    pb={{ xs: 1, sm: 1, md: 1 }}
                  >
                    Số điện thoại
                  </Typography>
                  <TextField
                    label="Số điện thoại"
                    type="number"
                    name="Số điện thoại"
                    variant="outlined"
                    required
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: {
                          xs: 10, // Kích thước chữ cho màn hình nhỏ
                          sm: 12, // Kích thước chữ cho màn hình trung bình
                          md: 14, // Kích thước chữ cho màn hình lớn
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: {
                          xs: 12,
                          sm: 12,
                          md: 14,
                        },
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "12px", // Bán kính bo góc
                          borderWidth: "2px", // Độ dày đường viền
                          borderColor: "gray", // Màu sắc đường viền
                        },
                        "&:hover fieldset": {
                          borderColor: "#16412B", // Màu sắc đường viền khi hover
                        },
                      },
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignContent="flex-start"
                  width="100%"
                  component={motion.div} // Thêm animation trực tiếp
                  initial={{ opacity: 0, x: 0, y: 10 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 1.3,
                    delay: 0.5,
                    ease: [0.68, -0.4, 0.4, 1.6],
                  }}
                >
                  <Typography
                    textAlign="center"
                    alignSelf="flex-start"
                    fontSize={{ xs: "1rem", sm: "1rem", md: "1rem" }}
                    fontWeight="bold"
                    color="#16412B"
                    zIndex={1}
                    pb={{ xs: 1, sm: 1, md: 1 }}
                  >
                    Lời nhắn của bạn
                  </Typography>
                  <TextField
                    label="Lời nhắn của bạn"
                    name="Lời nhắn"
                    type="text"
                    variant="outlined"
                    required
                    multiline
                    minRows={4} // Adjust the number of rows to set the height
                    inputProps={{
                      maxLength: 158, // Limits input to 100 characters
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: {
                          xs: 10, // Kích thước chữ cho màn hình nhỏ
                          sm: 12, // Kích thước chữ cho màn hình trung bình
                          md: 14, // Kích thước chữ cho màn hình lớn
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: {
                          xs: 12,
                          sm: 12,
                          md: 14,
                        },
                      },
                      "& .MuiOutlinedInput-root": {
                        alignItems: "flex-start", // Aligns text at the top
                        "& fieldset": {
                          borderRadius: "12px",
                          borderWidth: "2px",
                          borderColor: "gray",
                        },
                        "&:hover fieldset": {
                          borderColor: "#16412B",
                        },
                      },
                    }}
                  />
                </Box>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: 0, y: 10 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 1.3,
                    delay: 0.5,
                    ease: [0.68, -0.4, 0.4, 1.6],
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: { xs: "100%", sm: "100%", md: "100%" },
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                      padding: "10px 20px",
                      borderRadius: 4,
                    }}
                    disabled={isLoading ? true : false}
                  >
                    {isLoading ? (
                      <CircularProgress
                        size={20}
                        sx={{ color: "white", fontSize: "10px" }}
                      />
                    ) : (
                      "Gửi"
                    )}
                  </Button>
                </Box>
              </Box>
              {/* sdt*/}
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                gap={{ xs: 2, sm: 2, md: 2 }}
                mt={2}
                component={motion.div} // Thêm animation trực tiếp
                initial={{ opacity: 0, x: 0, y: 10 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 1.3,
                  delay: 0.5,
                  ease: [0.68, -0.4, 0.4, 1.6],
                }}
              >
                <Box
                  width={{ xs: "34px", sm: "42px", md: "42px" }}
                  height={{ xs: "34px", sm: "42px", md: "42px" }}
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
                {/* Contact */}
                <Typography
                  fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.1rem" }}
                  color="#ffff"
                >
                  +84 357523669
                </Typography>
              </Box>
              {/* sdt*/}
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                gap={{ xs: 2, sm: 2, md: 2 }}
                mt={2}
                component={motion.div} // Thêm animation trực tiếp
                initial={{ opacity: 0, x: 0, y: 10 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 1.3,
                  delay: 0.5,
                  ease: [0.68, -0.4, 0.4, 1.6],
                }}
              >
                <Box
                  width={{ xs: "34px", sm: "42px", md: "42px" }}
                  height={{ xs: "34px", sm: "42px", md: "42px" }}
                  borderRadius={{ xs: 16, sm: 16, md: 16 }}
                  bgcolor="#ffff"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <MailRoundedIcon
                    sx={{
                      width: { xs: "26px", sm: "26px", md: "26px" },
                      height: { xs: "26px", sm: "26px", md: "26px" },
                      color: "#11472B", // Màu của icon
                    }}
                  />
                </Box>
                {/* Contact */}
                <Typography
                  fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.1rem" }}
                  color="#ffff"
                >
                  thanhthinh723317@gmail.com
                </Typography>
              </Box>
              {/* sdt*/}
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                gap={{ xs: 2, sm: 2, md: 2 }}
                mt={2}
                component={motion.div} // Thêm animation trực tiếp
                initial={{ opacity: 0, x: 0, y: 10 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 1.3,
                  delay: 0.5,
                  ease: [0.68, -0.4, 0.4, 1.6],
                }}
              >
                <Box
                  width={{ xs: "34px", sm: "42px", md: "42px" }}
                  height={{ xs: "34px", sm: "42px", md: "42px" }}
                  borderRadius={{ xs: 16, sm: 16, md: 16 }}
                  bgcolor="#ffff"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <PlaceRoundedIcon
                    sx={{
                      width: { xs: "26px", sm: "26px", md: "26px" },
                      height: { xs: "26px", sm: "26px", md: "26px" },
                      color: "#11472B", // Màu của icon
                    }}
                  />
                </Box>
                <Typography
                  fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.1rem" }}
                  color="#ffff"
                >
                  Ấp Chánh Hưng, Xã Hiếu Liêm, Huyện
                  <br />
                  Bắc Tân Uyên, Tỉnh Bình Dương
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          flex={{ xs: "none", sm: 1.8, md: 2.6 }}
          sx={{
            position: "absolute",
            width: { xs: "66%", sm: "60%", md: "60%" },
            height: { xs: "30%", sm: "40%", md: "38%" },
            objectFit: "cover",
            left: { xs: "17%", sm: "20%", md: "20%" },
            top: { xs: "65%", sm: "68%", md: "70%" },
            transform: "translate(-50%, -50%)", // Căn giữa
            overflow: "hidden", // Đảm bảo các góc bo tròn hiển thị đúng
          }}
          zIndex={8}
          component={motion.div} // Thêm animation trực tiếp
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{
            duration: 1.3,
            delay: 0.5,
            ease: [0.68, -0.4, 0.4, 1.4],
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "400px",
              borderRadius: { xs: 8, sm: 10, md: 10 },
              overflow: "hidden",
            }}
          >
            <GoogleMap
              onMapClick={onMapClick}
              center={
                marker.lat
                  ? { lat: marker.lat, lng: marker.lng }
                  : defaultCenter
              }
              mapContainerStyle={{ height: "100%", width: "100%" }}
            >
              {marker.lat && (
                <Marker position={{ lat: marker.lat, lng: marker.lng }} />
              )}
            </GoogleMap>

            <Box
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                zIndex: 1,
              }}
            >
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${marker.lat},${marker.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  gap={{ xs: 1, sm: 0.5, md: 1 }}
                  bgcolor="#218D56"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={{ xs: 4, sm: 4, md: 4 }}
                  mt={3}
                  width={{ xs: "120px", sm: "140px", md: "140px" }}
                  height={{ xs: "48px", sm: "60px", md: "60px" }}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#3DFF80", // Màu nền khi hover
                    },
                  }}
                >
                  <PlaceRoundedIcon
                    sx={{
                      width: { xs: "24px", sm: "26px", md: "26px" },
                      height: { xs: "24px", sm: "26px", md: "26px" },
                      color: "#ffff", // Màu của icon
                    }}
                  />
                  <Typography
                    fontSize={{ xs: "0.75rem", sm: "0.8rem", md: "0.8rem" }}
                    color="#ffff"
                  >
                    Google Maps
                  </Typography>
                </Box>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
