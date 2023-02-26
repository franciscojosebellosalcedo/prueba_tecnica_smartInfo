import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
//componete modal el cual recibe un props que seré en este caso el mensaje que se mostrará
export const Modal = (props) => {
  //cerrá el modal 
  const handlerModal=()=>{
    const containerModal=document.querySelector(".container_modal");
    containerModal.classList.remove("see_modal");
  }
  return (
    <div className='container_modal'>
      <div className='modal'>
        <h1 className='modal_title'>Mensaje</h1>
        <span onClick={()=>handlerModal()} className='modal_exit'><FontAwesomeIcon icon={faXmark}/></span>
        <p className='modal_message'>{props.message}</p>
      </div>
    </div>
  )
}
