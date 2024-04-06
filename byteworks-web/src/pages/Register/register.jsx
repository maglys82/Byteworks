import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://byteworks.cl">
        BiteWorks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [profile, setProfile] = React.useState('');
  const [skills, setSkills] = React.useState([]);
  const [formData, setFormData] = React.useState({
      email: '',
      password:'',
      role:'',
      type_of_service: '',

  });


  
  const handleProfileChange = (event) => {
    setProfile(event.target.value);
    if(event.target.value === 'Talent') {
      // Si se selecciona Talent, aquí podrías cargar las habilidades de alguna fuente de datos.
      // Aquí simplemente he puesto algunas habilidades de ejemplo.
      setSkills(['JavaScript', 'React', 'Node.js', 'Python', 'Java']);
    } else {
      setSkills([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/register', { formData})
    .then(res => {
       if (res.data.success) {
        //  localStorage.setItem('token', res.data.token);
         history.push('/');
       } else {
         alert('Invalid email or password');
       }
     })
    .catch(err => {
       console.error(err);
       alert('An error occurred while register in');
     });
  };

// email, password, role, type_of_service
  const  handleChange = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   setFormData({  
      email: data.get('email'),
      password: data.get('password'),
      role: profile,
      type_of_service: data.get('lastName'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#257FEA' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  onSubmit={handleSubmit} onChange={handleChange} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="profile-label">Profile</InputLabel>
                  <Select
                    labelId="profile-label"
                    id="profile"
                    value={profile}
                    label="Profile"
                    onChange={handleProfileChange}
                  >
                    <MenuItem value="Company">Company</MenuItem>
                    <MenuItem value="Talent">Talent</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {profile === 'Talent' && (
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="skills-label">Skills</InputLabel>
                    <Select
                      labelId="skills-label"
                      id="skills"
                      multiple
                      value={skills}
                      onChange={(event) => setSkills(event.target.value)}
                      label="Skills"
                    >
                      {skills.map((skill) => (
                        <MenuItem key={skill} value={skill}>
                          {skill}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive information & promotions via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#257FEA' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
