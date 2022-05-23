import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import './ListaCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/tokens/TokensReducer';


function ListaCategoria() {


  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
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
      navigate("/login")
    }
  }, [token])

  async function getCategoria() {
    await busca("/categorias", setCategoria, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getCategoria()
  }, [categoria.length])

  return (
    <>
             <Box className = 'background' display="flex" justifyContent="center" alignItems="center">

      {
        
        categoria.map(categoria => (
          <Box my = {10} mx={3} alignItems="center" >
            <Card className="CategoriaCard" variant="outlined"  >
              <CardContent >
              <Box className = 'conteudoCategoria' justifyContent="center" alignItems="center" >
                <Typography className = 'tituloCategoria' variant = 'h5' gutterBottom>
                  Categoria
                </Typography>
                <Typography className = 'linhaCategoria' variant="h5" component="h2" >
                  {categoria.tipo}
                </Typography>

                </Box>
              </CardContent>
              <Box display="flex" justifyContent="center" style={{'marginTop':'20%'}} >
              <CardActions>
              
                  <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={5} justifyContent="center" style={{'marginTop':'0'}}>
                      <Button variant="contained" className="botaoAtt"  >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={5} justifyContent="center" style={{'marginTop':'0'}}>
                      <Button variant="contained"  className="botaoDel">
                        deletar
                      </Button>
                    </Box>

                  </Link>
              </CardActions>
              </Box>

            </Card>
          </Box>
        ))
      }
          </Box>
    </>
  );

}

export default ListaCategoria;

