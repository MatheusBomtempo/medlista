import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import miniAureolaLogo from "../../imgs/miniAureolaLogo.svg";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        MED<span className="logoBackgrounded">LISTA</span>
        <img className="miniLogo" src={miniAureolaLogo} alt="Logo" />
      </span>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#principal">INICIO</a>

        <a href="#ferramenta">ESPECIALIDADES</a>

        <a href="#contatos">SOBRE</a>

        <a href="#login">
          <FontAwesomeIcon id="user" icon={faCircleUser} />
        </a>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default Navbar;
