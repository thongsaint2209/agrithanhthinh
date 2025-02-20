import React from "react";
import { Box, Typography } from "@mui/material";
import teamBg4 from "@/assets/background/team-bg-4.svg";
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
          width="800px"
          height="500px"
          component="img"
          src={teamBg4}
          mb={3}
        />
        <Typography
          textAlign="center"
          variant="h2"
          sx={{ color: "primary.main", fontWeight: 700 }}
          mb={1}
        >
          Page Not Found. Error 404
        </Typography>
        <Typography textAlign="center" mb={5}>
          We searched everywhere but couldn’t find what you’re looking for.
          Let’s find a better place for you to go.
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            size="medium"
            sx={{ width: 300 }}
            onClick={() => navigate(`/home`)}
          >
            Back to home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
