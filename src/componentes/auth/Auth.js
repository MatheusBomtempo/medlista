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

export const Auth = (props) => {
  

  const key = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'

  function onChange() {
    console.log("changed");
    setCaptchaIsDone(true)
  }

  const [captchaIsDone,setCaptchaIsDone] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const [passwordVisible, setPasswordVisible] = React.useState(false);


  const validate_password = () => {
    if(confirmPassword != registerPassword){
      console.log('suas senhas estão diferente')
      return
    }
  }


  const handleRegister = () => {
    if(confirmPassword == registerPassword){
      return
    }
  }


  const register = async () => {

    if(setCaptchaIsDone == true){

    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user)
    } catch (error) {
      console.error(error.message);
    }

  }else{
    console.log('deu errado')
  }
  };


  
  

  return (

    
    
      <form className="caixa">

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
            onChange={(e) => {setRegisterPassword(e.target.value)}}
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
            onChange={(e) => {setConfirmPassword(e.target.value)}}
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

          <div className="captcha">
            <ReCAPTCHA
                sitekey={key}
                onChange={onChange}
              />
          </div>

          <div className="divbtn">
            <button onClick={register}>
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
