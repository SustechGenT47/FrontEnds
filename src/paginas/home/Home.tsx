import React, { useEffect } from 'react';
import {Typography,Grid, Button, Box } from '@material-ui/core';

import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../Store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import CarouselComponent from '../../components/carousel/CarouselComponent';

function Home(){

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                    <CarouselComponent />
                    </Box>

                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.ufes.br/sites/default/files/styles/imagem_conteudo/public/field/image/residuos.jpg?itok=1P9H1s0f" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "blue" }}>
                </Grid>
            </Grid>
        </>
    );
}


export default Home;