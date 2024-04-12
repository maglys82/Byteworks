
import { Box } from "@mui/material";
import JobCard from "./JobCard";


const Jobs = ({data}) => {
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
      {data?.map((job, index) => (
        <JobCard
        key={`${job.id}-${index}`}
          id={job.id}
          subtitle={job.subtitle}
          title={job.title}
          type={job.type}
          status={job.status}
          role={job.role}
          skills={job.skills}
          actionLabel="Aplicar"
          onCardClick={() => console.log("Job:", job.title)}
        />
      ))}
    </Box>
  );
};

export default Jobs;

