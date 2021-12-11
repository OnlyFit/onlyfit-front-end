import { AppBar, Toolbar, Typography, IconButton, MenuItem, Box, Menu, Button, Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { useHistory } from "react-router";

const DashboardNavBar = () => {
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
    }

    const handleReturnHome = () => {
        history.push("/user/home")
    }

    const handleViewClasses = () => {
        history.push("/user/my-classes")
    }

    const renderMenu = (
        <Menu anchorEl={anchorEl} anchorOrigin={{vertical: "top", horizontal: "right"}} keepMounted transformOrigin={{vertical: "top", horizontal: "right"}} open={isMenuOpen} onClose={handleCloseMenu} id={menuId}>
            <MenuItem onClick={(handleCloseMenu, handleLogout)}>Log out</MenuItem>
        </Menu>
    );

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <Typography style={{ display: 'inline' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Only{<p style={{ color: '#3a86ff', display: 'inline' }}>Fit</p>}
                </Typography>
                <Grid container sx={{ml: 3}}>
                    <Grid item>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}} onClick={handleReturnHome}>Inicio</Button>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}} onClick={handleViewClasses}>Mis Clases</Button>
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

export default DashboardNavBar;