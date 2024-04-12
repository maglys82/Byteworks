import { useForm } from "react-hook-form";
import JobAutocompleteField from "./JobAutocompleteField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { lightBlue } from "@mui/material/colors";
import WorkIcon from "@mui/icons-material/Work";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import Jobs from "./Jobs";

const Projects = () => {
  const { businessData, typeofserviceOptions, roleOptions } = useBusinessData();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      type: "",
      role: "",
    },
  });

  const onSubmit = (data) => {
    const filterData = (businessData, data) => {
      return businessData.filter(
        (item) =>
          item.role == data.role &&
          item.type == data.type
      );
    };
    const filteredData = filterData(businessData, data);

    if (filteredData.length > 0) {
      setBusinessData(() => [...filteredData]);
    }
    console.log(filteredData, "filtered data");
    console.log(businessData, "original data");
    console.log(data, "form data");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Profile");
  };

  return (
    <Box display="flex" flexDirection="row" p={2} gap={20}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          margin="auto"
          height={530}
          width={400}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          p={2}
          sx={{
            border: "2px solid gray",
            borderRadius: "10px",
            marginLeft: "20px",
            marginTop: "10px",
            bgcolor: "white",
          }}
        >
          <Tooltip title="Mi Perfil">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: lightBlue[500] }} onClick={handleClick}>
                {/* {userData?.name ? userData.name.charAt(0): ''} */}
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
            options={typeofserviceOptions}
            control={control}
            name="type"
            placeholder="Elige el tipo de proyecto"
          />

          <JobAutocompleteField
            options={roleOptions}
            control={control}
            name="role"
            placeholder="Elige el rol del proyecto"
          />
          <Button variant="contained" endIcon={<SearchIcon />} type="submit">
            Buscar
          </Button>
        </Box>
      </form>
      <Jobs data={businessData} />
    </Box>
  );
};

export default Projects;

