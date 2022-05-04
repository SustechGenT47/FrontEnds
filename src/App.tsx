import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Contato from './paginas/contato/Contato';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastrarUsuario/CadastrarUsuario';

function App() {
  return (
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
