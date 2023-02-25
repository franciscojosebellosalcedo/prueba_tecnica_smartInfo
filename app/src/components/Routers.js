import React from 'react';
import {
  BrowserRouter,Routes,Route
} from 'react-router-dom';
import {PageLogin} from '../pages/PageLogin.js';
import { PageNotFound } from '../pages/PageNotFound.js';
import {PageRegistersPerson} from '../pages/PageRegisters';
import { PageRegisterUser } from '../pages/PageRegisterUser.js';

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
