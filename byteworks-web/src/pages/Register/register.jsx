
import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import People from "./People/People";
import Business from "./Business/Business";
import Container from "@mui/material/Container";


const Register = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (
    <Container  sx={{ mt: 10,  mb:15}} component="main" maxWidth="xs" >
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label="people" />
        <Tab label="business" />
      </Tabs>
    </Box>
    {currentTabIndex === 0 && <People/>}
    {currentTabIndex === 1 && <Business/> } 

    
  </Box>
  </Container>
  )
}

export default Register