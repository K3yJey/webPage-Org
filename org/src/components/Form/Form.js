import { useState } from "react";
import "./Form.css";
import CardForm from "./CardForm/CardForm.js";
import CardListaForm from "./CardListaForm/CardListaForm.js";
import BotonCrear from "./BotonCrear/BotonCrear.js";

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
        <CardForm
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          set={setNombre}
          required
        />
        <CardForm
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          set={setPuesto}
          required
        />
        <CardForm
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          valor={foto}
          set={setFoto}
          required
        />
        <CardListaForm valor={equipo} set={setEquipo} required />
        <BotonCrear texto="Crear" />
      </form>
    </section>
  );
};

export default Form;
