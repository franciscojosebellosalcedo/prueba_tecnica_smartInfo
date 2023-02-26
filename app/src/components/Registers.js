import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';
import { peopleList } from "../utils/api.resgisters.js";
import { departamentsList } from "../utils/api.resgisters.js";
import { useNavigate } from 'react-router-dom';
import { getPerson } from "../utils/api.resgisters.js";


export const Registers = () => {
  const [people, setPeople] = useState([]);
  const [departaments, setDepartaments] = useState([]);
  const [messageModal, setMessageModal] = useState("");
  const navigate=useNavigate();
  const [serchData,setSerchData]=useState("");

  const [person,setPerson]=useState([]);
  const [departament,setDepartament]=useState([]);

  const validationSerch=()=>{
    if(serchData.length===0){
      return true;
    }else{
      return false;
    }
  }

  const serchPerson= async(e)=>{
    e.preventDefault();
    if(validationSerch()){
      setMessageModal("Ingrese un documento por favor");
      const containerModal = document.querySelector(".container_modal");
      containerModal.classList.add("see_modal");
    }else{
      const response=await getPerson(serchData);
      console.log(response);
      setPerson(response.data.person);
      setDepartament(response.data.departament);
      console.log(person);
      console.log(departament);
    }
  }

  const getPeople = async () => {
    try {
      const response = await peopleList();
      setPeople(response.data.people);
    } catch (error) {
      setMessageModal("Se produjo un error en servidor");
      const containerModal = document.querySelector(".container_modal");
      containerModal.classList.add("see_modal");
    }
  }

  const getDepartaments = async () => {
    try {
      const response = await departamentsList();
      console.log(response)
      setDepartaments(response.data.departaments);
      console.log(departaments)
    } catch (error) {
      setMessageModal("Se produjo un error en servidor");
      const containerModal = document.querySelector(".container_modal");
      containerModal.classList.add("see_modal");
    }
  }

  // const handlerValueSerch=(e)=>{
  //   setSerchData(e.target.value);
  //   if(serchData.length===0){
  //     setDepartament([]);
  //     setPerson([]);
  //   }
  // }

  useEffect(() => {
    getPeople();
    getDepartaments();
  }, []);
  return (
    <div>
      <Modal message={messageModal} />
      <div className='container'>
        <h1 className='container_title'>Registros</h1>
        <div className='container_action'>
          <div className='container_filter'>
            <p className="metod_serch">Buscar por documento</p>
            <form className='form_serch'>
              <input value={serchData} onChange={(e)=>setSerchData(e.target.value)} type="text" className='input_serch' placeholder='buscar...' />
              <button onClick={(e)=>serchPerson(e)} className='btn btn_serch'><FontAwesomeIcon className='icon_serch' icon={faMagnifyingGlass} /></button>
            </form>
          </div>

          <button onClick={()=>navigate("/")} className='btn btn_cerrar'>Salir</button>

        </div>
        <section className='container_info'>
          <div className='container_people info'>
            <h1 className='info_title'>Personas</h1>
            <table>
              <thead>
                <tr>
                  <th><td>Nombres</td></th>
                  <th><td>Apellidos</td></th>
                  <th><td>Ocupación</td></th>
                  <th><td>Documento</td></th>
                </tr>
              </thead>
              <tbody>
                {
                 person.length!=1 && serchData==="" ? people.map(person => (
                    <tr key={person.document}>
                      <td>{person.name}</td>
                      <td>{person.last_name}</td>
                      <td>{person.ocupation}</td>
                      <td>{person.document}</td>
                    </tr>
                  ))
                  :
                  person.map(person => (
                    <tr key={person.document}>
                      <td>{person.name}</td>
                      <td>{person.last_name}</td>
                      <td>{person.ocupation}</td>
                      <td>{person.document}</td>
                    </tr>
                  ))   
                }
              </tbody>
            </table>

          </div>
          <div className='container_departament info'>
            <h1 className='info_title'>Dpt. Asignados</h1>
            <table>
              <thead>
                <tr>
                  <th><td>Codigo</td></th>
                  <th><td>Nombre</td></th>
                </tr>
              </thead>
              <tbody>
                {
                  departament.length!=1 && serchData===""?
                  departaments.map(departament => (
                    <tr key={departament.id_departamento}>
                      <td>{departament.id_departamento}</td>
                      <td>{departament.name_despatament}</td>
                      
                    </tr>

                  ))
                  :
                  departament.map(dep => (
                    <tr key={dep.id_departamento}>
                      <td>{dep.id_departamento}</td>
                      <td>{dep.name_despatament}</td>
                      
                    </tr>

                  ))
                }

              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  )
}
