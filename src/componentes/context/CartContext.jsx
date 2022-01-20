import React, { useState, useContext, createContext } from "react";

//crea el contexto
const cartContext = createContext([]);

//funcion que evita importar el useConxt en todos los archivos donde quiero usarlo.
export function useCartContext() {
  return useContext(cartContext);
}

//componente que controla el contexto

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function agregarAlCarrito(items) {
    console.log(items)
    setCartList([...cartList, items]);

    const indice = cartList.findIndex((i) => i.id === items.id);

    if (indice > -1) {
      const cantidadVieja = cartList[indice].cantidad; 

      let cantidadNueva = cantidadVieja + items.cantidad;

      cartList[indice].cantidad = cantidadNueva;

      let auxList = [...cartList];

      setCartList(auxList);
    } else {
      setCartList([...cartList, items]);
    }
  }

  function vaciarCarrito() {
    setCartList([]);
  }

  console.log(cartList);

  return (
    <cartContext.Provider value={{ cartList, agregarAlCarrito, vaciarCarrito }}>
      {children}
    </cartContext.Provider>
  );
};
