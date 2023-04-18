import { useState } from "react";
import "./Form.css";
import InputForm from "./InputForm/InputForm.jsx";
import ListaForm from "./ListaForm/ListaForm.jsx";
import BotonCrear from "./BotonCrear/BotonCrear.jsx";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");

  const [equipo, setEquipo] = useState("");

  const envioDatos = (event) => {
    event.preventDefault();

    let datosCard = {
      nombre,
      puesto,
      foto,
      equipo
    };
    console.log(datosCard);
  };

  return (
    <section className="formulario">
      <form onSubmit={envioDatos}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <InputForm
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          set={setNombre}
          required
        />
        <InputForm
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          set={setPuesto}
          required
        />
        <InputForm
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          valor={foto}
          set={setFoto}
          required
        />
        <ListaForm valor={equipo} set={setEquipo} required />
        <BotonCrear texto="Crear" />
      </form>
    </section>
  );
};

export default Form;
