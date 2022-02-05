import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainter } from "./componentes/ItemListContainer/ItemDetailContainter";
import { CartContextProvider } from "./componentes/context/CartContext";
import { Cart } from "./componentes/cart/Cart";
import { CompraFinal } from "./componentes/cart/CompraFinal";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer saludo="Tienda de cerveza" />} />

          <Route
            exact
            path="/categoria/:idCategoria"
            element={<ItemListContainer saludo="Tienda de cerveza" />}
          />
          <Route
            exact
            path="/detalle/:id"
            element={<ItemDetailContainter />}
          />
          <Route exact path="/cart" element={<Cart/>} />

          <Route exact path="/comprafinal" element={<CompraFinal/>} />

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
