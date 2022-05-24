import React, {useEffect, useState} from 'react'
import {Typography, Box, Card, CardContent, CardActions, Button, Grid } from '@material-ui/core';
import './TabProduto.css';
import produtoImagem from '../../../assets/imagemProduto.gif';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/tokens/TokensReducer';



function TabPostagem() {
  const [produto, setProduto] =useState<Produto[]>([]);
  const [value, setValue] = useState('1')
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }

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
        <Box>
          <Box display="flex" className='tabProduto' justifyContent="center" alignItems="center">
          {
          
          produto.map(produto =>(

          <Box className = 'imageList'>
            <Card variant="outlined" className = 'cardTabProduto' >
              <CardContent >
              <Box  mx = {5}justifyContent = 'center' alignItems='flex-start' className = 'produtoQuebra' >
              <Typography variant="h5" >
                <img className = 'imagemListarTabProduto'src={produtoImagem} alt="" />
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
                 {'R$ '+produto.preco}
                </Typography>
                </Box>
              </CardContent>
              
              <Box  className='flexBotao' display = 'flex' justifyContent='center' alignItems = 'center' >
              <CardActions >
                <Box   mb={1.5}>
                  <Link to={`/carrinho/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className="botaoComprar" >
                        Comprar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
              </Box>
            </Card>
          </Box>
          ))
          }
          </Box>
          <Box display="flex" justifyContent="center">
          <Box marginRight={1}>
                        </Box>
                        <Link to="/listarProdutos" className='text-decorator-none'>
                        <Button variant="outlined" className='botaoHome'>Ver Produtos</Button>
                        </Link>
                    </Box>
            </Box>
                          
      
    </>
  );
}
export default TabPostagem;