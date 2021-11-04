import React from 'react'
import { Box, Typography, Button  } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    }
}));

const LandingImage = props => {

    const classes = useStyles();

    return (
        <Box className={classes.hero}>
            <Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Disfruta, Protégete y Cuidate
                </Typography>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Una solución para que entrenes sin salir de casa.
                </Typography>
                <Button variant="contained">Empieza Ahora</Button>
            </Box>
        </Box>
    );
}

export default LandingImage;