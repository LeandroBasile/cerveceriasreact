import React from "react";
import { useState } from "react";

function ItemContador({ stock, onAdd }) {
  const [contador, setContador] = useState(0);

  const sumarContador = () => {
    if (contador <= stock) {
      setContador(contador + 1);
    } else {
      alert("sin stock");
    }
  };

  const restarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  // const mostrarContador = () => {
  //     alert(contador)
  // }

  return (
    <div className="contador">
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={restarContador}
        >
          -
        </button>
        <h3>{contador}</h3>
        <button
          type="button"
          className="btn btn-success"
          onClick={sumarContador}
        >
          +
        </button>{" "}
        <br></br>
      </div>
      <div>
        <button
          type="button"
          className={
            contador === 0
              ? "btn btn-danger opacity-50 pe-none"
              : "btn btn-primary"
          }
          onClick={() => onAdd(contador)}
        >
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
}
export default ItemContador;
