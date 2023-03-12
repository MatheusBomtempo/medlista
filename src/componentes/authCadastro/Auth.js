import React, { useContext } from "react";
import "./Auth.css";
import { Link } from 'react-router-dom'
import { auth, googleProvider, firestore, database } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { UserAuth } from '../../contexts/contextsAuth/AuthContext';

// import { PlusOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

import { InfoCircleOutlined} from '@ant-design/icons';
import { Input, Tooltip } from 'antd';



export const Auth = (props) => {

  const { createUser } = UserAuth();
  const navigate = useNavigate();
  
  
  const key = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

  function onChange() {
    console.log("captcha validado");
    setCaptchaIsDone(true)
  }

  const [captchaIsDone,setCaptchaIsDone] = useState('');
  const [registerEmail, setRegisterEmail] = useState("");
  const [username, setUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erroSenha,setErroSenha] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordTooShort, setPasswordTooShort] = useState(false);

  
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    
    if(!captchaIsDone){
      alert('verifique o captcha')
      }else if(confirmPassword != registerPassword){
        setErroSenha('senhas não batem')
      }else if(registerPassword.length < 5){
        setErroSenha('senha deve ter mais de 6 caracteres')
      }else{
    setIsLoading(true);
    // Perform some asynchronous task here
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
    
  };

    
  const handleRegisterPassword = (e) => {
    setRegisterPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
    setPasswordTooShort(registerPassword.length < 5);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === registerPassword);
  };

  const register = async (e) => {

    e.preventDefault();

    if(!captchaIsDone){
    alert('verifique o captcha')
    }else if(confirmPassword != registerPassword){
      setErroSenha('senhas não batem')
    }else if(registerPassword.length < 5){
      setErroSenha('senha deve ter mais de 6 caracteres')
    }
  
  else{
    createUser(auth,registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      const db = getFirestore();
      const userRef = doc(db, 'users', user.uid);
      setDoc(userRef, { username }, { merge: true });

      navigate('/CadastroMedico');

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('E-mail já cadastrado. Tente fazer login ou utilize outro endereço de e-mail.');
      } else {
        console.log(errorCode, errorMessage);
      }
    });




    // try {
    //   const { userr } = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    //   console.log(userr)
      
    //   await database.collection('user').doc(userr.uid).set({
    //     username,
    //     registerEmail,
    //   });
    //   console.log('Dados do usuário salvos no Firestore!');
    // } catch (error) {
    //   console.error('Ocorreu um erro ao criar o usuário:', error);
    // }

    // setErroSenha('')
  }
  };


  
  

  return (

    
    
      <form className="caixa" onSubmit={register}>


          <Input
            onChange={(e) => {setRegisterEmail(e.target.value)}}
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


                
            <Input
            placeholder={props.placeholderuser}
            value={username}
            onChange={(e) => setUsername((e.target.value))}
            className="inputt"
            prefix={<FontAwesomeIcon id="icons" className="site-form-item-icon" icon={faCircleUser} />}
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
            value={registerPassword}
            onChange={handleRegisterPassword}
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
          


          <Input.Password
            value={confirmPassword}
            onChange={handleConfirmPassword}
            placeholder={props.placeholderpass2}
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

          <div className="matchsenha">
            {passwordsMatch ? '' : <p>As senhas não correspondem.</p>}

            {passwordTooShort && <p>A senha deve ter pelo menos 6 caracteres.</p>}
            </div>

            

          <div className="captcha">
            <ReCAPTCHA
                sitekey={key}
                onChange={(value) => {setCaptchaIsDone(value);}}
              />
          </div>

          <div className="divbtn" onClick={handleClick} disabled={isLoading}>
            <button type="submit">
            {isLoading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : 'Cadastrar'}
            </button>
          </div>

          <div className="pergunta">
            <Link to="/">
              <p>Já possui <span>login?</span></p>
            </Link>
          </div>


      </form>
      
  );
};
