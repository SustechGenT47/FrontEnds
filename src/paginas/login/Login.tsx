import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import UserLogin from '../../models/UserLogin';


import './Login.css';
import { login } from '../../services/Service';
import { addToken } from '../../Store/tokens/Actions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import imagemLogin from '../../assets/imagemLogin.gif';


function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            tipo: "",
            token: ""
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
    }

        return (
            <Grid xs={12} container direction='row' justifyContent='center' alignItems='center' id="darkBackground">
                        <Grid item xs={6} alignItems='center' className="formBackground" justifyContent = 'center'>
                                <form className="formLogin" onSubmit={logar}>
                                    <h3 className='colorText'>Olá! Seja bem vindo.</h3>
                                        <h5 className='colorText'>Faça o seu login</h5>
                                    <p></p>
                                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' variant='outlined' name='usuario' margin='normal' className="username" placeholder="Usuário" fullWidth />
                                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' variant='outlined' name='senha' margin='normal' className="password" type='password' placeholder="Senha" fullWidth />
                            
                                    <Button type='submit' variant='contained' className="submit botaoEntrar botaoEntrar:hover">Entrar</Button>
                                    <p className="forgot">
                                        <Link to='/cadastro' className='text-decorator-none'>
                                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta? Cadastre-se</Typography>
                                        </Link>
                                    </p>
                                  
                                </form>
                            <Box my = {12.3} >
                                <img src={imagemLogin} className="imagem2"/>
                            </Box>
                            
                        </Grid>    
                
            </Grid>
            









        );

    }

export default Login;