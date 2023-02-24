import React, { useState } from 'react';

export const Login = () => {
  return (
    <div className='login'>
      <div className='login_container_img'>
        <img className='login_img' src={require('../imgs/login_img.jpg')} alt="imagen de ilustración" />
      </div>
      <div className="login_container_form">
        <form className='login_form form '>
          <h1 className='login_form_title'>Login</h1>
          <p className='login_paragraph'>Por favor digite su correo y contraseña para que tenga acceso a la aplicacion.</p>
          <div className='form_container_input'>
            <label className='input_title' htmlFor="user_email">Correo</label>
            <input className='login_input' type="email" name="email" id="user_email" placeholder='Ingrese su correo' />
          </div>
          <div className='form_container_input'>
            <label className='input_title' htmlFor="user_password">Contraseña</label>
            <input className='login_input' type="password" name="password" id="user_password" placeholder='Ingrese su contraseña' />
          </div>
          <button className='btn btn_login'>Iniciar</button>
        </form>
      </div>
    </div>
  )
}
