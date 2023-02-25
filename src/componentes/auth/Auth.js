import React from "react";
import "./Auth.css";
import { auth, googleProvider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

// import { PlusOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip, Space, Button } from 'antd';

export const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const singIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const singInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  

  return (
    
          <form className="caixa">

          <Input
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

            {/* <Form.Item label="email:">
              <Input
                size="large"
                placeholder="Insira seu Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="senha:">
              <Input
                size="large"
                placeholder="Insira sua Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item className="enviar">
              <Button onClick={singIn}>Entrar</Button>
            </Form.Item>

            <Form.Item className="enviar">
              <Button onClick={singInWithGoogle}>Entrar com o Google</Button>
            </Form.Item>

            <Form.Item className="enviar">
              <Button onClick={logOut}>Sair</Button>
            </Form.Item> */}
          </form>
      
  );
};
