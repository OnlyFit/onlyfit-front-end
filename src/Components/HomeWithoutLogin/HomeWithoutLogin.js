import React from 'react'
import LandingImage from './LandingImage';
import NavBarHome from './NavBarHome';
import { Box } from '@mui/system';
import AboutUs from './AboutUs';
import Classes from './Classes';

const HomeWithoutHome = props => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBarHome />
            <LandingImage />
            <AboutUs />
            <Classes />
        </Box>
    )
}

export default HomeWithoutHome;