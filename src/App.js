import './App.css';
import Navbar from './componentes/NavBar.js';
import {ItemListContainer} from "./componentes/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer saludo="hola" />
    </div>
  );
}

export default App;
