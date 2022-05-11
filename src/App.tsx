import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Contato from './paginas/contato/Contato';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastrarUsuario/CadastrarUsuario';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './Store/Store';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Provider store = {store}>
      <ToastContainer/>
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/categorias" element={<CadastroCategoria />} />
        <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  </Provider>
  );
}

export default App;
