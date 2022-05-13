import { useEffect, useState, ChangeEvent } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from "react-toastify";

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            tipo: "",
            senha: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            tipo: "",
            senha: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function cadastrar(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(confirmarSenha === user.senha && user.senha.length >= 8){
            try{
                await cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)    
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            }catch(error){
                console.log(`Error: ${error}`)

                toast.error('Erro ao cadastrar usuário!', {
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
        }else{
            toast.error('Dados inconsistentes. Verifique as informações de cadastro', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            setUser({...user, senha: ""})
            setConfirmarSenha("")
        }
    }

        return (
            <Grid id="dark"container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form  onSubmit={cadastrar}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2 textColor'>Cadastrar</Typography>
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={user.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='tipo' label='Tipo' variant='outlined' name='tipo' margin='normal' fullWidth />
                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' className="botaoCadastrar">
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>



            </Grid>
        );
    }

    export default CadastroUsuario;