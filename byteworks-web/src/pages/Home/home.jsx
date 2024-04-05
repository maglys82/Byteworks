import React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography, Button,  Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: (
      <Box
        sx={{
          p: 3,
          minWidth: { md: 850 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 0.5,
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: "0.875rem", color: "text.secondary" }}
        >
          <Typography variant="h2" component="h4" textAlign="center">
          We help boost your business ideas
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{
            color: "primary.black",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          
          Through design, innovation, technology and a multidisciplinary team
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
        >
          Starts now
        </Button>
      </Box>
    ),
    imgPath: "/src/assets/img/img1.jpg",
  },
  {
    label: (
      <Box
        sx={{
          p: 3,
          minWidth: { md: 850 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 0.5,
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: "0.875rem", color: "text.secondary" }}
        >
          <Typography variant="h2" component="h4" textAlign="center">
          Technical excellence
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{
            color: "primary.black",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          More than 1,000,000 people use ByteWorks developments
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
        >
          Starts now
        </Button>
      </Box>
    ),
    imgPath: "/src/assets/img/img2.jpg",
  },
  {
    label: (
      <Box
        sx={{
          p: 3,
          minWidth: { md: 850 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 0.5,
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: "0.875rem", color: "text.secondary" }}
        >
          <Typography variant="h2" component="h4" textAlign="center">
            We are create solutions for you
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{
            color: "primary.black",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
         At Bytework we are specialists in creating successful digital experiences for your audience.
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
        >
          Starts now
        </Button>
      </Box>
    ),
    imgPath: "/src/assets/img/img3.jpg",
  },
  {
    label: (
      <Box
        sx={{
          p: 3,
          minWidth: { md: 850 },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 0.5,
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: "0.875rem", color: "text.secondary" }}
        >
          <Typography variant="h2" component="h4" textAlign="center">
          The best technological experience
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{
            color: "primary.black",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
         Technology, innovation, and the best solutions for the digitalization of your business
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "257FEA" }}
        >
          Starts now
        </Button>
      </Box>
    ),
    imgPath: "/src/assets/img/img4.jpg",
  },
];

const home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: 'center',
          alignItems: "center",
          mt: 1,
          p: 22,
          bgcolor: "background.default",
          borderColor: "divider",
          overflow: "clip",
        }}
      >
     

        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 320,
                    display: "block",
                    maxWidth: 600,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
       <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        ><Typography>{images[activeStep].label}</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default home;
