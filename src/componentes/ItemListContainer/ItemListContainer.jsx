import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pizarron } from "../item";
import { ItemList } from "./ItemList";


export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();
  useEffect(() => {
    if (idCategoria){
      pizarron
      .then((resp) => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
    }else{
      pizarron
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
    }
    
  }, [idCategoria]);
  console.log(idCategoria)
  console.log(productos);

  return (
    <div className="listContainer">
      <h2>{saludo}</h2>

      {cargando ? (
        <div  className="spinner-border"role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};
