import React from 'react';
import './Header.css'
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const Header = () => {
    
    return (
        <Typography component="div">
            <Box textAlign="center" fontFamily="Monospace" fontSize={30}>
                <a href="/home" className="main-header">Friends Posts</a>
            </Box>
            <Box textAlign="center" fontFamily="Monospace" fontSize={20}>
                <a href="/home" className="NewsFeed">NewsFeed</a>
            </Box>
           
        </Typography>
    );
};

export default Header;