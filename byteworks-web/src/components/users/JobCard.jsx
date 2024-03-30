import { Card, CardActionArea, CardContent, CardActions, Typography, Button } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import { useData } from "../../context/ByteContext";

const JobCard = ({ id }) => { 
    const data = useData();
    const jobData = data.find(item => item.id === id);
    const navigate = useNavigate();

    if (!jobData) {
        return <div>No job data found for id: {id}</div>;
    }

    const { title, subtitle, type, status, role, skills } = jobData;

    const handleClick = () => {
        navigate("/Apply");
    };

    return (
        <Card sx={{ maxWidth: 300, border: "2px solid black", borderRadius: "5px" }}>
            <CardActionArea>
                <CardContent sx={{ bgcolor: lightBlue[500] }}>
                    <Typography gutterBottom variant="h4" component="div">
                        {subtitle}
                    </Typography>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                        Tipo: {type.join(", ")}<br />
                        Estado: {status.join(", ")}<br />
                        Rol: {role.join(", ")}<br />
                        Skills: {skills.join(", ")}<br />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ bgcolor: lightBlue[200] }}>
                <Button
                    size="small"
                    variant="text"
                    sx={{
                        color: "white",
                        "&:focus": {
                            outline: "none",
                        },
                        "&:active": {
                            outline: "none",
                        },
                    }}
                    onClick={handleClick}
                >
                    Aplicar
                </Button>
            </CardActions>
        </Card>
    );
};

export default JobCard;


