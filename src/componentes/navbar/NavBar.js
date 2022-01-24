import lupulo from "../../imgnavegador/lupulo.png";
import CartWidget from "../cart/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navegador">
      <ul className="menu">
        <li>
          <a href="index.html">Inicio </a>
        </li>
        <li>
          <a href="/#">Locales</a>
        </li>
        <li>
          <Link to="/">
            <img src={lupulo} alt="" />
          </Link>
        </li>

        <li>
          <Link to="/">Tienda</Link>
          <ul>
            <li>
              <Link to="/categoria/rubia">Doradas</Link>
            </li>
            <li>
              <Link to="/categoria/roja">Rojas</Link>
            </li>
            <li>
              <Link to="/categoria/negra">Negras</Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="/#">Contacto</a>
        </li>
        <li >
          <Link className="linkCartWid" to="/cart">
            <CartWidget className="carrito" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
