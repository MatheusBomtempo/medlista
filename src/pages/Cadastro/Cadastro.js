import "./Cadastro.css";

import Navbar from "../../componentes/Navbar/Navbar1";
import aureola1 from "../../imgs/aurela.svg";

import { Container, Row, Col, Form, Input } from "react-bootstrap";
import { Auth } from "../../componentes/auth/Auth";


function Cadastro() {
  return (
    
      

      <Container>
        <Row >  
        
        <div className="containerr">
            <div className="innerCont">
                <h1 className="titulo">Cadastro</h1>
                    <div className="separador">
                        <div className="left">
                            <Auth
                            placeholderemail='piroca'
                            placeholderuser='piroca'
                            placeholderpass='piroca'
                            placeholderpass2='piroca'
                            />
                        </div>
                        <div>
                        <Auth
                            placeholderemail='piroca'
                            placeholderuser='piroca'
                            placeholderpass='piroca'
                            placeholderpass2='piroca'
                            />
                        </div>
                    </div>
            </div>

        </div>
        
        </Row>
      </Container>




    //   <Container fluid>
    //     <Navbar></Navbar>
    //   </Container>
    
  );
}

export default Cadastro;
