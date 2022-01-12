import React from "react";
import ItemContador from "../itemcontador/ItemContador";

export const ItemDetail = ({ producto }) => {
  return (
    <div className="cajaDetalle">
      <div className="itemDetalle">
        <div className="detalle detalleProducto">
          <h2>{producto.title}</h2>
          <img src={producto.foto} alt="" />
          <p>{producto.description}</p>
        </div>
        <div className="detalle detalleCompra">
          <h3>{producto.prise}</h3>
          <ItemContador />
        </div>
      </div>
    </div>
  );
};
