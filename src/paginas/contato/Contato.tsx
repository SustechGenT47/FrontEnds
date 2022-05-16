import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TokenState } from '../../Store/tokens/TokensReducer';
import './Contato.css';

function Contato() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    return (
        <>
            <Grid item xs = {12}>
                <Grid container justifyContent="center" alignItems="center">
                    <Box>
                    <Typography variant = 'h4' className='titulo'>Quem somos</Typography>
                        <Typography className = 'texto1'>Somos um ecommerce, idealizado em 2022 durante o curso de Java Full Stack Junior da Generation. Resultado da junção de 7 pessoas e todas elas tomadas pela motivação de iniciarmos a nossa tão sonhada trajetória na carreira de desenvolvimento de software. 
                        </Typography>

                        <Typography>
                            Baseando-se na ODS de numero 12 da ONU(Organização das Nações Unidas), nos unimos e pensamos em uma solução para a diminuição da Obsolescência Programada que seria uma integração entre pessoas e ONG's com o intuito de uma comercialização de produtos usados e/ou pracarizados. De forma com que seja possível a re-utilização dos produtos e que todos eles sejam aproveitados de forma 100% correta, seja para utilização pessoal ou até mesmo para desmontes ou casos de estudos em escolas.
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection= "column" justifyContent="center">
                        <Typography variant = 'h4' className='titulo'>Entre em contato</Typography>

                        <Typography className = 'contato' variant = 'h5' style={{"marginBottom":"10px"}}>E-mail: sustech03@gmail.com</Typography>
                        <a className = 'contatoLink contato' href="https://github.com/SustechGenT47" target="_blank">Github: github.com/SustechGenT47</a>
                        

                    </Box>

                </Grid>

                <Grid>


                </Grid>

            </Grid>
        </>

    );
}

export default Contato;

