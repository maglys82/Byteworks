import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Container from "@mui/material/Container";

const Profile = ({userId}) => {
    const [tabValue, setTabValue] = useState("0");
    const userData = useUserData(userId);
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleLogOut = () => {
        console.log("Logged out");
        navigate('/');
    };

    const actionLabel = "Log out";

    return (
        <Card sx={{
            width: 500,
            height: 400,
            margin: "auto",
            p: 3,
        }}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Avatar sx={{ bgcolor: lightBlue[500] }}>{/* {userData?.name ? userData.name.charAt(0): ''} */}</Avatar>
            </Stack>
            <CardContent>
                <Typography variant="h5" component="div">
                    {userData?.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {userData?.role}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {userData?.skills}
                </Typography>
                <Typography variant="body2">
                    {userData?.status}
                </Typography>
            </CardContent>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 2,
                bgcolor: lightBlue[200],
                border: "2px solid #1976D2",
            }}>
                <TabContext value={tabValue}>
                    <TabList onChange={handleTabChange}>
                        <Tab label="Mis Proyectos" value="0" />
                        <Tab label="Proyectos aplicados" value="1" />
                    </TabList>
                    <TabPanel value="0">Mis proyectos</TabPanel>
                    <TabPanel value="1">Proyectos aplicados</TabPanel>
                </TabContext>
            </Container>
            <CardActions>
                <Button
                    size="small"
                    variant="text"
                    sx={{
                        color: "#1976D2",
                        "&:focus": {
                            outline: "none",
                        },
                        "&:active": {
                            outline: "none",
                        },
                    }}
                    onClick={handleLogOut}
                >
                    {actionLabel}
                </Button>
            </CardActions>
        </Card>
    );
}

export default Profile;



