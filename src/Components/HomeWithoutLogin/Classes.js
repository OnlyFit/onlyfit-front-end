import React from 'react'
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button, ImageList, ImageListItem, Grid } from '@mui/material';
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

const Classes = props => {

    const classes = useStyles();

    return (
        <Box className={classes.hero}>
            <Grid container>
                <Grid item xs={12} className={classes.text} style={{ backgroundColor: "#343a40" }}>
                    <Box m={6} p={3}>
                        <Typography style={{ color: '#ffffff' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Clases
                        </Typography>
                        <Typography style={{ color: '#ffffff' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Todos los deportes estan para ti en esta plataforma, con los mejores entrenadores
                            mejoraras tu condición fisica sin salir de casa
                        </Typography>
                    </Box>
                </Grid>
                <Grid container className={classes.text}>
                    <Grid item xs={4}>
                        <Card style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cardio Fitness
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pesas
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Aerobicos
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Corporal
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Yoga
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image="https://images.pexels.com/photos/931321/pexels-photo-931321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Crossfit
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Classes