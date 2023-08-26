import Skeleton from "@mui/material/Skeleton";

const MainSkeleton = () => {
  return (
    <Skeleton
      sx={{ bgcolor: "#1e1f25" }}
      style={{ borderRadius: "18px" }}
      animation="wave"
      height={130}
    />
  );
};

export default MainSkeleton;
