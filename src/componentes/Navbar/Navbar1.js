import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar1.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import miniaureola from "../../imgs/miniAureolaLogo.svg";

function Navbar1() {
  return (
    <Navbar className='barra'  fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='logo'><span className='med'>MED</span><span className='lista'>LISTA</span> <img src={miniaureola} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='item' href="#features">Início</Nav.Link>
            <Nav.Link className='item' href="#pricing">Sobre</Nav.Link>
            <NavDropdown title="Especialidades" id="collasible-nav-dropdown">
              <NavDropdown.Item className='item' href="#action/3.1">Oftalmologista</NavDropdown.Item>
              <NavDropdown.Item className='item' href="#action/3.2">
                Geriatra
              </NavDropdown.Item>
              <NavDropdown.Item className='item' href="#action/3.3">Cardiologista</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='item' href="#action/3.4">
                Outras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='nav-rigth'>
            <Nav.Link className='cadastro' href="#deets">Cadastre-se</Nav.Link>
            <Nav.Link className='item' eventKey={2} href="#memes">
              <FontAwesomeIcon id="user" icon={faCircleUser} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
    
    
    
    
    // <div className="Navbar">
    //   <span className="nav-logo">
    //     MED<span className="logoBackgrounded">LISTA</span>
    //     <img className="miniLogo" src={miniAureolaLogo} alt="Logo" />
    //   </span>

    //   <div className={`nav-items ${isOpen && "open"}`}>
    //     <a href="#principal">INICIO</a>

    //     <a href="#ferramenta">ESPECIALIDADES</a>

    //     <a href="#contatos">SOBRE</a>

    //     <a href="#login">
    //       <FontAwesomeIcon id="user" icon={faCircleUser} />
    //     </a>
    //   </div>

    //   <div
    //     className={`nav-toggle ${isOpen && "open"}`}
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
    //     <div className="bar"></div>
    //   </div>
    // </div>

