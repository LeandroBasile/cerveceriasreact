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
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const CartForm = () => {
  const [datoInput, setDatoInput] = useState({
    nombre: "",
    edad: "",
    email: "",
    emailDos: "",
    tel: "",
  });
  const { cartList, total, setOrden, vaciarCarrito } = useCartContext();

  const navigate = useNavigate();

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
    let ordenes = {};

    ordenes.buyer = datoInput;

    ordenes.total = total();

    ordenes.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.title;
      const precio = parseInt(cartItem.price) * parseInt(cartItem.cantidad);

      const cantidad = cartItem.cantidad;

      return { id, nombre, precio, cantidad };
    });

    if (datosAValidar.includes("")) {
      setError("Los campos se encuentran incompletos");
      return;
    }
    if (datoInput.tel.length < 8 || datoInput.tel.length > 10) {
      setError("El numero telefonico es incorrecto");
      return;
    }
    if (datoInput.email !== datoInput.emailDos) {
      setError("El email es incorrecto");
      return;
    }
    if (datoInput.edad < 18) {
      setError("La venta esta prohibida a menores de 18 Años");
      return;
    } else {
      const db = getFirestore();

      const ordenesCollecion = collection(db, "ordenes");

      await addDoc(ordenesCollecion, ordenes)
        .then((resp) => setOrden({ id: resp.id, total: ordenes.total }))
        .then(() => vaciarCarrito())

        .catch((err) => console.log(err))
        .finally(() => navigate("/comprafinal"));

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
      <form className="formCompra" onSubmit={realizarCompra}>
        <input
          id="input"
          type="nombre"
          name="nombre"
          placeholder="Nombre"
          onChange={manejandoCambios}
          value={datoInput.nombre}
        ></input>
        <input
          id="input"
          type="number"
          name="edad"
          placeholder="Edad"
          onChange={manejandoCambios}
          value={datoInput.edad}
        ></input>
        <input
          id="input"
          type="email"
          name="email"
          placeholder="Em@il"
          onChange={manejandoCambios}
          value={datoInput.email}
        ></input>
        <input
          id="input"
          type="email"
          name="emailDos"
          placeholder="Confirmar em@il"
          onChange={manejandoCambios}
          value={datoInput.emailDos}
        ></input>
        <input
          id="input"
          type="tel"
          name="tel"
          placeholder="1500000000"
          className="tel"
          onChange={manejandoCambios}
          value={datoInput.tel}
        ></input>

        <button
          className={
            datosAValidar.includes("")
              ? "btn btn-primary opacity-50 pe-none"
              : "btn btn-primary"
          }
        >
          Realizar Compra
        </button>
        <h3>{error && error}</h3>
      </form>
    </div>
  );
};
