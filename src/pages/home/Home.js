import './Home.css';

import Navbar from '../../componentes/Navbar/Navbar'
import aureola1 from '../../imgs/aurela.svg'
import { Container, Row, Col, Form, Input } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Selects from '../../componentes/Select/Selects'



function Home() {
    return (

        
        <div>
          <div className='aurea1 '><img src={aureola1} alt="Logo" />;</div>

          
          <Container className="App">
            

                <Selects placeholder="Dr. Guilherme Bomtempo"></Selects>

             
            {/* <div className='textInput tamanho'>

              <h2 className='titulo1'>Encontre seu médico:</h2>
              <InputGroup id='input1' className="mb-3">
              <FontAwesomeIcon id="lupa" icon={faMagnifyingGlass} />
                <Form.Control
                  id='input2'
                  placeholder="Dr. Guilherme Bomtempo"
                  aria-label="doutores"
                  aria-describedby="basic-addon2"
                />
                  <Button
                  variant="outline-secondary" id="button-addon2" >
                        Pesquisar
                  </Button>
                </InputGroup>

            </div> */}
          
          </Container>

          <Container fluid>
            
            <Navbar></Navbar>

          </Container>

        </div>

        
    )
}

export default Home;