import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { peopleList } from "../utils/api.resgisters.js";
import { departamentsList } from "../utils/api.resgisters.js";
import { useNavigate } from 'react-router-dom';


export const Registers = () => {
  const [people, setPeople] = useState([]);
  const [departaments, setDepartaments] = useState([]);
  const [messageModal, setMessageModal] = useState("");
  const navigate = useNavigate();
  const [serchData, setSerchData] = useState("");


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

          <button onClick={() => navigate("/")} className='btn btn_cerrar'>Salir</button>

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
            <h1 className='info_title title_dep'>Dpt. Asignados</h1>
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
