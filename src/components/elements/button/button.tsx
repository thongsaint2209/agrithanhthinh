import React from "react";
import { Button as MUIButton, CircularProgress } from "@mui/material";
import { entityColor } from "@/themes/color";
import { VariantType } from "@/types/theme-type";

export type ButtonPropsType = {
  id?: string;
  isLoading?: boolean;
  type?: Type;
  size?: SizeType;
  onClick?: (...args: any) => void;
  children?: React.ReactNode;
  isBoxShadow?: boolean;
  disabled?: boolean;
  variant?: VariantType;
  sx?: object;
  component?: string;
};

type Type = "submit" | "reset" | "button" | undefined;
type SizeType = "large" | "medium" | "small";

export const Button = ({
  id,
  isLoading,
  type,
  size = "medium",
  variant,
  onClick,
  disabled,
  component,
  sx,
  children,
}: ButtonPropsType) => {
  const sizeConfig = {
    large: {
      height: "80px",
      fontSize: "16px",
    },
    medium: {
      height: "56px",
      fontSize: "16px",
    },
    small: {
      height: "44px",
      fontSize: "14px",
    },
  };

  return (
    <MUIButton
      id={id}
      sx={{
        width: "100%",
        height: sizeConfig[size].height,
        fontSize: sizeConfig[size].fontSize,
        textTransform: "none",
        borderRadius: 3,
        outline: "none",
        "&:focus-visible": {
          outline: "none",
        },
        "&:focus": {
          outline: "none",
        },
        "&:active": {
          boxShadow: 4,
        },
        ...sx,
      }}
      disabled={isLoading ? true : disabled}
      onClick={onClick}
      disableFocusRipple
      type={type}
      variant={variant || "contained"}
    >
      {isLoading ? (
        <CircularProgress size={40} sx={{ color: "white", fontSize: "10px" }} />
      ) : (
        children
      )}
    </MUIButton>
  );
};
