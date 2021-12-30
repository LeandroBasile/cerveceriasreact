import React from "react";
import { useState, useEffect } from "react";
import { pizarron } from "../item";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)  
  useEffect(() => {
    pizarron
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(()=>setCargando(false))
  }, []);

  console.log(productos);

  return (
    <div>
      <h2>{saludo}</h2>

      {cargando ? <h4>cargando...</h4>:     <ItemList productos={productos}/>
}

    
    </div>
  );
};
