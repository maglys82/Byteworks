// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item><img src="/src/assets/img/img1.jpg" width="250px"  alt="" /></Item>
        </Grid>
        <Grid item xs={6}>
        <Item><img src="/src/assets/img/img2.jpg" width="250px"  alt="" /></Item>
        </Grid>
        <Grid item xs={6}>
        <Item><img src="/src/assets/img/img3.jpg" width="250px"  alt="" /></Item>
        </Grid>
        <Grid item xs={6}>
        <Item><img src="/src/assets/img/img4.jpg" width="250px"  alt="" /></Item>
        </Grid>
      </Grid>
      <Typography variant="h2" component="h4" textAlign="center">
        We are create solutions for you
      </Typography>
    </Box>
  );
}