import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pizarron } from "../item";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainter = () => {
  const [producto, setProducto] = useState({});
  const { idDetalle } = useParams();

  useEffect(() => {
    pizarron.then((resp) =>
      setProducto(resp.find((prod) => prod.id   === idDetalle)));
  }, [idDetalle]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};
