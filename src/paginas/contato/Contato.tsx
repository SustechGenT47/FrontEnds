import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TokenState } from '../../Store/tokens/TokensReducer';
import './Contato.css';
import imagemCerta from '../../assets/ImagemCerta.gif';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import gustavo from "../../assets/Gustavo.jpeg";
import cleverson from "../../assets/Cleverson.jpeg";
import matheus from "../../assets/Matheus.jpeg";
import lucas from "../../assets/Lucas.jpeg";
import twany from "../../assets/Twany.jpeg";
import yasmin from "../../assets/Yasmin.jpeg";
import dany from "../../assets/Dany.jpeg";

function Contato() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    return (
        <>
            <Grid container direction='column' justifyContent="center" alignItems="center">
                <Grid xs={12}>
                    <Box justifyContent="center" alignItems="center">
                        <Typography variant='h4' className='titulo'>Quem somos</Typography>
                        <Typography paragraph className='texto1'>Somos um ecommerce, idealizado em 2022 durante o curso de Java Full Stack Junior da Generation. Resultado da junção de 7 pessoas e todas elas tomadas pela motivação de iniciarmos a nossa tão sonhada trajetória na carreira de desenvolvimento de software.
                        </Typography>

                        <Typography paragraph className='texto1'>
                            Baseando-se na ODS de numero 12 da ONU(Organização das Nações Unidas), nos unimos e pensamos em uma solução para a diminuição da Obsolescência Programada que seria uma integração entre pessoas e ONG's com o intuito de uma comercialização de produtos usados e/ou pracarizados. De forma com que seja possível a re-utilização dos produtos e que todos eles sejam aproveitados de forma 100% correta, seja para utilização pessoal ou até mesmo para desmontes ou casos de estudos em escolas.
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                        <Typography variant='h4' className='titulo'>Entre em contato:</Typography>

                        <Typography className='contato' variant='h5' style={{ "marginBottom": "10px" }}>E-mail: sustech03@gmail.com</Typography>

                    </Box>

                </Grid>
            </Grid>
            <Grid xs={12} container justifyContent="center" alignItems='flex-start' direction="row">
                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={gustavo} alt="" />
                            <Typography className = 'devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className = 'nomePessoal' variant="body2" color="textSecondary" component="p">
                                Gustavo Santos
                            </Typography>
                            <a target='_blank' className = 'linkContato' href="https://www.github.com/GuuSantos" > <Typography className = 'linkContato' >GitHub</Typography></a>
                            <a target='_blank' className = 'linkContato' href="https://www.linkedin.com/in/gustavossantos41/"><Typography className = 'linkContato'>Linkedin</Typography></a>

                        </CardContent>


                    </Card>
                </Box>


                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={matheus} alt="" />
                            <Typography className = 'devJava'>DEV JAVA JUNIOR</Typography>
                            <Typography className = 'nomePessoal' variant="body2" color="textSecondary" component="p">
                            Matheus Rodrigues
                            </Typography>
                            <a target='_blank' className = 'linkContato' href="https://www.linkedin.com/in/matheus-rodriguess/" > <Typography className = 'linkContato' >GitHub</Typography></a>
                            <a target='_blank' className = 'linkContato' href="https://github.com/MatheusRGPereira"><Typography className = 'linkContato' >Linkedin</Typography></a>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={lucas} alt="" />
                            <Typography className = 'devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className = 'nomePessoal' variant="body2" color="textSecondary" component="p">
                            Lucas Silva 
                            </Typography>
                            <a target='_blank' className = 'linkContato' href="https://github.com/Lukaspds91" > <Typography className = 'linkContato' >GitHub</Typography></a>
                            <a target='_blank' className = 'linkContato' href="https://www.linkedin.com/in/lucas-pereira-b88349187/"><Typography className = 'linkContato' >Linkedin</Typography></a>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={cleverson} alt="" />
                            <Typography className = 'devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className = 'nomePessoal' variant="body2" color="textSecondary" component="p">
                            Cleverson Mendes
                            </Typography>
                            <a target='_blank' className = 'linkContato' href="https://github.com/clev-coder" > <Typography className = 'linkContato' >GitHub</Typography></a>
                            <a target='_blank' className = 'linkContato' href="https://www.linkedin.com/in/cleverson-mendes-91028b189/"><Typography className = 'linkContato' >Linkedin</Typography></a>

                        </CardContent>


                    </Card>
                </Box>
            </Grid>
            <Grid xs={12} className='cardPai' container justifyContent="center" alignItems='flex-start' direction="row">
                <Box mx={3} my={5}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={dany} alt="" />
                            <Typography className = 'devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className = 'nomePessoal' variant="body2" color="textSecondary" component="p">
                                Danyelle Amarante
                            </Typography>
                            <a target='_blank'  className = 'linkContato' href="https://www.github.com/Danyelleac" > <Typography className = 'linkContato' >GitHub</Typography></a>
                            <a target='_blank' className = 'linkContato' href="https://www.linkedin.com/in/Danyelleac/"><Typography className = 'linkContato'>Linkedin</Typography></a>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3} my={5}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={twany} alt="" />
                            <Typography className = 'devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className = 'nomePessoal' variant="body2" color="textSecondary" component="p">
                                Twany Teixeira
                            </Typography>
                            <a target='_blank' className = 'linkContato' href="https://github.com/Twany93" > <Typography className = 'linkContato' >GitHub</Typography></a>
                            <a target='_blank' className = 'linkContato' href="https://www.linkedin.com/in/twany-teixeira-9a4873116/"><Typography className = 'linkContato'>Linkedin</Typography></a>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3} my={5}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={yasmin} alt="" />
                            <Typography className = 'devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className = 'nomePessoal' variant="body2" color="textSecondary" component="p">
                                Yasmin 
                            </Typography>
                            <a target='_blank' className = 'linkContato' href="https://www.github.com/GuuSantos" > <Typography className = 'linkContato' >GitHub</Typography></a>
                            <a target='_blank' className = 'linkContato' href="https://www.linkedin.com/in/gustavossantos41/"><Typography className = 'linkContato' >Linkedin</Typography></a>

                        </CardContent>


                    </Card>
                </Box>
            </Grid>

        </>

    );
}

export default Contato;

