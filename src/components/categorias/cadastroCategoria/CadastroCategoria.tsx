import React, { useState, useEffect, ChangeEvent } from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@material-ui/core"
import './CadastroCategoria.css';
import { useNavigate, useParams } from "react-router-dom";
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../Store/tokens/TokensReducer";
import { toast } from "react-toastify";
import planeta from '../../../assets/planetaa.gif';


function CadastroCategoria() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        palavraChave: ''
    })

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            navigate('/login')
        }
    }, [token])

    async function findById(id: String) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (id !== undefined) {
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('A Categoria foi atualizada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('A categoria foi cadastrada com sucesso!', {
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
        back()
    }

    function back() {
        navigate('/listaCategorias')
    }

    return (
        <Grid container className="background">
            <Grid item xs={12} >

                    <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                        <Box className="card" width={400} height="75vh" borderRadius={5}
                            marginTop={15} display="flex" justifyContent="center" alignItems="center">
                            <Box>
                                <Typography className='text-focus-in title' variant="h4" align="center">
                                    Cadastro de Categoria
                                </Typography>
                                <form onSubmit={onSubmit} className='form'>
                                    <Box marginY={6} >
                                        <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id='tipo' label='Tipo'  name='tipo' className="input" type={"text"} style={{color:"#fffff"}}/>
                                    </Box>

                                    <Box marginY={4}>
                                        <TextField value={categoria.palavraChave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id='palavraChave' label='Palavra Chave'  name='palavraChave' className="input" />
                                    </Box>

                                    <Box className="flex">
                                    <Button type='submit' variant='contained' className="botao">
                                        Cadastrar
                                    </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroCategoria