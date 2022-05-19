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
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contato() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    return (
        <>
            <Grid container direction='row' justifyContent="center" alignItems="center">
                <Grid xs={12}>

                
                <Box display="flex" justifyContent="center" alignItems="center" height="20vh">
                        <Box className="cardSobreNosTitulo" height="15vh" borderRadius={5} 
                          marginTop={0} marginBottom={0} display="flex" justifyContent="center" alignItems="center">
                        
                          <Typography variant='h4' className='tituloSobre'>Quem somos</Typography>
                      </Box>
                    </Box>       
                <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                        <Box className="cardSobreNos" width="100%" height="90%" borderRadius={5} 
                          marginTop={0} marginBottom={5} display="flex" justifyContent="center" alignItems="center">
                          <Typography paragraph className='texto1'>
                              Baseando-se na ODS de numero 12 da ONU(Organização das Nações Unidas), nos unimos e pensamos em uma solução
                               para a diminuição da Obsolescência Programada que seria uma integração entre pessoas e ONG's com o intuito
                                de uma comercialização de produtos usados e/ou pracarizados. De forma com que seja possível a re-utilização
                                 dos produtos e que todos eles sejam aproveitados de forma 100% correta, seja para utilização pessoal ou 
                                 até mesmo para desmontes ou casos de estudos em escolas.
                          </Typography>
                      </Box>
                    </Box>
                </Grid>
            </Grid>

            
            <Grid xs={12} container justifyContent="center" alignItems='flex-start' direction="row">
                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={gustavo} alt="" />
                            <Typography className='devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className='nomePessoal' variant="body2" color="textSecondary" component="p">
                                Gustavo Santos
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" >
                                <a href="https://www.linkedin.com/in/gustavossantos41/" target="_blank">
                                    <LinkedinIcon className='linkedin' />
                                </a>
                                <a href="https://github.com/GuuSantos" target="_blank">
                                    <GitHubIcon className='github' />
                                </a>
                            </Box>
                        </CardContent>


                    </Card>
                </Box>


                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={matheus} alt="" />
                            <Typography className='devJava'>DEV JAVA JUNIOR</Typography>
                            <Typography className='nomePessoal' variant="body2" color="textSecondary" component="p">
                                Matheus Rodrigues
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" >
                                <a href="https://www.linkedin.com/in/matheus-rodriguess/" target="_blank">
                                    <LinkedinIcon className='linkedin' />
                                </a>
                                <a href="https://github.com/MatheusRGPereira" target="_blank">
                                    <GitHubIcon className='github' />
                                </a>
                            </Box>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={lucas} alt="" />
                            <Typography className='devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className='nomePessoal' variant="body2" color="textSecondary" component="p">
                                Lucas Silva
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" >
                                <a href="https://www.linkedin.com/in/lucas-pereira-b88349187/" target="_blank">
                                    <LinkedinIcon className='linkedin' />
                                </a>
                                <a href="https://github.com/Lukaspds91" target="_blank">
                                    <GitHubIcon className='github' />
                                </a>
                            </Box>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={cleverson} alt="" />
                            <Typography className='devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className='nomePessoal' variant="body2" color="textSecondary" component="p">
                                Cleverson Mendes
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" >
                                <a href="https://www.linkedin.com/in/cleverson-mendes-91028b189/" target="_blank">
                                    <LinkedinIcon className='linkedin' />
                                </a>
                                <a href="https://github.com/clev-coder" target="_blank">
                                    <GitHubIcon className='github' />
                                </a>
                            </Box>

                        </CardContent>


                    </Card>
                </Box>
            </Grid>
            <Grid xs={12} className='cardPai' container justifyContent="center" alignItems='flex-start' direction="row">
                <Box mx={3} my={5}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={dany} alt="" />
                            <Typography className='devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className='nomePessoal' variant="body2" color="textSecondary" component="p">
                                Danyelle Cândido
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" >
                                <a href="https://www.linkedin.com/in/gustavossantos41/" target="_blank">
                                    <LinkedinIcon className='linkedin' />
                                </a>
                                <a href="https://github.com/GuuSantos" target="_blank">
                                    <GitHubIcon className='github' />
                                </a>
                            </Box>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3} my={5}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={twany} alt="" />
                            <Typography className='devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className='nomePessoal' variant="body2" color="textSecondary" component="p">
                                Twany Teixeira
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" >
                                <a href="https://www.linkedin.com/in/twany-teixeira-9a4873116/" target="_blank">
                                    <LinkedinIcon className='linkedin' />
                                </a>
                                <a href="https://github.com/Twany93" target="_blank">
                                    <GitHubIcon className='github' />
                                </a>
                            </Box>

                        </CardContent>


                    </Card>
                </Box>

                <Box mx={3} my={5}>
                    <Card className='cardSobre'>
                        <CardContent>
                            <img className='imagemCardPessoal' src={yasmin} alt="" />
                            <Typography className='devJava'>DEV JAVA JUNIOR</Typography>

                            <Typography className='nomePessoal' variant="body2" color="textSecondary" component="p">
                                Yasmin Dibas
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" >
                                <a href="https://www.linkedin.com/in/gustavossantos41/" target="_blank">
                                    <LinkedinIcon className='linkedin' />
                                </a>
                                <a href="https://github.com/GuuSantos" target="_blank">
                                    <GitHubIcon className='github' />
                                </a>
                            </Box>

                        </CardContent>


                    </Card>
                </Box>

            </Grid>
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                <Typography variant='h4' className='titulo'>Entre em contato:</Typography>

                <Typography className='contato' variant='h5' style={{ "marginBottom": "10px" }}>E-mail: sustech03@gmail.com</Typography>

            </Box>
        </>

    );
}

export default Contato;
