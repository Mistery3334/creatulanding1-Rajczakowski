import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a la tienda!" />
    </>
  );
}

export default App;
