import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography, Grid} from '@material-ui/core';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../Store/tokens/TokensReducer';
import { toast } from 'react-toastify';


function DeletarCategoria() {
  let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
  );
    const [categoria, setCategoria] = useState<Categoria>()

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

    function sim(){
      navigate('/listaCategorias')
      deleteId(`/categorias/${id}`, {
        headers:{
          'Authorization': token
        }
      });
      toast.success('Categoria deletado com sucesso!', {
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
      navigate('/listaCategorias')
    }
          
  return (
    <>
    <Grid container>
      <Grid xs={12}>

      <Box m={2} my={2}>
        <Card className="deletarCard" variant="outlined">
          <CardContent className="cardContent">
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography className="titleCardDelete" gutterBottom>
                Deseja deletar a Categoria:
              </Typography>
              <Typography className="categoriaDelete">
                {categoria?.tipo}
              </Typography>
            </Box>
          </CardContent>
          <Box className='flexButton'>
            <Box display="flex" justifyContent="start" ml={0.1} my={8} >
              <Box mx={2} >
                <Button onClick={sim} variant="contained" className="botaoSim" size='large' >
                  Sim
                </Button>
              </Box>
              <Box mx={2}  >
                <Button  onClick={nao} variant="contained"  className="botaoNao" >
                  Não
                </Button>
              </Box>
            </Box>
            </Box>
        </Card>
      </Box>
      </Grid>
    </Grid>
    </>
  );
}
export default DeletarCategoria;