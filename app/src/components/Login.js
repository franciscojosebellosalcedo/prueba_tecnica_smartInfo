import React, { useState } from 'react';
import { Modal } from './Modal';

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [messageModal, setMessageModal] = useState("");
  const handlerUser = (e) => {
    setUser(
      { ...user, [e.target.name]: e.target.value }
    );
  }
  const handlerFilds = () => {
    if (user.email.length === 0 || user.password.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  const signUp = (e) => {
    e.preventDefault();
    if (handlerFilds()) {
      setMessageModal("Por favor llene los campos")
      const containerModal = document.querySelector(".container_modal");
      containerModal.classList.add("see_modal");
    }
  }
  return (
    <div className='login'>
      <Modal message={messageModal} />
      <div className='login_container_img'>
        <img className='login_img' src={require('../imgs/login_img.jpg')} alt="imagen de ilustración" />
      </div>
      <div className="login_container_form">
        <form className='login_form form '>
          <h1 className='login_form_title'>Login</h1>
          <p className='login_paragraph'>Por favor digite su correo y contraseña para que tenga acceso a la aplicacion.</p>
          <div className='form_container_input'>
            <label className='input_title' htmlFor="user_email">Correo</label>
            <input value={user.email} onChange={(e) => handlerUser(e)} className='login_input' type="email" name="email" id="user_email" placeholder='Ingrese su correo' />
          </div>
          <div className='form_container_input'>
            <label className='input_title' htmlFor="user_password">Contraseña</label>
            <input value={user.password} onChange={(e) => handlerUser(e)} className='login_input' type="password" name="password" id="user_password" placeholder='Ingrese su contraseña' />
          </div>
          <button onClick={(e) => signUp(e)} className='btn btn_login'>Iniciar</button>
        </form>
      </div>
    </div>
  )
}
