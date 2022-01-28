import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { pizarron } from "../item";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainter = () => {


  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore()
    const queryProducto = doc(db,'items', id)
    getDoc(queryProducto)
    .then((resp) => setProducto({id:resp.id, ...resp.data()}))
    .catch(err=>err)
    
    
  }, [id]);
  

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};
