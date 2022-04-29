import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "purple" }}>
                    <Box style={{ cursor: "pointer" ,color: 'white' }} >
                        <Typography variant="h5" color="inherit">
                            SUStech
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer",color: 'white' }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/contato' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" ,color: 'white' }}>
                                <Typography variant="h6" color="inherit">
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" ,color: 'white'  }}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;