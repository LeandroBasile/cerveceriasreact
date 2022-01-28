import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemContador from "../itemcontador/ItemContador";

export const ItemDetail = ({ producto }) => {

  const {agregarAlCarrito} = useCartContext()



  const [show, setShow] = useState(true);

  const onAdd = (contador) => {
    setShow(false);
    agregarAlCarrito({...producto, cantidad: contador})
  };

  

  return (
    <div className="cajaDetalle">
      <div className="itemDetalle">
        <div className="detalle detalleProducto">
          <h2>{producto.title}</h2>
          <img className="imagenDetail" src={producto.imagenUrl} alt="" />
        </div>
        <div className="detalle detalleCompra">
          <h3>$ {producto.price}</h3>
          <p>Detalle: {producto.description}</p>
          
          {show ? (
            <ItemContador stock={producto.stock} onAdd={onAdd} />
          ) : (
            <div className="btnCompra">
              
              <Link to="/cart">
                <button type="button" className="btn btn-primary">Terminar la compra</button>
              </Link>
              <Link to="/">
                <button type="button" className="btn btn-primary" >Seguir Comprando</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
