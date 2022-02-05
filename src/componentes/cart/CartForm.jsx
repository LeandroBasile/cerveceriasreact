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
import { Navigate, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const CartForm = () => {
  const [datoInput, setDatoInput] = useState({
    nombre: "",
    edad: "",
    email: "",
    emailDos: "",
    tel: "",
  });
  const { cartList, total, setOrden, orden } = useCartContext();

  const navigate = useNavigate()




  const [cargando, setCargando] = useState(true);

  const [error, setError] = useState("");

  const datosAValidar = [
    datoInput.nombre,
    datoInput.edad,
    datoInput.email,
    datoInput.emailDos,
    datoInput.tel,
  ];

  const realizarCompra = async (e) => {
    e.preventDefault();
    let orden = {};

    orden.buyer = datoInput;
    orden.total = total();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const precio = parseInt(cartItem.price) * parseInt(cartItem.cantidad);
      const cantidad = cartItem.cantidad;
      return { id, nombre, precio, cantidad };
    });

    if (datosAValidar.includes("")) {
      setError("Debe completar todos los datos");
    }
    if (datoInput.tel.length < 8 || datoInput.tel.length > 10) {
      setError("El numero telefonico es incorrecto");
    }
    if (datoInput.email !== datoInput.emailDos) {
      setError("El email es incorrecto");
    } if(datoInput.edad < 18){
      setError('La venta esta prohibida a menores de 18 Años')
    } else {
      const db = getFirestore();

      const ordenesCollecion = collection(db, "ordenes");
      await addDoc(ordenesCollecion, orden)
        .then((resp) => setOrden(resp.id))
        .catch((err) => console.log(err))
        .finally(() => navigate('/comprafinal') );

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

        .catch((err) => console.log(err));

      batch.commit();
    }

    setDatoInput({
      nombre: "",
      email: "",
      emailDos: "",
      tel: "",
    });
  };

  function manejandoCambios(e) {
    setDatoInput({ ...datoInput, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={realizarCompra}>
        <input
          type="nombre"
          name="nombre"
          placeholder="Nombre"
          onChange={manejandoCambios}
          value={datoInput.nombre}
        ></input>
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          onChange={manejandoCambios}
          value={datoInput.edad}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={manejandoCambios}
          value={datoInput.email}
        ></input>
        <input
          type="email"
          name="emailDos"
          placeholder="email"
          onChange={manejandoCambios}
          value={datoInput.emailDos}
        ></input>
        <input
          type="tel"
          name="tel"
          placeholder="15"
          className="tel"
          onChange={manejandoCambios}
          value={datoInput.tel}
        ></input>

        <button type="button" className="btn btn-primary" onSubmit={realizarCompra}>Realizar Compra</button>

        <div>
          
          <h2>{error && error}</h2>
        </div>
      </form>
    </div>
  );
};
