import React, { useState, useEffect, ChangeEvent } from "react";
import {Button, Container, TextField, Typography} from "@material-ui/core"
import './CadastrarProduto.css';
import { useNavigate, useParams } from "react-router-dom";
import Produto from '../../../models/Produto';
import { buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../Store/tokens/TokensReducer";
import { toast } from "react-toastify";


function CadastroProduto(){

    let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        quantidade: 0,
        preco: 0,
        estado: '',
        categoria: null
    })

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

    async function findById(id:String){
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        if(id !== undefined){
            findById(id)
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
            <Container maxWidth='sm' className = 'topo'>
                <form onSubmit = {onSubmit}>
                    <Typography variant = 'h3' color = 'textSecondary' component = "h1" align = 'center'>Cadastre seu produto</Typography>
                    <TextField value = {produto.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'nome' label = 'nome' variant = 'outlined' name = 'nome'/>
                    <TextField value = {produto.estado} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'estado' label = 'estado' variant = 'outlined' name = 'estado'/>
                    <TextField value = {produto.quantidade} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'quantidade' label = 'quantidade' variant = 'outlined' name = 'quantidade'/>
                    <TextField value = {produto.descricao} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'descricao' label = 'descricao' variant = 'outlined' name = 'descricao'/>
                    <TextField value = {produto.preco} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id = 'preco' label = 'preco' variant = 'outlined' name = 'preco'/>
                    <Button type = 'submit' variant = 'contained' color = 'primary'>
                        Finalizar
                    </Button>
                </form>
    
            </Container>
        )
    }
     
export default CadastroProduto;