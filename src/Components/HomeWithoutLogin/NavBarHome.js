import { AppBar, Toolbar, Typography, IconButton, MenuItem, Box, Menu, Button, Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { useHistory } from "react-router";

const NavBarHome = () => {
    const history = useHistory();
    const menuId = "account-menu";

    const redirectLogin = () => {
        history.push("/login");
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <Typography style={{ display: 'inline' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Only{<p style={{ color: '#3a86ff', display: 'inline' }}>Fit</p>}
                </Typography>
                <Grid container sx={{ml: 3}}>
                    <Grid item>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}}>Inicio</Button>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}}>Acerca de Nosotros</Button>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}}>Clases</Button>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}}>Entrenadores</Button>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}}>Contacto</Button>
                    </Grid>
                </Grid>
                <Box>
                    <IconButton onClick={redirectLogin} aira-controls={menuId} aria-hashpopup="true" color="primary" size="large" edge="end">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBarHome;