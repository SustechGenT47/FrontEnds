import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/tokens/TokensReducer';
import { toast } from 'react-toastify';


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
      <Box m={2}>
        <Card className='deletarCardProduto' variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Produto:
              </Typography>
              <Typography color="textSecondary">
                {produto?.nome}
              </Typography>
              <Typography color="textSecondary">
                {produto?.nome}
              </Typography>
              <Typography color="textSecondary">
                {produto?.descricao}
              </Typography>
              <Typography color="textSecondary">
                {produto?.quantidade}
              </Typography>
              <Typography color="textSecondary">
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
    </>
  );
}
export default DeletarProduto;