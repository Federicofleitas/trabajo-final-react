import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {


  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink class="navbar-brand" to='/'>
        <img src="/logo-motostore.png" alt="Bootstrap" width="100" height="auto"></img>
      </NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink class="nav-link" to='/'>Inicio</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to='/nosotros'>Nosotros</NavLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cilindrada
            </a>
            <ul class="dropdown-menu">
              <li><NavLink class="dropdown-item" to='/cilindrada/250cc'>250cc</NavLink></li>
              <li><NavLink class="dropdown-item" to='/cilindrada/300cc'>300cc</NavLink></li>
            </ul>
          </li>



          
        </ul>

      </div>
      <NavLink to='/cart'><CartWidget /></NavLink>
    </nav>
  )
}

export default Navbar