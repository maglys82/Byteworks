
import Projects from "../../components/users/Projects";
import Box from "@mui/material/Box";

const Users = () => {
  return (
    <Box display="flex" flexDirection="row" p={2} gap={20}>
      <Projects />
    </Box>
  );
};

export default Users;
