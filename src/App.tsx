import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Contato from './paginas/contato/Contato';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import './App.css';
import CadastrarUsuario from './paginas/cadastrarUsuario/CadastrarUsuario';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './Store/Store';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import 'react-toastify/dist/ReactToastify.css';
import ListarProdutos from './components/produtos/listaProdutos/ListarProdutos';
import CadastroProduto from './components/produtos/cadastrarProduto/CadastrarProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import Carrinho from './components/carrinho/Carrinho';
import AtualizarProduto from './components/produtos/atualizarProduto/AtualizarProduto';

function App() {
  return (
    <Provider store = {store}>
      <ToastContainer/>
    <Router>
    <Navbar />

    <div className = 'background1'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<CadastrarUsuario />} />
        <Route path="/listaCategorias" element={<ListaCategoria />} />
        <Route path="/formularioCategoria" element={<CadastroCategoria />} />
        <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        <Route path="/formularioProduto" element={<CadastroProduto />} />
        <Route path="/formularioProduto/:id" element={<CadastroProduto />} />
        <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
        <Route path="/listarProdutos" element={<ListarProdutos />} />
        <Route path="/carrinho/:id" element={<Carrinho />} />

      </Routes>
    </div>
    <Footer />
  </Router>
  </Provider>
  );
}

export default App;
