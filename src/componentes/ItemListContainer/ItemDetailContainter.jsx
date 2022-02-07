import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainter = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);

  const db = getFirestore();
  const filtProdId = id ? doc(db, "items", id) : setCargando(true);

  useEffect(() => {
    getDoc(filtProdId)
      .then((resp) => {
        setProducto({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
  }, [filtProdId]);

  return (
    <div className="itemDetalContainer">
      {cargando ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};
