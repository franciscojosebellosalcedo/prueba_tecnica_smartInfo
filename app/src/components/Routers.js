import React from 'react';
import {
  BrowserRouter,Routes,Route
} from 'react-router-dom';
import {PageIndex} from '../pages/PageIndex.js';
import { PageNotFound } from '../pages/PageNotFound.js';
import {PageRegisters} from '../pages/PageRegisters';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageIndex/>}/>
        <Route path='/registros' element={<PageRegisters/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
