import React, { useState, useEffect, ChangeEvent } from "react";
import {Box, Button, Container, TextField, Typography, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText} from "@material-ui/core"
import './AtualizarProduto.css';
import { useNavigate, useParams } from "react-router-dom";
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../Store/tokens/TokensReducer";
import { toast } from "react-toastify";
import { AddBox } from "@mui/icons-material";
import Categoria from "../../../models/Categoria";


function AtualizarProduto(){

    let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if(token === ''){
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
    },[token])

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        quantidade: 0,
        preco: 0,
        estado: '',
        categoria: null
    })

  
    async function findByIdProduto(id:String){
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }
   
    useEffect(() => {
        if(id !== undefined){
            findByIdProduto(id)
        }
    }, [id])

    function updatedProduto(e:ChangeEvent<HTMLInputElement>){
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(id !== undefined){
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('O Produto foi atualizado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }else{
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('O produto foi cadastrado com sucesso!', {
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

    function back(){
        navigate('/listarProdutos')
    }

    return(
        <Grid container item xs = {12} className = 'topo' justifyContent = 'center'  alignItems="center">
            <Box my= {0}display="flex" justifyContent="center" alignItems="center" >
            <form onSubmit = {onSubmit}  className='formProduto' >
                <Typography variant = 'h3' color = 'textSecondary' component = "h1" align = 'center' className='titulo'>Atualizar Produto</Typography>
                <Box >
                <TextField className="campoProduto" value = {produto.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'nome' label = 'Nome' variant = 'standard' name = 'nome'/>
                </Box>
                <Box >
                <TextField className="campoProduto" value = {produto.estado} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'estado' label = 'Estado atual do produto' variant = 'standard' name = 'estado'/>

                </Box>

                <Box>
                <TextField className="campoProduto" value = {produto.quantidade} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'quantidade' label = 'Quantidade' variant = 'standard' name = 'quantidade'/>

                </Box>

                <Box >
                <TextField className="campoProduto" value = {produto.descricao} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'descricao' label = 'Descrição' variant = 'standard' name = 'descricao'/>

                </Box>

                <Box >
                <TextField className="campoProduto" value = {produto.preco} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'preco' label = 'Valor' variant = 'standard' name = 'preco'/>
                
                </Box>
                <Box className="flex">
               
                </Box>
                <Box my = {2}display = 'flex' justifyContent="center" alignItems="center">
                <Button type = 'submit' variant = 'contained' className = 'botaoProduto'>
                    Atualizar
                </Button>
                </Box>
            </form>
            </Box>
        </Grid>
    )
}

export default AtualizarProduto;
