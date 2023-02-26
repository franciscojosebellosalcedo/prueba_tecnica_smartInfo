//importacion de los componentes necesarios para el login
import React, { useState } from 'react';
// mcomponente del modal para los mensajes
import { Modal } from './Modal';
import { loginUser } from "../utils/api.user.js";
//componentes de react-router-dom nos, link: nos direccionara a una pagina de la app, useNavigate: hara lo mismo pero de otra forma
import { Link, useNavigate } from 'react-router-dom';

//componente login
export const LoginUser = () => {
  // este estado nos permite alamcenar lo que el usuario ingrese
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // estado del mensaje del componente Modal segun la accion
  const [messageModal, setMessageModal] = useState("");
  const navegate = useNavigate();
  // fn madejadora de lo que el usuario escriba y lo alamacenará en el estado user
  const handlerUser = (e) => {
    setUser(
      { ...user, [e.target.name]: e.target.value }
    );
  }
  // verifica si el usuario ha escrito algo o no
  const handlerFilds = () => {
    if (user.email.length === 0 || user.password.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  //limpiará los campos del login pero tambien establecera un nuevo estado paruser
  const clearFilds = () => {
    setUser(
      {
        email: "",
        password: ""
      }
    )
  }
  // permitira entra a la proxima vista 
  const signUp = async (e) => {
    e.preventDefault();
    try {
      if (handlerFilds()) {
        setMessageModal("Por favor llene los campos");
        //Hará posible la visualizacion del modal
        const containerModal = document.querySelector(".container_modal");
        containerModal.classList.add("see_modal");
      } else if (user.password.length < 8) {
        setMessageModal("La contraseña debe de tener mas de 8 caracteres");
        const containerModal = document.querySelector(".container_modal");
        containerModal.classList.add("see_modal");
      } else {
        const response = await loginUser(user.email, user.password);
        if (response.data.bool) {
          navegate("/registros");
        } else {
          setMessageModal(response.data.message);
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
