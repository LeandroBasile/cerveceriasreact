import React from "react";
import { useCartContext } from "../context/CartContext";

export const CompraFinal = () => {
  const { orden } = useCartContext();
 


  return (
    <div className="compraFinal">
      <h2>Gracias por su compra!</h2>
      <h3>{orden && `Su numero de orden es: ${orden.id}`}</h3>
      <h3>{orden && `El monto a abonar es de: ${orden.total}`}</h3>
    </div>
  );
};
