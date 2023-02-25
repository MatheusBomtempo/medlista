import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop/ScrollToTop";

import CadastroMed from "./pages/CadastroMed/CadastroMed";
import Home from "./pages/home/Home";
import { Auth } from "./componentes/auth/Auth";

import Pesquisa from "./pages/Pesquisa/Pesquisa";
import Navbar from 'react-bootstrap/Navbar'
import Cadastro from "./pages/Cadastro/Cadastro";
function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CadastroMedico" element={<CadastroMed />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
