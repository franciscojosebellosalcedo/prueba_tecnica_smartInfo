//importamos a los componentes y funciones necesarias para este
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Link, useNavigate } from 'react-router-dom';
import { regiterUser } from "../utils/api.user.js";

// Componete RegisterUser
export const RegisterUser = () => {
    //estado de alamecenamiento de que se escriba en los inputs
    const [newUser, setNewUser] = useState({
        name: "",
        last_name: "",
        email: "",
        password: ""
    });
// estado de los mensjaes del Modal
    const [messageModal, setMessageModal] = useState("");
    const handlerUser = (e) => {
        //actualizacion de datos del estado segun los inputs
        setNewUser(
            { ...newUser, [e.target.name]: e.target.value }
        );
    }
// verifica si el usuario escribio algo o no
    const handlerFilsd = () => {
        if (newUser.name.length === 0 || newUser.last_name.length === 0 || newUser.email.length === 0 || newUser.password.length === 0) {
            return true;
        } else {
            return false;
        }
    }
// guardara un nuevo usuario
    const saveNewUser = async (e) => {
        e.preventDefault();
        if (handlerFilsd()) {
            setMessageModal("Por favor llene todos los campos");
            const containerModal = document.querySelector(".container_modal");
            containerModal.classList.add("see_modal");
        } else if (newUser.password.length < 8) {
            setMessageModal("La contraseña debe de tener mas de 8 caracteres");
            const containerModal = document.querySelector(".container_modal");
            containerModal.classList.add("see_modal");
        } else {
            const response = await regiterUser(newUser);
            if (response.data.bool) {
                setMessageModal(response.data.message);
                const containerModal = document.querySelector(".container_modal");
                containerModal.classList.add("see_modal");
                setNewUser({
                    name: "",
                    last_name: "",
                    email: "",
                    password: ""
                })
            }else{
                setMessageModal(response.data.message);
                const containerModal = document.querySelector(".container_modal");
                containerModal.classList.add("see_modal");

            }
        }

    }
    return (
        <div className='login'>
            <Modal message={messageModal} />
            <div className='login_container_img'>
                <img className='login_img' src={require('../imgs/img_register_user.png')} alt="imagen de ilustración" />
            </div>
            <div className="login_container_form">
                <form className='login_form form '>
                    <h1 className='login_form_title'>Registrate</h1>
                    <p className='login_paragraph'>Por favor digite su  nombre, apellido, correo y contraseña para que pueda registrarse.</p>
                    <div className='form_container_input'>
                        <label className='input_title' htmlFor="user_name">Nombres</label>
                        <input onChange={(e) => handlerUser(e)} value={newUser.name} className='login_input' type="text" name="name" id="user_name" placeholder='Ingrese su nombre' />
                    </div>
                    <div className='form_container_input'>
                        <label className='input_title' htmlFor="user_last_name">Apellidos</label>
                        <input onChange={(e) => handlerUser(e)} value={newUser.last_name} className='login_input' type="text" name="last_name" id="user_last_name" placeholder='Ingrese su apellido' />
                    </div>
                    <div className='form_container_input'>
                        <label className='input_title' htmlFor="user_email">Correo</label>
                        <input onChange={(e) => handlerUser(e)} value={newUser.email} className='login_input' type="email" name="email" id="user_email" placeholder='Ingrese su correo' />
                    </div>
                    <div className='form_container_input'>
                        <label className='input_title' htmlFor="user_password">Contraseña</label>
                        <input onChange={(e) => handlerUser(e)} value={newUser.password} className='login_input' type="password" name="password" id="user_password" placeholder='Ingrese su contraseña' />
                    </div>
                    <Link className='link_login' to={'/login'}>Ir al login</Link>
                    <button onClick={(e) => saveNewUser(e)} className='btn btn_login'>Guardar</button>
                </form>
            </div>
        </div>
    )
}
