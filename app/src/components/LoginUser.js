import React, { useState } from 'react';
import { Modal } from './Modal';
import axion from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../utils/api.user";

export const LoginUser = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [messageModal, setMessageModal] = useState("");
  const navegate = useNavigate();
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
  const clearFilds = () => {
    setUser(
      {
        email: "",
        password: ""
      }
    )
  }
  const signUp = async (e) => {
    e.preventDefault();
    try {      
      if (handlerFilds()) {
        setMessageModal("Por favor llene los campos");
        const containerModal = document.querySelector(".container_modal");
        containerModal.classList.add("see_modal");
      } else if (user.password.length < 8) {
        setMessageModal("La contraseña debe de tener mas de 8 caracteres");
        const containerModal = document.querySelector(".container_modal");
        containerModal.classList.add("see_modal");
      } else {
        const result = await login(user);
        setUser({
          email: "",
          password: ""
        })
        if (result.data.bool) {
          navegate("/registros");
        } else {
          setMessageModal(result.data.message);
          const containerModal = document.querySelector(".container_modal");
          containerModal.classList.add("see_modal");
        }
      }

    } catch (error) {
      console.log(error);
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
          <Link className='link_login' to={'/'}>Registrarse</Link>
          <button onClick={(e) => signUp(e)} className='btn btn_login'>Iniciar</button>
        </form>
      </div>
    </div>
  )
}
