import { Link } from 'react-router-dom';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'


const Register = () => {

  return (
    <Container sx={{ mt: 10 }} component="main" maxWidth="xs">
      <Box sx={{ width: '100%' }}>
          <Typography variant="body1" color="text.primary" sx={{ textAlign: 'center' }}>
                        Welcome!<br/> Please tell us are you:
          </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', textAlign: 'center' }}>
          <Link to="/people" style={{ textDecoration: 'none' }}>
            <Tab label="people" />
          </Link>
          <Link to="/business" style={{ textDecoration: 'none' }}>
            <Tab label="business" />
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
