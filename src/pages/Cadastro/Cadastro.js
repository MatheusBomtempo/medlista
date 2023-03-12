import './Cadastro.css';

import Navbar from '../../componentes/Navbar/Navbar1';
import aureola1 from '../../imgs/aurela.svg';

import { Container, Row } from 'react-bootstrap';
import { Auth } from '../../componentes/authCadastro/Auth';
import { auth, signInWithGoogle } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';

function Cadastro() {
  const [user, setUser] = useState({}, false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    return true;
  });

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Row>
          <div className="containerr">
            <div className="innerCont">
              <h1 className="titulo">Cadastro</h1>
              <h2>{user.email}</h2>
              <h2>{localStorage.getItem('nome')}</h2>
              <img src={localStorage.getItem('fotoPerfil')}></img>
              <div className="separador">
                <div className="left">
                  <Auth
                    placeholderemail="piroca"
                    placeholderuser="piroca"
                    placeholderpass="piroca"
                    placeholderpass2="piroca"
                  />
                </div>
                <div className="right">
                  <button
                    type="button"
                    className="login-with-google-btn"
                    onClick={signInWithGoogle}
                  >
                    Registrar-se com Google
                  </button>

                  <button
                    type="button"
                    className="login-with-google-btn"
                    id="face"
                  >
                    Registrar-se com Facebook
                  </button>

                  {/* <button type="button" className="login-with-google-btn" disabled>
                            Sign in with Google
                            </button> */}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      //{' '}
      <Container fluid>
        // <Navbar></Navbar>
        //{' '}
      </Container>
    </>
  );
}

export default Cadastro;
