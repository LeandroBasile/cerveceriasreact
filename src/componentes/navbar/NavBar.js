import React from 'react'
import lupulo from '../../imgnavegador/lupulo.png'
import CartWidget from "../cart/CartWidget"

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
            <a href=""
              ><img src={lupulo} alt=""
            /></a>
          </li>

          <li>
            <a href="l">Tienda</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
        <CartWidget className="carrito" />
      </nav> 
    )
}

export default Navbar