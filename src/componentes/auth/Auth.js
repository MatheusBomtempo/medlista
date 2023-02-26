import React from "react";
import "./Auth.css";
import { Link } from 'react-router-dom'
import { auth, googleProvider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

// import { PlusOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

import { InfoCircleOutlined} from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { stringLength } from "@firebase/util";

export const Auth = (props) => {
  

  const key = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

  function onChange() {
    console.log("changed");
    setCaptchaIsDone(true)
  }

  const [captchaIsDone,setCaptchaIsDone] = useState('');
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erroSenha,setErroSenha] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordTooShort, setPasswordTooShort] = useState(false);

  
  const [passwordVisible, setPasswordVisible] = React.useState(false);

    
  const handleRegisterPassword = (e) => {
    setRegisterPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
    setPasswordTooShort(registerPassword.length <= 6);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === registerPassword);
  };

  // const matchPass = () => {
  //   if(passwordsMatch == true){
  //     setErroSenha('senhas não correspodem')
  //   }
  // }

  // const validationPassword = (e) => {


  //   if(confirmPassword != registerPassword){
  //     setErroSenha('senhas não batem')
  //   }else{
  //     setErroSenha('')
  //   }
    
  //  }



  

  const register = async () => {

    if(!captchaIsDone){
   alert('verifique o captcha')
  }else if(confirmPassword != registerPassword){
    setErroSenha('senhas não batem')
  }else if(registerPassword.length <= 6){
    setErroSenha('senha deve ter mais de 6 caracteres')
  }
  
  else{

    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
    } catch (error) {
      console.error(error.message);
    }

    setErroSenha('')
  }
  };


  
  

  return (

    
    
      <form className="caixa" onSubmit={register}>

        <div>
        </div>

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

          <div className="divbtn">
            <button type="submit">
              Cadastrar
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
