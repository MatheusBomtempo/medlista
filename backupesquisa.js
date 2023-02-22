import "./Pesquisa.css";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import { getDocs, collection } from "firebase/firestore";
import { database } from "../../firebase";
import User from "./User";

function Pesquisa() {
  const [ user, setUser] = useState({})
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState("")

  useEffect( () => {
    database.child('medicos2').on('value' , snapshot =>{
      if (snapshot.val() != null){
        setUser({
          ...snapshot.val()
        })
      }
    })
  }, [])

  useEffect( () => {
    setFilter(
      Object.values(user).filter((name) => 
        name.nome.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, user])
  console.log(search)

  return (
    <div className="App">
      <div className='container__bg'>
        <a target='_blank' href='https://www.youtube.com/channel/UCU2FA7I_Y9IeC6GJT6oavMg'>BLANK</a>
        <div className='container__search'>
          <input type='search' placeholder='Pesquisar' onChange={(e) => setSearch(e.target.value)}/>
        </div>
        {
          Object.values(user).length > 0 ?(
            filter.length <= 0 ?(
              <span>usuario nao encontrado</span>
            ):(
              filter.map((medicos2) => {
                return(
                  <User
                    id_user = {medicos2.id_user}
                    nome = {medicos2.nome}
                  />
                )
              })
            )
          ):(
            null
          )
        }
        
      </div>
    </div>
  );
      };

export default Pesquisa;