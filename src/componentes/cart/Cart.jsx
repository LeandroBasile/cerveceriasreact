import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useState } from "react";

export const Cart = () => {
  const { cartList, total } = useCartContext();
  const[datoInput, setDatoInput]= useState({nombre:'',email:'',tel:''})
  
  
  const realizarCompra = async (e) => {

    e.preventDefault()
    let orden = {};

    orden.buyer = datoInput;
    orden.total = total();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const precio = parseInt(cartItem.price) * parseInt(cartItem.cantidad);
      const cantidad = cartItem.cantidad
      return { id, nombre, precio , cantidad };
    });

    const db = getFirestore();

    const ordenesCollecion = collection(db, "ordenes");
    await addDoc(ordenesCollecion, orden)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    const queryCollection = collection(db, "items");

    const queryActualizarStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActualizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).cantidad,
          })
        )
      )

      .catch((err) => console.log(err))
      .finally(() => setDatoInput({nombre:'',email:'',tel:''}));
      
    batch.commit();
    
  };

  function manejandoCambios(e){
    // console.log(e.target.name)
    // console.log(e.target.value)
    setDatoInput(
      {...datoInput,
      [e.target.name]: e.target.value}
    )
  }

  console.log(datoInput)

  return (
    <>
      {cartList.length === 0 ? (
        <div>
          <h2>No hay nada en el carrito</h2>
          <Link to="/">
            {" "}
            <button>Ir a Catalogo</button>
          </Link>
         </div>
      ) : (
        <div>
          <form onSubmit={realizarCompra}>
            <input type="nombre" name="nombre" placeholder="Nombre" onChange={manejandoCambios} value={datoInput.nombre}></input>
            <input type="email" name="email" placeholder="email" onChange={manejandoCambios}value={datoInput.email}></input>
            <input type="tel" name="tel" placeholder="Tel" onChange={manejandoCambios}value={datoInput.tel}></input>
          
          <button onSubmit={realizarCompra}>Realizar Compra</button>
            
          </form>
          <CartItem />
        </div>
      )}
    </>
  );
};
