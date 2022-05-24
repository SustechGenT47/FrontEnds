import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import produtoImagem from '../../../assets/imagemProduto.gif';


function DeletarProduto() {
  let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );
    const [produto, setProduto] = useState<Produto>()

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

    function sim(){
      navigate('/listarProdutos')
      deleteId(`/produtos/${id}`, {
        headers:{
          'Authorization': token
        }
      });
      toast.success('Produto deletado com sucesso!', {
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

    function nao(){
      navigate('/listarProdutos')
    }
          
  return (
    <>
        <Box className = 'background'display="flex" justifyContent="center" alignItems="center">


      <Box my = {10} mx={3} >
        <Card variant="outlined" className = 'cardProdutos'>
          <CardContent>
          <Box display='flex' justifyContent = 'center'    alignItems = 'center' >
                <img className = 'imagemListarProduto'src={produtoImagem} alt="" />
              </Box>
            <Box justifyContent="center" >
              <Typography className = 'titleCardDelete' variant="h5" gutterBottom>
                Deseja deletar a Produto:
              </Typography>
              <Typography className = 'nomeProduto' variant="h5" component="h2">
                {produto?.nome}
              </Typography>
              <Typography className = 'linhaProduto' variant="h5" component="h2">
                Quantidade: 
                {produto?.quantidade}
              </Typography>
              <Typography className = 'linhaProduto' variant="h5" component="h2">
                Preço: R$ 
                {produto?.preco}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box className='flexBottonProduto' display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="botaoSimProduto" size='large' >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' className="botaoNaoProduto">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
      </Box>
    </>
    
  );
}
export default DeletarProduto;