import React from "react";
import { useState } from "react";
import bootstrap from "bootstrap";

function ItemContador() {
  const [contador, setContador] = useState(0);

  const sumarContador = () => {
    setContador(contador + 1);
  };

  const restarContador = () => {
      if (contador>0){
    setContador(contador - 1);
      }
  };

  const mostrarContador = () => {
      alert(contador)
  }

  return (
    <div className="contador">
      <div>
        <button type="button" class="btn btn-danger" onClick={restarContador}>-</button>
        <text>{contador}</text>
        <button type="button" class="btn btn-success" onClick={sumarContador}>+</button> <br></br>
      </div>
      <div>
        <button type="button" class="btn btn-primary" onClick={mostrarContador}>Agregar a Carrito</button>
      </div>
    </div>
  );
}
export default ItemContador;
