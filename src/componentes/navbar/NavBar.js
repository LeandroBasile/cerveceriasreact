import React from 'react'
import lupulo from '../../imgnavegador/lupulo.png'
import CartWidget from "../cart/CartWidget"
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navegador"> 
        <ul>
          <li>
            <a href="index.html">Inicio </a>
          </li>
          <li>
            <a href="">Locales</a>
          </li>
          <li>
            <Link to="/"
              ><img src={lupulo} alt=""
            /></Link>
          </li>

          <li>
            <Link to="/categoria/rubia">rubia</Link>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
        <Link to="/cart">
        <CartWidget className="carrito" />
        </Link>
      </nav> 
    )
}

export default Navbar