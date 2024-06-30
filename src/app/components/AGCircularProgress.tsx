import Box from "@mui/material/Box";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["500", "600"],
  subsets: ["latin"],
});

interface AGCircularProgressProps {
  value: number;
  label: string;
}

const AGCircularProgress = ({ value, label }: AGCircularProgressProps) => {
  const CircularProgressWithLabel = (
    props: CircularProgressProps & { value: number } & { label: string }
  ) => {
    return (
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            marginBottom: "24px",
          }}
        >
          <CircularProgress variant="determinate" {...props} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="#ffffff"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                "@media (min-width: 576px)": {
                  fontSize: "24px",
                },
              }}
            >{`${Math.round(props.value)}%`}</Typography>
          </Box>
        </Box>
        <span
          className={openSans.className}
          style={{ fontSize: "16px", textAlign: "center" }}
        >
          {props.label}
        </span>
      </Box>
    );
  };

  return (
    <CircularProgressWithLabel
      value={value}
      label={label}
      sx={{
        width: "96px !important",
        height: "96px !important",
        "@media (min-width: 576px)": {
          width: "120px !important",
          height: "120px !important",
        },
        "& .MuiCircularProgress-circle": {
          borderColor: "#fff",
        },
      }}
    />
  );
};

export default AGCircularProgress;
