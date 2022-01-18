import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemContador from "../itemcontador/ItemContador";

export const ItemDetail = ({ producto }) => {
  const [show, setShow] = useState(true);

  const onAdd = (contador) => {
    setShow(false);
    // sumarAlCarrito({...producto, cantidad:contador})
  };

  return (
    <div className="cajaDetalle">
      <div className="itemDetalle">
        <div className="detalle detalleProducto">
          <h2>{producto.title}</h2>
          <img className="imagenDetail" src={producto.foto} alt="" />
          <p>{producto.description}</p>
        </div>
        <div className="detalle detalleCompra">
          <h3>{producto.prise}</h3>
          {show ? (
            <ItemContador stock={producto.stock} onAdd={onAdd} />
          ) : (
            <div>
              <Link to="/cart">
                <button>Terminar la compra</button>
              </Link>
              <Link to="/">
                <button>Seguir Comprando</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
