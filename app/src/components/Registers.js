import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';


export const Registers = () => {
  return (
    <div>
      {/* <Modal message="hola"/> */}
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


              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  )
}
