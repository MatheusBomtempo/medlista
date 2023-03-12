import "./Login.css";

import Navbar from "../../componentes/Navbar/Navbar1";
import aureola1 from "../../imgs/aurela.svg";

import { Container, Row, Col, Form } from "react-bootstrap";
import { Auth } from "../../componentes/authCadastro/Auth";
import { auth, signInWithGoogle } from "../../firebase";


import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState, useContext } from "react";


import { useNavigate, Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

// import { PlusOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
// import { Container, Row, Col } from "react-bootstrap";

import { InfoCircleOutlined} from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { Context } from "../../contexts/contextsAuth/AuthContext";



function Login(props) {

    const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  });

  const key = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

  function onChange() {
    console.log("captcha validado");
    setCaptchaIsDone(true)
  }

  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [captchaIsDone,setCaptchaIsDone] = useState('');
    const [erroSenha,setErroSenha] = useState("");

    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    
    if(!captchaIsDone){
      alert('verifique o captcha')
      }
      else{
    setIsLoading(true);
   
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
    
  };

    

  const isLogged = async (e) => {

    e.preventDefault();

    if(!captchaIsDone){
      alert('verifique o captcha')
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        const user = userCredential.user;
        // Do something with the signed-in user, e.g. redirect to a new page
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors here
      }
    }
  };



  return (
    <>
      <Navbar></Navbar>

      <Container>
        <Row >  
        
        <div className="containerr">
            <div className="innerCont">
                <h1 className="titulo">Login</h1>
                <h2>{user.email}</h2>
                <h2>{localStorage.getItem("nome")}</h2>
                <img src={localStorage.getItem("fotoPerfil")}></img>
                    <div className="separador">
                        <div className="left">
                          <form className="caixa" onSubmit={isLogged}>


                              <Input
                                onChange={(e) => {setLoginEmail(e.target.value)}}
                                value={loginEmail}
                                placeholder={props.placeholderemail}
                                className="inputt"
                                prefix={<FontAwesomeIcon id="icons" className="site-form-item-icon" icon={faEnvelope} />}
                                suffix={
                              <Tooltip title="Extra information">
                                <InfoCircleOutlined
                                style={{
                                  color: 'rgba(0,0,0,.45)' }}
                                />
                                </Tooltip>
                              }
                              />




                              <Input.Password
                                onChange={(e) => {setLoginPassword(e.target.value)}}
                                value={loginPassword}
                                placeholder={props.placeholderpass}
                                visibilityToggle={{
                                  visible: passwordVisible,
                                  onVisibleChange: setPasswordVisible,
                                }}
                                className="inputt"
                                prefix={<FontAwesomeIcon id="icons" className="site-form-item-icon" icon={faLock} />}
                                suffix={
                              <Tooltip title="Extra information">
                                <InfoCircleOutlined
                                style={{
                                  color: 'rgba(0,0,0,.45)' }}
                                />
                                </Tooltip>
                              }
                              /> 
                          

                                

                              <div className="captcha">
                                <ReCAPTCHA
                                    sitekey={key}
                                    onChange={(value) => {setCaptchaIsDone(value);}}
                                  />
                              </div>

                              <div className="divbtn" onClick={handleClick} disabled={isLoading}>
                                <button type="submit">
                                {isLoading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : 'Logar'}
                                </button>
                              </div>

                              <div className="pergunta">
                                <Link to="/">
                                  <p>Já possui <span>login?</span></p>
                                </Link>
                              </div>


                          </form>
                        </div>
                        <div className="right">
                            <button type="button" className="login-with-google-btn" onClick={signInWithGoogle}>
                            Entrar com Google
                            </button>

                            <button type="button" className="login-with-google-btn" id="face" >
                            Entrar com Facebook
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




    //   <Container fluid>
    //     <Navbar></Navbar>
    //   </Container>

    </>

  );
}

export default Login;


