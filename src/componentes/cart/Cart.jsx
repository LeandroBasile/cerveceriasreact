import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CartForm } from "./CartForm";
import React from "react";

export const Cart = () => {
  const { cartList } = useCartContext();

  return (
    <div className="carrito">
      {cartList.length === 0 ? (
        <div className="carritoVacio">
          <h2>EL CARRITO SE ENCUENTRA VACIO</h2>
          <Link to="/">
            {" "}
            <button type="button" className="btn btn-primary">Ir a Catalogo</button>
          </Link>
        </div>
      ) : (
        <div>
          
          <CartItem />
          <CartForm />
        </div>
      )}
    </div>
  );
};
