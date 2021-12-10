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



function CoachClasses() {


    let data = 
    <Grid container spacing={3}>
        <Grid item xs={12} style={{paddingTop: "5%", marginLeft: "2%"}}>
            <Alert severity="info">
                <AlertTitle>INFORMACION</AlertTitle>
                No hay clases asignadas en este pefil — <strong>agrega una clase o comunicate con servicio tecnico</strong>
            </Alert>
        </Grid>
        
    </Grid>






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
                <Item  style= {{color: 'white' , backgroundColor : '#2699FB', alignContent: 'center', placeContent: 'space-around', fontSize: '30px', padding: '2%', paddingTop: "-20px"}} >Mis Clases</Item>
                <Grid style ={{width:"100%" , justifyContent: "space-around", marginLeft: "-1%"}} container spacing={3}>
                    {data}   
                </Grid>
                
                
            </Box>
        </div>
        );

}

export default CoachClasses;