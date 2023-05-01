import { useState } from "react"
import "./Form.css"
import InputForm from "./InputForm/InputForm.jsx"
import ListaForm from "./ListaForm/ListaForm.jsx"
import BotonCrear from "./BotonCrear/BotonCrear.jsx"

const Form = (props) => {
  const [nombre, setNombre] = useState("")
  const [puesto, setPuesto] = useState("")
  const [foto, setFoto] = useState("")
  const [equipo, setEquipo] = useState("")
  const [titulo, setTitulo] = useState("")
  const [destaque, setDestaque] = useState("")

  const { registrarColaborador, crearEquipo } = props

  const datosColaborador = (e) => {
    e.preventDefault()

    let cardColaborador = {
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(cardColaborador)
  }

  const datosEquipo = (e) => {
    e.preventDefault()

    let cardEquipo = {
      titulo,
      destaque
    }
    crearEquipo(cardEquipo)
  }

  return (
    <section className="formulario">
      <form onSubmit={datosColaborador}>
        <h2>Rellena el formulario para crear el colaborador</h2>
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
        <ListaForm valor={equipo} set={setEquipo} equipo={props.equipo} required />
        <BotonCrear texto="Crear" />
      </form>

      <form onSubmit={datosEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <InputForm
          titulo="Título"
          placeholder="Ingresar título"
          valor={titulo}
          set={setTitulo}
          required
        />
        <InputForm
          titulo="Color de fondo"
          placeholder="Ingresar color de fondo"
          valor={destaque}
          set={setDestaque}
          required
        />
        <BotonCrear texto="Crear" />
      </form>
    </section>
  )
}

export default Form
