import React from 'react';
import { Link } from 'react-router-dom';
// componete menu
export const Menu = () => {
  return (
    <header className='header'>
      <nav className='menu menu_app'>
        <h1 className='menu_title' >
          APP FCO
          <span className='menu_container_figure'>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </h1>
        <ul className='menu_list list'>
          <li className='list_item'><Link to={"#"}>Dasbboard</Link></li>
          <li className='list_item'><Link to={"#"}>Nuevo registro</Link></li>
          <li className='list_item'><Link to={"#"}>Sobre la app</Link></li>
        </ul>
      </nav>
    </header>
  )
}
