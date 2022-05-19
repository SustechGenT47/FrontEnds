import React, { useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, Card, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Produto from '../../models/Produto'
import { buscaId } from '../../services/Service'

import './Carrinho.css'
import { useSelector } from 'react-redux'
import { TokenState } from '../../Store/tokens/TokensReducer'
import { toast } from 'react-toastify'
import produtoImagem from '../../assets/imagemProduto.gif'

function Carrinho() {

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [quantidadeFinal, setQuantidadeFinal] = useState(0)

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        preco: 0,
        quantidade: 0,
        descricao: "",
        estado: "",
        categoria: null
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

    useEffect(() => {
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    function confirmSales() {
        toast.success('Compra Realizada com sucesso, verifique o seu email', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        navigate("/listarProdutos")
    }

    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid xs={12}>
            <Box m={0} display="flex" justifyContent="center">
                <Card variant="outlined" className='cardContainerCart'>

                    <div className='cardProductCart'>
                        <img className='imagemListarTabProdutoCart' src={produtoImagem} alt="" />

                        <div className='cardProductInfoCart'>
                            <Typography className="produtoTitle" variant="body1" gutterBottom>
                                Produto
                            </Typography>

                            <Typography className="produtoNome" variant="h4" component="h2">
                                {produto.nome}
                            </Typography>

                            <Typography className="produtoPreco" variant="h5" component="p">
                                R$ {produto.preco}
                            </Typography>

                            <Typography className='produtoQtd' variant="h5" component="p">
                                Quantidade Máx: {produto.quantidade}
                            </Typography>

                            <TextField
                                value={quantidadeFinal}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                InputProps={{ inputProps: { min: 1, max: produto.quantidade } }}
                                id="quantidade" label="quantidade" type="number" variant="outlined"
                                name="quantidade" margin="normal" fullWidth
                            />

                            <Typography className="produtoTotal" variant="h5" component="p">
                                Total: R$ {valorTotal()}
                            </Typography>

                            <Box mx={1} my={2} className="flexBotaoCompra">
                                <Box mx={1} my={0}>
                                    <Button className='botaoComprarCart' onClick={confirmSales} variant="contained" size='small' >
                                        Confimar Compra
                                    </Button>
                                </Box>
                                <Box mx={1} my={2}>
                                    <Button className="botaoCancelarCart" variant="contained" size='small'>
                                        Cancelar
                                    </Button>
                                </Box>
                            </Box>
                            
                        </div>
                    </div>
                </Card>
            </Box>
            </Grid>
        </Grid>

        </>

    )
}

export default Carrinho

function findByIdProduto(id: string) {
    throw new Error('Function not implemented.')
}
