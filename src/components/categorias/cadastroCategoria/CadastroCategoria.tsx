import React, { useState, useEffect, ChangeEvent } from "react";
import {Button, Container, Grid, TextField, Typography} from "@material-ui/core"
import './CadastroCategoria.css';
import { useNavigate, useParams } from "react-router-dom";
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../Store/tokens/TokensReducer";
import { toast } from "react-toastify";


function CadastroCategoria(){

    let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        palavraChave: ''
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
        buscaId(`/categorias/${id}`, setCategoria, {
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

    function updatedCategoria(e:ChangeEvent<HTMLInputElement>){
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(id !== undefined){
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
        }else{
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

    function back(){
        navigate('/listaCategorias')
    }

    return(
        <Grid container direction="column" className="flexContainer1" style={{ backgroundColor: "white" }}>
        
              <Grid alignItems="center" item xs={6} className="formContainer">
            <form onSubmit = {onSubmit}>
                
                <Typography variant = 'h3' color = 'textSecondary' component = "h1" align = 'center'>Categoria</Typography>
                <div>
                <TextField value = {categoria.tipo} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id = 'tipo' label = 'Tipo' variant = 'outlined' name = 'tipo'/>
                </div>
                
                <div>
                <TextField value = {categoria.palavraChave} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id = 'palavraChave' label = 'PalavraChave' variant = 'outlined' name = 'palavraChave'/>
                </div>
                <Button type = 'submit' variant = 'contained' color = 'primary'>
                    Finalizar
                </Button>
            </form>
             </Grid>
        </Grid>
    )
}

export default CadastroCategoria