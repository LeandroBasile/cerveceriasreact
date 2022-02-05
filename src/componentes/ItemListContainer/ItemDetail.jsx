import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemContador from "../itemcontador/ItemContador";

export const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useCartContext();

  const [show, setShow] = useState(true);

  const onAdd = (contador) => {
    setShow(false);
    agregarAlCarrito({ ...producto, cantidad: contador });
  };

  return (
    <div className="cajaDetalle">
      <div className="detalle detalleProducto">
        <img className="imagenDetail" src={producto.fotodetalle} alt="" />
      </div>

      <div className="detalle detalleCompra">
        <h1>{producto.title}</h1>
        <h2>$ {producto.price}</h2>
        <h4>Informacion:</h4>
        <p>{producto.description}</p>
        <hr />
        {show ? (
          <ItemContador stock={producto.stock} onAdd={onAdd} />
        ) : (
          <div className="btnCompra">
            <Link to="/cart">
              <button type="button" className="btn btn-primary">
                Terminar la compra
              </button>
            </Link>
            <Link to="/">
              <button type="button" className="btn btn-primary">
                Seguir Comprando
              </button>
            </Link>
            <ItemContador stock={producto.stock} onAdd={onAdd} />
          </div>
        )}
      </div>
    </div>
  );
};
