import React, { useState } from "react";
import Projects from "../../components/users/Projects";
import Jobs from "../../components/users/Jobs";
import { useData } from "../../context/ByteContext";
import Box from "@mui/material/Box";

const Users = () => {
  const originalCardData = useData();
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    role: "",
    skills: [],
  });

  const handleFilter = () => {
    const { type, status, role, skills } = filters;
    const filteredData = originalCardData.filter((card) => {
      const { projectType, projectStatus, projectRole, projectSkills } = card;
      const typeMatch = type.length === 0 || type.includes(projectType);
      const statusMatch = status.length === 0 || status.includes(projectStatus);
      const roleMatch = role.length === 0 || role.includes(projectRole);
      const skillsMatch = skills.length === 0 || skills.includes(projectSkills);

      return typeMatch && statusMatch && roleMatch && skillsMatch;
    });
    return filteredData;
  };

  const filteredData = handleFilter();

  return (
    <Box
      display="flex"
      flexDirection="row"
      p={2}
      gap={20}
    >
      <Projects
        originalCardData={originalCardData}
        filters={filters}
        handleFilter={handleFilter}
        filteredData={filteredData}
      />
      <Jobs
        originalCardData={filteredData}
        filters={filters}
        handleFilter={handleFilter}
      />
    </Box>
  );
};

export default Users;


