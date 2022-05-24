import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import Produto from '../../../models/Produto';
import './ListarProdutos.css';
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

  const user = useSelector<TokenState, TokenState["usuarios"]>(
    (state) => state.usuarios
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

    var listarProdutosComponent;

    if(token !== "" && user == "admin@email.com"){
      listarProdutosComponent = 
      <Box className = 'background'display="flex" justifyContent="center" alignItems="center">
        {
          
          produto.map(produto =>(
          <Box my = {10} mx={3} >
            <Card variant="outlined" className = 'cardProdutos'>
              <CardContent >

              <Box display='flex' justifyContent = 'center'    alignItems = 'center' >
                <img className = 'imagemListarProduto'src={produtoImagem} alt="" />
              </Box>

              <Box className = 'listaProdutos'>
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
              
              <Box  className = 'botoes'>
              <CardActions>
                
                <Link to={`/carrinho/${produto.id}`} className="text-decorator-none">
                    <Box mx={1} >
                      <Button variant="contained" size='small' className="botaoComprarListar" >
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
              </CardActions>
              </Box>
              </CardContent>
            </Card>
          </Box>
          ))
          }
        </Box>
    }else if(token !== "" && user !== "admin@email.com"){
      listarProdutosComponent = 
      <Box className = 'background'display="flex" justifyContent="center" alignItems="center">
        {
          
          produto.map(produto =>(
          <Box my = {10} mx={3} >
            <Card variant="outlined" className = 'cardProdutos'>
              <CardContent >

              <Box display='flex' justifyContent = 'center'    alignItems = 'center' >
                <img className = 'imagemListarProduto'src={produtoImagem} alt="" />
              </Box>

              <Box className = 'listaProdutos'>
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
              
              <Box  className = 'botoes'>
              <CardActions>
                <Link to={`/carrinho/${produto.id}`} className="text-decorator-none">
                    <Box mx={1} >
                      <Button variant="contained" size='small' className="botaoComprarListar" >
                        Comprar
                      </Button>
                    </Box>
                  </Link>
              </CardActions>
              </Box>
              </CardContent>
            </Card>
          </Box>
          ))
          }
        </Box>
    }
    return (
        <>
         {listarProdutosComponent}
        </>
      )
}

export default ListaProdutos;