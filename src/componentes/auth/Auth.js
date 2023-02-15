import React from 'react'
import './Auth.css'
import { auth, googleProvider } from '../../firebase';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


import { PlusOutlined } from '@ant-design/icons';
import {
Button,
Form,
Input
} from 'antd';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Auth = ()  => {

        const [email, setEmail] =  useState("");
        const [password, setPassword] =  useState("");

        const singIn = async () => {
            try{
            await createUserWithEmailAndPassword( auth, email, password);
        }   catch(err) {
            console.error(err);
            }
        };

        const singInWithGoogle = async () => {
            try{
            await signInWithPopup( auth, googleProvider);
        }   catch(err) {
            console.error(err);
            }
        };

        const logOut = async () => {
            try{
            await signOut(auth);
        }   catch(err) {
            console.error(err);
            }
        };

    return(
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6} xl={5}>
                    
                    <div className=''>
                        <Form.Item label="email:">
                            <Input 
                            size="large"
                            placeholder="Insira seu Email"
                            type='text' 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Item>
                    
                        <Form.Item label="senha:">
                            <Input 
                            size="large" 
                            placeholder="Insira sua Senha" 
                            type='password'
                            onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>
                        <Form.Item className='enviar'>
                            <Button onClick={singIn}>Entrar</Button>
                        </Form.Item>

                        <Form.Item className='enviar'>
                            <Button onClick={singInWithGoogle}>Entrar com o Google</Button>
                        </Form.Item>

                        <Form.Item className='enviar'>
                            <Button onClick={logOut}>Sair</Button>
                        </Form.Item>
                    
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
