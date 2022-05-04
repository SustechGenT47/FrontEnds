import React from 'react';
import {Typography,Grid, Button, Box } from '@material-ui/core';

import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "purple", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "purple", fontWeight: "bold" }}>Aqui na SUStech você tambem ajuda o meio ambiente</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Produtos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.ufes.br/sites/default/files/styles/imagem_conteudo/public/field/image/residuos.jpg?itok=1P9H1s0f" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;