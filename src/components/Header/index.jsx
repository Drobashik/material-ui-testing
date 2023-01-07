import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import React from 'react';
import './style.css';
import { Box } from '@mui/system';
import { pages } from './API';

export const Header = () => {
    return (
        <>
            <AppBar position='sticky' sx={{padding: '0 100px'}}>
                <Toolbar >
                    <BeenhereIcon />
                    <Typography
                        variant='h6'
                        sx={{
                            textTransform: 'uppercase',
                            fontWeigth: '700',
                            fontFamily: 'monospace',
                            marginLeft: '10px'
                        }}
                    >
                        Logo
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        margin: '2px 0 0 20px',
                        gap: '10px'
                    }}>
                        {pages.map(page => (
                            <Button
                                key={page}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
