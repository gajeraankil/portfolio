import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

interface AGButtonProps {
  label: string;
  handleClick: () => void;
  endIcon: ReactNode;
}

const AGButton = ({ label, endIcon, handleClick }: AGButtonProps) => {
  return (
    <Button
      variant="outlined"
      onClick={handleClick}
      sx={{
        position: "relative",
        fontWeight: 600,
        lineHeight: 1.4,
        borderRadius: "35px",
        textTransform: "uppercase",
        color: "#ffffff",
        padding: "16px 70px 16px 35px",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 0,
          borderRadius: "35px",
          transition: "all 0.3s ease-out",
          backgroundColor: "#ffb400",
          zIndex: -1,
        },
        "&:hover": {
          color: "#ffffff",
          "&::after": {
            width: "100%",
          },
        },
      }}
    >
      {label}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          right: 0,
          top: 0,
          bottom: 0,
          width: "53px",
          borderRadius: "28px",
          backgroundColor: "primary.main",
        }}
      >
        {endIcon}
      </Box>
    </Button>
  );
};

export default AGButton;
