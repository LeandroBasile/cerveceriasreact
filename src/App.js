import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/NavBar";
import ItemContador from "./componentes/itemcontador/ItemContador";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainter } from "./componentes/ItemListContainer/ItemDetailContainter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<ItemListContainer saludo="hola" />} />

        <Route exact path="/categoria/:idCategoria" element={<ItemListContainer saludo="hola" />} />
        <Route
          exact
          path="/detalle/:idDetalle"
          element={<ItemDetailContainter />}
        />
        <Route exact path="/cart" element="Cart" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
