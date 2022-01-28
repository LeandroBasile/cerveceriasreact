import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { pizarron } from "../item";
import { ItemList } from "./ItemList";
import {collection, getDocs, getFirestore, query} from 'firebase/firestore'


export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  //const [producto, setProducto] = useState({})
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();
  useEffect(() => {

      const db = getFirestore()

      //const queryProducto = doc(db,'items','5OuUwqkNlmhaRVg42XIK')
      //getDoc(queryProducto)
      //.then(resp => setProducto({id: resp.id, ...resp.data}))
      


      const queryCollection = query(collection(db, 'items'))
      getDocs(queryCollection)
      .then(res=>setProductos(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))
      .catch(err => err)
      .finally(()=>setCargando(false))
     
    //if (idCategoria){
      //pizarron
      //.then((resp) => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
      //.catch((err) => console.log(err))
      //.finally(() => setCargando(false));
    //}else{
      //pizarron
      //.then((resp) => setProductos(resp))
      //.catch((err) => console.log(err))
      //.finally(() => setCargando(false));
    //}
    
  }, [idCategoria]);
 console.log(productos)
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
