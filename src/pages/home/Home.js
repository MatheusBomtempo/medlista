import "./Home.css";

import Navbar from "../../componentes/Navbar/Navbar";
import aureola1 from "../../imgs/aurela.svg";
import fotoMedico from "../../imgs/fotoMedico.png";
import { Container, Row, Col, Form, Input } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Selects from "../../componentes/Select/Selects";
import { Avatar, Card, Space } from "antd";

function Home() {
  return (
    <div>
      <div className="aurea1 ">
        <img src={aureola1} alt="Logo" />
      </div>

      <Selects placeholder="Dr. Guilherme Bomtempo"></Selects>

      <h2 className="titulo2">Médicos recomendados</h2>

      <div className="medicosRecomendados">
        <Space direction="responsive" size={25}>
          <Card
            title="Psiquiatra"
            style={{ width: 360, textAlign: "center", borderRadius: "50px" }}
          >
            <Row>
              <Col span={12}>
                <Avatar
                  className="avatar"
                  src={<img src={fotoMedico} alt="avatar" />}
                />
              </Col>
              <Col className="nomeMedico" span={12}>
                Dr. Guilherme Bomtempo
              </Col>
            </Row>

            <div className="textoCard">
              <p>Contatos: (32)98805-7932</p>
              <p>Locais: Ibiapaba, Santa Casa, SAMU</p>
            </div>
          </Card>
          <Card
            title="Psiquiatra"
            style={{ width: 360, textAlign: "center", borderRadius: "50px" }}
          >
            <Row>
              <Col span={12}>
                <Avatar
                  className="avatar"
                  src={<img src={fotoMedico} alt="avatar" />}
                />
              </Col>
              <Col className="nomeMedico" span={12}>
                Dr. Guilherme Bomtempo
              </Col>
            </Row>

            <div className="textoCard">
              <p>Contatos: (32)98805-7932</p>
              <p>Locais: Ibiapaba, Santa Casa, SAMU</p>
            </div>
          </Card>
          <Card
            title="Psiquiatra"
            style={{ width: 360, textAlign: "center", borderRadius: "50px" }}
          >
            <Row>
              <Col span={12}>
                <Avatar
                  className="avatar"
                  src={<img src={fotoMedico} alt="avatar" />}
                />
              </Col>
              <Col className="nomeMedico" span={12}>
                Dr. Guilherme Bomtempo
              </Col>
            </Row>

            <div className="textoCard">
              <p>Contatos: (32)98805-7932</p>
              <p>Locais: Ibiapaba, Santa Casa, SAMU</p>
            </div>
          </Card>
        </Space>
      </div>

      {/* <Container className="App">

        <div className='textInput tamanho'>

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

            </div>
      </Container> */}

      <Container fluid>
        <Navbar></Navbar>
      </Container>
    </div>
  );
}

export default Home;
