import React from 'react';
//importamos los componentes necesarios para este
// react-router-dom permitira que en la app puedan visitar varias paginas segun el usuario y las vistas
import {
  BrowserRouter,Routes,Route
} from 'react-router-dom';
import {PageLogin} from '../pages/PageLogin.js';
import { PageNotFound } from '../pages/PageNotFound.js';
import {PageRegistersPerson} from '../pages/PageRegisters';
import { PageRegisterUser } from '../pages/PageRegisterUser.js';

// enrutamiento de esta app
export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageRegisterUser/>}/>
        <Route path='/login' element={<PageLogin/>}/>
        <Route path='/registros' element={<PageRegistersPerson/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
