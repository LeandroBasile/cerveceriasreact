import './App.css';
import {ItemListContainer} from "./componentes/ItemListContainer/ItemListContainer"
import Navbar from './componentes/navbar/NavBar';
import ItemContador from './componentes/itemcontador/ItemContador';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer saludo="hola" />
      <ItemContador/>
    </div>
  );
}

export default App;
