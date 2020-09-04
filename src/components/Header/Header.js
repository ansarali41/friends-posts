import React from 'react';
import './Header.css'
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const Header = () => {
    return (
        <Typography component="div">
            <Box textAlign="center" fontFamily="Monospace" fontSize={20}>
                <h1 className="main-header">Friends Posts</h1>
            </Box>
        </Typography>
    );
};

export default Header;