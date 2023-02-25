import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';
import { peopleList } from "../utils/api.resgisters.js";
import { departamentsList } from "../utils/api.resgisters.js";


export const Registers = () => {
  const [people, setPeople] = useState([]);
  const [departaments, setDepartaments] = useState([]);
  const [messageModal, setMessageModal] = useState("");

  const getPeople = async () => {
    try {
      const response = await peopleList();
      setPeople(response.data.people);
      console.log(people)
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
            <p className="metod_serch">Buscar por documento o departamento</p>
            <form className='form_serch'>
              <input type="text" className='input_serch' placeholder='buscar...' />
              <button className='btn btn_serch'><FontAwesomeIcon className='icon_serch' icon={faMagnifyingGlass} /></button>
            </form>
          </div>

          <button className='btn btn_cerrar'>Salir</button>

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
                  people.map(person => (
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
                  departaments.map(departament => (
                    <tr key={departament.id_departamento}>
                      <td>{departament.id_departamento}</td>
                      <td>{departament.name_despatament}</td>
                      
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
