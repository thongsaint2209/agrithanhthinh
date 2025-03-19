import React from "react";
import { Box, Typography } from "@mui/material";
import teamBg4 from "@/assets/background/team-bg-4.svg";
import eror from "@/assets/background/error.svg";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";

export const NotFoundPublicPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box>
        <Box
          component="img"
          src={eror}
          sx={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            margin: "auto",
            display: "block",
          }}
          mb={3}
        />
        <Typography
          textAlign="center"
          variant="h3"
          sx={{ color: "primary.main", fontWeight: 700 }}
          mb={1}
        >
          Page Not Found. Error 404
        </Typography>
        <Typography textAlign="center" mb={4}>
          Chúng tôi đã tìm kiếm ở khắp mọi nơi nhưng không thể tìm thấy những gì
          bạn đang tìm kiếm. Hãy để tìm một nơi tốt hơn để bạn đi.
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{
              mb: 3,
              width: "100%",
              maxWidth: "200px",
              fontSize: "1rem",
              padding: "10px 20px",
              borderRadius: 16,
            }}
            onClick={() => navigate(`/trang-chu`)}
          >
            Vể trang chủ
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
