import { AppBar, Toolbar, Typography, IconButton, MenuItem, Box, Menu, Button, Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { useHistory } from "react-router";

const DashboardNavBarCoach = () => {
    const [anchorEl, setAnchorEl] = useState();
    const isMenuOpen = Boolean(anchorEl);
    const menuId = "account-menu";
    const history = useHistory();

    const handleOpenMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        history.push("/")
        localStorage.setItem("userMail","");
    }

    const renderMenu = (
        <Menu anchorEl={anchorEl} anchorOrigin={{vertical: "top", horizontal: "right"}} keepMounted transformOrigin={{vertical: "top", horizontal: "right"}} open={isMenuOpen} onClose={handleCloseMenu} id={menuId}>
            <MenuItem onClick={(handleCloseMenu, handleLogout)}>Log out</MenuItem>
        </Menu>
    );

    const handleCreateRoutine = () => {
        history.push("/createroutine")
    }

    const handleCheckRoutines = () => {
        history.push("/check-routines")
    }

    const handleCheckClasses = () => {
        history.push("/check-classes")
    }

    const handleMainPage = () => {
        history.push("/coach-home")
    }

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <Typography style={{ display: 'inline' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Only{<p style={{ color: '#3a86ff', display: 'inline' }}>Fit</p>}
                </Typography>
                <Grid container sx={{ml: 3}}>
                    <Grid item>
                        <Button onClick={handleMainPage} variant="outlined" color="inherit" sx={{mr: 2}}>Inicio</Button>
                        <Button onClick={handleCheckClasses} variant="outlined" color="inherit" sx={{mr: 2}}>Mis Clases</Button>
                        <Button onClick={handleCheckRoutines} variant="outlined" color="inherit" sx={{mr: 2}}>Mis Rutinas</Button>
                        <Button  onClick={handleCreateRoutine} variant="outlined" color="inherit" sx={{mr: 2}}>Crear Rutinas</Button>
                    </Grid>
                </Grid>
                <Box>
                    <IconButton onClick={handleOpenMenu} aira-controls={menuId} aria-hashpopup="true" color="primary" size="large" edge="end">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            {renderMenu}
        </AppBar>
    );
}

export default DashboardNavBarCoach;