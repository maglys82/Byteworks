import { Card, CardActionArea, CardContent, CardActions, Typography, Button } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';

const JobCard = ({}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Apply");
    };

    return (
        <Card sx={{ maxWidth: 300, border: "2px solid black", borderRadius: "5px" }}>
            <CardActionArea>
                <CardContent sx={{ bgcolor: lightBlue[500] }}>
                    <Typography variant="body1">{businessData?.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                        Tipo: {businessData?.type_of_service}<br />
                        Rol: {businessData?.role}<br />
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



