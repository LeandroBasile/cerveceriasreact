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

  useEffect(() => {
    const db = getFirestore();

    // const queryProducto = doc(db, "items", id );
    // getDoc(queryProducto)
    //   .then((resp) =>{ setProducto({ id: resp.id, ...resp.data()})})
    //   .finally(() => setCargando(false));

    

    if (idCategoria){
      const queryCollection = query(collection(db, 'items'),where('categoria', '==', idCategoria))
      getDocs(queryCollection)
    .then((resp) => setProductos(resp.docs.map(prod=>({id: prod.id, ...prod.data()}))))
    .catch((err) => console.log(err))
    .finally(() => setCargando(false));
    }else{
      const queryCollection = query(collection(db, 'items'))
      getDocs(queryCollection)
      .then(res=>setProductos(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))
      .catch(err=>err)
      .finally(()=>setCargando(false))
    }
  }, [idCategoria]);

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
