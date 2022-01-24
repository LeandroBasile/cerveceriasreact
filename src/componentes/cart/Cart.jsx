import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartList } = useCartContext();

  return (
    <>
      {cartList.length === 0 ? (<div>
        <h2>No hay nada en el carrito</h2>
        <Link to="/"> <button>Ir a Catalogo</button>
        </Link>
        </div>
      ) : (
        <CartItem/>
      )}
    </>
  );
};
