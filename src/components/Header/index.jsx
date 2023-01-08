import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Box } from '@mui/system';
import { pages } from './API';
import './style.css';

export const Header = ({changePageComponent = () => {}}) => {
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
                                onClick={() => {
                                    changePageComponent(page.toLowerCase())
                                }}
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
