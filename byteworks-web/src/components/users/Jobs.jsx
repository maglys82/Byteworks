import { Box } from "@mui/material";
import JobCard from "./JobCard";

const Jobs = ({ data }) => {
  if (!data) {
    return <Box margin={"auto"}
    height={300}
    width={1000}
    display="flex"
    flexDirection={"row"}
    alignItems="center"
    gap={1}
    p={2}
    sx={{ marginTop: "5px" }}>No existen proyectos disponibles!</Box>;
  }

  return (
    <Box
      margin={"auto"}
      height={300}
      width={1000}
      display="flex"
      flexDirection={"row"}
      alignItems="center"
      gap={1}
      p={2}
      sx={{ marginTop: "5px" }}
    >
      {data.map((job) => (
        <JobCard
          key={job.id}
          businessId={job.businessId}
        />
      ))}
    </Box>
  );
};

export default Jobs;


