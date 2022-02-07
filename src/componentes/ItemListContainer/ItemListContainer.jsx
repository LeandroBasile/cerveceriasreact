import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();

  const db = getFirestore();

  const respColl = collection(db, "items");
  const filtResp = idCategoria
    ? query(respColl, where("categoria", "==", idCategoria))
    : respColl;

  useEffect(() => {
    getDocs(filtResp)
      .then((resp) =>
        setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
  }, [filtResp]);

  return (
    <div className="listContainer">
      <h2>{saludo}</h2>

      {cargando ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};
