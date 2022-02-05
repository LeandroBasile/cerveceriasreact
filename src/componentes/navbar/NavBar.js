import CartWidget from "../cart/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navegador">
      <ul className="menu">
        
        <li>
          <Link to="/categoria/lager">Lagers</Link>
        </li>
        <li>
          <Link to="/">
            <img src='./lupulo.png' alt="" />
          </Link>
        </li>

        <li>
          <Link to="/categoria/ales">Ales</Link>
         
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
