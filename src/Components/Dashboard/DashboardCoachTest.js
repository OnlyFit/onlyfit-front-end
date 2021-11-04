import React from 'react'
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/MenuItem';
import MyClass from '../Dashboard/MyClass';
import DashboardNavBarCoach from './DashboardNavBarCoach';


const DashboardCoachTest = props => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <DashboardNavBarCoach />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Item>x</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item  style= {{color: 'white' , backgroundColor : '#2699FB', alignContent: 'center', placeContent: 'space-around', fontSize: '30px', padding: '2%'}} >Mis Clases</Item>
                </Grid>
            </Grid>
            <MyClass/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Item  style= {{color: 'white' , backgroundColor : '#2699FB', alignContent: 'center', placeContent: 'space-around', fontSize: '30px', padding: '2%'}} >Mis Rutinas</Item>
                </Grid>
                <img src={'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop&auto=format'} style = {{padding: '2%'}}/>
                <img src={'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop&auto=format'} style = {{padding: '2%'}}/>
                <img src={'https://images.unsplash.com/photo-1571019613531-fbeaeb790845?w=400&h=400&fit=crop&auto=format'} style = {{padding: '2%'}}/>
                <img src={'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=400&fit=crop&auto=format'} style = {{padding: '2%'}}/>
            </Grid>
            
        </Box>
    );
}

export default DashboardCoachTest;