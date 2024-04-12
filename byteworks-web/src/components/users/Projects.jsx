import { useForm } from "react-hook-form";
import JobAutocompleteField from "./jobAutocompleteField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { lightBlue } from "@mui/material/colors";
import WorkIcon from "@mui/icons-material/Work";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import Jobs from "./Jobs";
import { useEffect, useState } from "react";
import { roleOptions, skillsOptions, statusOption, typeOptions } from "./Users.label";
import UseFetchData from "../../hook/useFetchData";

const Projects = () => {
  const data = UseFetchData()
  const [projectsData, setProjectsData] = useState([]);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      type: "",
      status: "",
      role: "",
      skills: "",
    },
  });
  useEffect(() => {
    if (data) {
      setProjectsData(() => [...data]);
      console.log(data);
    }
  }, [data]);
  const onSubmit = (data) => {
    const filterData = (projectsData, data) => {
      return projectsData.filter(
        (item) =>
          item.role == data.role &&
          item.skills == data.skills &&
          item.status == data.status &&
          item.type == data.type
      );
    };
    const filteredData = filterData(projectsData, data);

    if (filteredData.length > 0) {
      setProjectsData(() => [...filteredData]);
    }
    console.log(filteredData, "filtered data");
    console.log(projectsData, "original data");
    console.log(data, "form data");
  };

  return (
    <Box display="flex" flexDirection="row" p={2} gap={20}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          margin="auto"
          width={400}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          p={2}
          sx={{
            border: "1px solid #8080803d",
            borderRadius: "10px",
            marginLeft: "20px",
            marginTop: "10px",
            bgcolor: "white",
          }}
        >
          <Tooltip title="Mi Perfil">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: lightBlue[500] }}>
                U
              </Avatar>
            </Stack>
          </Tooltip>
          <Container
            maxWidth="sm"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <WorkIcon sx={{ color: "black" }} />
          </Container>
          <JobAutocompleteField
            options={typeOptions}
            control={control}
            name="type"
            placeholder="Elige el tipo de proyect"
          />

          <JobAutocompleteField
            options={statusOption}
            control={control}
            name="status"
            placeholder="Elige el estatus del proyect"
          />

          <JobAutocompleteField
            options={roleOptions}
            control={control}
            name="role"
            placeholder="Elige el rol del proyect"
          />

          <JobAutocompleteField
            options={skillsOptions}
            control={control}
            name="skills"
            placeholder="Elige las habilidades del proyect"
          />
          <Button sx={{ width: '80%', mt: 3, mb: 4 }} variant="contained" endIcon={<SearchIcon />} type="submit">
          Search
          </Button>
        </Box>
      </form>
      <Jobs data={projectsData} />
    </Box>
  );
};

export default Projects;