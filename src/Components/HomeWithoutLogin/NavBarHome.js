import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import './styles.css'

const NavBarHome = props => {
    return (
            <AppBar position="fixed" style={{backgroundColor: '#ffffff', color: '#000000'}}>
                <Toolbar>
                    <Typography style={{display: 'inline'}} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Only{<p style={{color: '#3a86ff', display: 'inline'}}>Fit</p>}
                    </Typography>
                    <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        Inicio
                    </Typography>
                    <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        Acerca de Nosotros
                    </Typography>
                    <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        Clases
                    </Typography>
                    <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        Entrenadores
                    </Typography>
                    <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                        Contacto
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}

export default NavBarHome;