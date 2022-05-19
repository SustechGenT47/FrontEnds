import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto';
import './ListarProdutos.css';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/tokens/TokensReducer';
import produtoImagem from '../../../assets/imagemProduto.gif';


function ListaProdutos(){


    const [produto, setProduto] =useState<Produto[]>([]);
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );
    let navigate =useNavigate();

    useEffect(()=>{
        if(token == ''){
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
          navigate ("/login")
        }
      }, [token])

      async function getProduto(){
        await busca("/produtos/all", setProduto, {
          headers: {
            'Authorization': token
          }
        })  }
    
    
      useEffect(()=>{
        getProduto()
      }, [produto.length])

    return (
        <>
         
        {
          
          produto.map(produto =>(

          <Box className = 'imageList'>
            <Card variant="outlined" className = 'cardProdutos' >
              <CardContent >
              <Box  justifyContent = 'center' alignItems='flex-start' className = 'produtoQuebra' >
              <Typography variant="h5" >
                <img className = 'imagemListarProduto'src={produtoImagem} alt="" />
                </Typography>
                </Box>
              <Box className = 'textoProdutos'>
                <Typography className = 'nomeProduto' variant="h5" component="h2">
                 {produto.nome}
                </Typography>
                <Typography className = 'linhaProduto' variant="h5" component="h2">
                 {'Estado: '+produto.estado}
                </Typography>
                <Typography className = 'linhaProduto' variant="h5" component="h2">
                 {'Quantidade: '+produto.quantidade}
                </Typography>
                <Typography className = 'linhaProduto' variant="h5" component="h2">
                 {'Descrição: '+produto.descricao}
                </Typography>
                <Typography className = 'linhaProduto' variant="h5" component="h2">
                 {'R$ '+produto.preco}
                </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
                
                <Link to={`/carrinho/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className="botaoComprar" >
                        Comprar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="botaoAtt" size='small' >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className="botaoDel">
                        deletar
                      </Button>
                    </Box>
                    
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
          ))
          }
        </>
      );
    
}

export default ListaProdutos;

