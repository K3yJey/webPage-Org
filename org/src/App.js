import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form";
import Org from "./components/Org/Org";

function App() {
  const [mostrar, ocultar] = useState(true);

  //Ternario -> condicion ? Muestra : NoMuestra
  //Cortocircuito -> condicion && Muestra
  const mostrarForm = () => {
    ocultar(!mostrar);
  };

  return (
    <div>
      <Header />
      {/*mostrar ? <Form /> : <></>*/}
      {mostrar && <Form />}
      <Org mostrarForm={mostrarForm} />
    </div>
  );
}

export default App;
