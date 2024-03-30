import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
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
import { useData } from "../../context/ByteContext";

const Projects = () => {
  const originalCardData = useData();
  const [filters, setFilters] = useState({
    type: [],
    status: [],
    role: [],
    skills: [],
  });

  const typeOptions = ["Freelance", "Plazo fijo"];
  const statusOptions = ["En Progreso", "Finalizado"];
  const roleOptions = ["Frontend", "Backend", "Fullstack"];
  const skillsOptions = ["Python", "Javascript", "Vue", "Typescript"];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Profile");
  };

  const handleFilter = () => {
    const { type, status, role, skills } = filters;
    const filteredCards = originalCardData.filter((card) => {
      const { projectType, projectStatus, projectRole, projectSkills } = card;
      const typeMatch = type.length === 0 || type.includes(projectType);
      const statusMatch = status.length === 0 || status.includes(projectStatus);
      const roleMatch = role.length === 0 || role.includes(projectRole);
      const skillsMatch =
        skills.length === 0 ||
        skills.some((skill) =>
          card.projectSkills.split(",").includes(skill)
        );
  
      return typeMatch && statusMatch && roleMatch && skillsMatch;
    });
  
    setFilters({
      type,
      status,
      role,
      skills,
      filteredCards,
    });
  };

  return (
    <>
      <Box
        margin="auto"
        height={530}
        width={400}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '2px solid gray', borderRadius: '10px', marginLeft: '20px', marginTop: '10px', bgcolor: 'white' }}
      >
      <Tooltip title="Mi Perfil">
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: lightBlue[500] }} onClick={handleClick} >U</Avatar>
          </Stack>
      </Tooltip>
        <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center",}}>
          <WorkIcon sx={{ color: "black" }} />
        </Container>
        <Autocomplete
          value={filters.type}
          onChange={(event, newValue) => setFilters({ ...filters, type: newValue })}
          inputValue={filters.typeInput}
          onInputChange={(event, newInputValue) => setFilters({ ...filters, typeInput: newInputValue })}
          id="controllable-type"
          options={typeOptions}
          getOptionLabel={(option) => (typeof option === 'string' ? option : '')}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de Proyecto" placeholder="Elige el tipo de proyecto" />
          )}
        />
        <Autocomplete
          value={filters.status}
          onChange={(event, newValue) =>
            setFilters({ ...filters, status: newValue })
          }
          id="controllable-status"
          options={statusOptions}
          getOptionLabel={(option) => (typeof option === "string" ? option : "")}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Estatus"
              placeholder="Elige el estatus del proyecto"
            />
          )}
        />
        <Autocomplete
          value={filters.role}
          onChange={(event, newValue) =>
            setFilters({ ...filters, role: newValue })
          }
          id="controllable-role"
          options={roleOptions}
          getOptionLabel={(option) => (typeof option === "string" ? option : "")}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Rol"
              placeholder="Elige el rol en el proyecto"
            />
          )}
        />
        <Autocomplete
          value={filters.skills}
          onChange={(event, newValue) =>
            setFilters({ ...filters, skills: newValue })
          }
          id="controllable-skills"
          options={skillsOptions}
          getOptionLabel={(option) => (typeof option === "string" ? option : "")}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Habilidades"
              placeholder="Elige las habilidades necesarias"
            />
          )}
        />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            endIcon={<SearchIcon />}
            onClick={handleFilter}
          >
            Buscar
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Projects;

