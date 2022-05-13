import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Typography,Grid,Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from "../../../Store/tokens/TokensReducer";
import './Footer.css'


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );  
    const dispatch = useDispatch();

    var footerComponent;

    if(token !== ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className = 'footerCima'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "#e7cd44", fontWeight:'bold' }}>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" >
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon className = 'icones' />
                    </a>
                    <a href="https://github.com/SustechGenT47" target="_blank">
                        <GitHubIcon className = 'icones' />
                    </a>
                </Box>
            </Box>
            <Box className = 'footerBaixo'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#e7cd44" , fontWeight:'bold'}} >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom style={{ color: "#e7cd44", fontWeight:'bold' }} align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
           {footerComponent}
        </>
    )
}

export default Footer;