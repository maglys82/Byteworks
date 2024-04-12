import { Card, CardActionArea, CardContent, CardActions, Typography, Button } from "@mui/material";
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
        <Card sx={{ maxWidth: 400, border: "1px solid #8080803d", borderRadius: "3px", p:3, m:2}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h4">
                        {subtitle}
                    </Typography>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="body2" color="text.secondary" component="p" sx={{ textAlign: 'left' }}>
                        Type: {type}<br />
                        Status: {status}<br />
                        Role: {role}<br />
                        Skills: {skills}<br />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ bgcolor: '#1976d2',  borderRadius: '4px', }}>
                <Button
                    size="small"
                    variant="text"
                    sx={{
                        
                        width: '100%',
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
                    Quick apply
                </Button>
            </CardActions>
        </Card>
    );
};

export default JobCard;


