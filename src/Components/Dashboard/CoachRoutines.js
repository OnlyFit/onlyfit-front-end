import React  from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/MenuItem';
import MyClass from '../Dashboard/MyClass';
import DashboardNavBarCoach from './DashboardNavBarCoach';
import axios from 'axios';
import { Button} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



function CoachRoutines() {
    const [routines, setRoutines] = useState('');

    const getRoutines = () => {
        
        var currentEmail = localStorage.getItem("userMail");
        axios.get(`https://onlyfit-backend-staging.herokuapp.com/v1/routine/email?emailAddress=${currentEmail}`)
        .then((res) => {
            //console.log(res.data)
            setRoutines(res.data)
            console.log(routines)
        }).catch((error) => {
            console.log(error)
        })
        
    };

    useEffect(() => {
        getRoutines();
    }, []);

    const deleteRoutines = (id) => {
        axios.delete(`https://onlyfit-backend-staging.herokuapp.com/v1/routine/${id}`)
        .then((res) => {
            alert("Rutina eliminada")
            window.location.reload(true);
        }).catch((error) => {
            console.log(error)
        })
        console.log(id)
        
    };


    let data = 
    <Grid container spacing={3}>
        <Grid item xs={12} style={{paddingTop: "5%", marginLeft: "2%"}}>
            <Alert severity="info">
                <AlertTitle>INFORMACION</AlertTitle>
                No hay rutinas asignadas en este pefil — <strong>agrega una rutina o comunicate con servicio tecnico</strong>
            </Alert>
        </Grid>
        
    </Grid>

if (routines.length > 0) {
    data = (
        routines.map((ele, index) => {
            var imageName ;
            if (ele.name === "cardio"){
                imageName = "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=248.88&h=140&fit=crop&auto=format"
            }else if(ele.name === "crossfit"){
                imageName = "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=248.88&h=140&fit=crop&auto=format"
            }else if(ele.name === "pesas"){
                imageName = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=248.88&h=140&fit=crop&auto=format"
            }else if(ele.name === "tenis"){
                imageName = "https://www.ecestaticos.com/imagestatic/clipping/0ce/50c/0ce50c2c82d99851bcd9e3b4d4ef0a9d/para-que-es-bueno-practicar-tenis-y-las-posibles-lesiones-que-debes-vigilar.jpg?w=248.88&h=140&fit=crop&auto=format"
            }else if(ele.name === "zumba"){
                imageName = "https://static2.abc.es/media/bienestar/2021/01/19/zumba-kUnF--620x349@abc.jpg?w=248.88&h=140&fit=crop&auto=format"
            }
            return(
                <Grid item s={12} style={{paddingTop: '40px'}}>
                    <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image= {imageName}
                            alt = {ele.id}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                            {ele.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {ele.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="medium">Abrir</Button>
                            <Button onClick={() => deleteRoutines(ele.id)} size="small">Eliminar</Button>
                        </CardActions>
                    </Card>
            </Grid>
            )
        })
    )
}




    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <DashboardNavBarCoach />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Item>x</Item>
                    </Grid>
                    <Grid item xs={12}>
                        </Grid>
                </Grid>
                <Item  style= {{color: 'white' , backgroundColor : '#2699FB', alignContent: 'center', placeContent: 'space-around', fontSize: '30px', padding: '2%', paddingTop: "-20px"}} >Mis Rutinas</Item>
                <Grid style ={{width:"100%" , justifyContent: "space-around", marginLeft: "-1%"}} container spacing={3}>
                    {data}   
                </Grid>
                
                
            </Box>
        </div>
        );

}

export default CoachRoutines;