import './Pesquisa.css';
import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'



const Pesquisa = () => {


  const [medico, setMedico] = useState([]);

  const todosMedicos = collection(db, "medicos2");

  useEffect(() => {
      const getTodosMedicos = async () => {
          try{
          const data = await getDocs(todosMedicos);
          const filteredData = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
          }));
          setMedico(filteredData);
      } catch (err){
          console.error(err);
      }};
      getTodosMedicos();


  }, []);



    

    return(
        
          <Container className=''>
            <div className='textInput tamanho'>
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

            
            <div className='resultados'>
                
                  {medico.map((medicos2) => (
                      <div className='box'>
                        <div className='flexfoto'>
                            <div className='foto'>
                              <src></src>
                            </div>
                            
                            <div className='header'>
                              <div className='headerinner'>
                                <h4 className='especiali'>{medicos2.especialidade}</h4>
                                <h4 className='crm'>CRM:{medicos2.CRM}</h4>
                              </div>
                                <h2>Dr.<span> {medicos2.nome}</span></h2>
                              <div className='estrelinhas'>
                                <FontAwesomeIcon id="estrela" icon={faStar} /><FontAwesomeIcon id="estrela" icon={faStar} /><FontAwesomeIcon id="estrela" icon={faStar} /><FontAwesomeIcon id="estrela" icon={faStar} /><FontAwesomeIcon id="estrela" icon={faStar} />
                                10 opniôes
                              </div>
                            </div>
                          </div>
                          
                          <div className='atributos'>
                                <h2 className='local'>Local:<span className='espacinho'>{medicos2.local}</span></h2>
                                <h3>Atende:<span className='espacinho'>{medicos2.atende}</span></h3>
                                <h3>Convênios:<span className='espacinho'>{medicos2.convênio}</span></h3>
                          </div>
                      </div> 
))}
              </div>
           





          </Container>


    );
}

export default Pesquisa;
