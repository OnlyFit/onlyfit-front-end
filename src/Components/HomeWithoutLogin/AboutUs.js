import React from 'react'
import { Box, Typography, Button, ImageList, ImageListItem, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
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
    },
    text: {
        textAlign: "center"
    }
}));

const AboutUs = props => {

    const itemData = [
        {
            img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Img1',
        },
        {
            img: 'https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Img2',
        },
        {
            img: 'https://images.pexels.com/photos/116078/pexels-photo-116078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Img3',
        },
        {
            img: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Img4',
        },
        {
            img: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Img1',
        },
        {
            img: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Img2',
        },
    ];

    const classes = useStyles();

    return (
        <Box className={classes.hero}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Box m={6} style={{ display: 'block' }}>
                        <Typography style={{ color: '#3a86ff' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Acerca de Nosotros
                        </Typography>
                        <Typography style={{ color: '#212529' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Bienvenido a OnlyFit
                        </Typography>
                        <Typography style={{ color: '#3a86ff' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Conoce las mejores rutinas sin tener que dejar tu hogar, a un solo clic de ti.
                        </Typography>
                        <Typography style={{ color: '#adb5bd' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Nuestra propuesta de valor es ofrecer una plataforma que se adapte
                            a las necesidades de nuestros clientes, ofreciendo planes de alimentación
                            acorde a sus necesidades, rutinas en vivo para mejor relación entrenador-cliente
                            entre otros.
                        </Typography>
                        <Button variant="contained">Saber más</Button>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <ImageList cols={2} rowHeight={164}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutUs;