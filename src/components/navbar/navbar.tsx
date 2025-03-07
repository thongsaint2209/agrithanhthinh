import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Menu,
  Breadcrumbs,
  Popover,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { NavLink, useLocation, Link as DOMLink } from "react-router-dom";
import { entityColor, color } from "@/themes/color";

import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

export const Navbar = (props: any) => {
  const location = useLocation();

  const breadcrumbs = () => {
    const pathnames = [
      location.pathname?.split(`/`)?.filter((x: any) => x)?.[0] || "",
    ];

    return pathnames.map((path, index) => {
      const name = path
        .split(`-`)
        .map((word) => capitalizeFirstLetter(word))
        .join(" ");
      const routeTo: string = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast: boolean = index === pathnames.length - 1;
      return isLast ? (
        <Typography
          key={index}
          fontSize="24px"
          fontWeight="600"
          color={entityColor.text.primary}
        >
          {capitalizeFirstLetter(name)}
        </Typography>
      ) : (
        <NavLink
          key={index}
          to={routeTo}
          style={{
            fontSize: "24px",
          }}
          className="nav-link"
        >
          {capitalizeFirstLetter(name)}
        </NavLink>
      );
    });
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="#218D56"
      borderColor={color.grey[50]}
    >
      <Box sx={{ ml: 2 }}>
        <Typography width="100%">Logo</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mr: 2, ml: 2 }}
        >
          {" "}
          <Typography width="100%">hahaa</Typography>
        </Box>
      </Box>
    </Box>
  );
};
