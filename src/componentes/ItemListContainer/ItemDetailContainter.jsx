import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { pizarron } from "../item";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainter = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const db = getFirestore();

    if(id){
    const queryProducto = doc(db, "items", id);
    getDoc(queryProducto)
      .then((resp) => {
        setProducto({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
    }else{
      setCargando(true)
    }
      
  }, [id]);

  console.log(producto);
  return (
    <div>
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
