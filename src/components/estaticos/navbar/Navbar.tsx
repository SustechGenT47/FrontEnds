import React from "react";
import { AppBar, Toolbar, Box, Typography, Grid } from "@material-ui/core";
import "./Navbar.css";
import { Link, Route, Router, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../Store/tokens/TokensReducer";
import { toast } from "react-toastify";
import { addToken } from "../../../Store/tokens/Actions";
import logo_sustech from "../../../assets/logo_sustech.jpeg";

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const user = useSelector<TokenState, TokenState["usuarios"]>(
        (state) => state.usuarios
    );

    console.log({ "email": user })
    console.log({ "token": token })
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuario Deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        navigate('/home')
    }

    function goLogin() {
        dispatch(addToken(''))
        navigate('/login')
    }

    var navBarComponent;

    if (token !== "" && user == "admin@email.com") {
        navBarComponent =
            <Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
                <AppBar position="static" className='navBar' style={{ "backgroundColor": "#310d57" }} >
                    <Toolbar variant="dense" className="flexContainer" >

                        <Grid className='containerImagem' item xs={4} >
                            <Box className='cursor'>
                                <Link to="/home" className="text-decorator-none">
                                    <Typography>
                                        <img className='img2' src={logo_sustech} alt="" />
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>

                        <Box mx={1} className='cursor' display="flex" justifyContent="start">
                            <Link to="/home" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Home
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Link to="/listarProdutos" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar flexContainer">
                                    Produtos
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Link to="/formularioProduto" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Cadastrar produtos
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Link to="/formularioCategoria" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Cadastrar Categoria
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor ' >
                            <Link to="/listaCategorias" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Categorias
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor ' >
                            <Link to="/contato" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Sobre nós
                                </Typography>
                            </Link>
                        </Box>

                        <Grid item xl={4} >
                            <Box mx={1} className='cursor logout' onClick={goLogout}>
                                <Typography variant="h6" className="tituloNavbar" >
                                    Logout
                                </Typography>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
    } else if (token !== "" && user !== "admin@email.com") {
        navBarComponent =
            <Grid container  >
                <AppBar className='navBar' style={{ "backgroundColor": "#310d57" }} >
                    <Toolbar variant="dense" className="flexContainer" >
                        <Box className='cursor containerImagem' display='flex' justifyContent='flex-start'>
                            <Link to="/home" className="text-decorator-none" >
                                <Typography>
                                    <img className='img2' src={logo_sustech} alt="" />
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Link to="/home" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Home
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Link to="/listarProdutos" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar flexContainer">
                                    Produtos
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor' >
                            <Link to="/formularioProduto" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Cadastrar produtos
                                </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor ' >
                            <Link to="/contato" className="text-decorator-none">
                                <Typography variant="h6" className="tituloNavbar">
                                    Sobre nós
                                </Typography>
                            </Link>
                        </Box>

                        <Grid className='logout'>
                            <Box mx={1} className='cursor ' onClick={goLogout}>
                                <Typography variant="h6" className="tituloNavbar" >
                                    Logout
                                </Typography>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>

    } else {
        navBarComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <AppBar position="static" className='navBar' style={{ "backgroundColor": "#310d57" }} >
                    <Toolbar variant="dense" className="flexContainer" >
                        <Grid className='containerImagem' item xs={6} >
                            <Box className='cursor'>
                                <Link to="/home" className="text-decorator-none">
                                    <Typography variant="h5">
                                        <img className='img2' src={logo_sustech} alt="" />
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={6} >
                            <Box mx={1} className='cursor logout' onClick={goLogin}>
                                <Typography variant="h6" className="tituloNavbar" >
                                    Login
                                </Typography>
                            </Box>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
    }
    return (
        <>
            {navBarComponent}
        </>
    )
}

export default Navbar;