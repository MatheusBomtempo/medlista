import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './componentes/ScrollToTop/ScrollToTop';

import CadastroMed from './pages/CadastroMed/CadastroMed';
import Home from './pages/home/Home';
import Pesquisa from './pages/Pesquisa/Pesquisa';
import Cadastro from './pages/Cadastro/Cadastro';
import { AuthProvider } from './contexts/contextsAuth/AuthContext';
import Login from './pages/Login/Login';
import RotaPrivada from './contexts/contextsAuth/RotaPrivada'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/CadastroMedico" element={<CadastroMed />} /> */}
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />

            <RotaPrivada></RotaPrivada>

            <RotaPrivada path="/CadastroMedico" component={<CadastroMed /> } />

            <Route path="/pesquisa" element={<Pesquisa />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </AuthProvider>
  );
}

export default App;
