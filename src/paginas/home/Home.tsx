import React, { useEffect } from 'react';
import {Typography,Grid, Button, Box } from '@material-ui/core';

import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../Store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import TabProduto from '../../components/produtos/tabProduto/TabProduto';

function Home(){

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
             <CarouselComponent />
              
             <Grid xs={12}> 
             <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            
                        </Box>
                        <Link to="/listarProdutos" className='text-decorator-none'>
                        <Button variant="outlined" className='botaoHome'>Ver Produtos</Button>
                        </Link>
                    </Box>
             </Grid>
              

                <Grid xs={12}>
                    <Box display = 'flex'justifyContent='center' alignItems='center'>
                      <TabProduto />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}


export default Home;