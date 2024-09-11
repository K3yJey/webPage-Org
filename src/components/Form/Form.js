import { useState } from "react"
import "./Form.css"
import TextForm from "./TextForm/TextForm.js"
import ListForm from "./ListForm/ListForm.js"
import BotonCrear from "./BotonCrear/BotonCrear.js"

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

        <TextForm
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          set={setNombre}
          required
        />

        <TextForm
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          set={setPuesto}
          required
        />

        <TextForm
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          valor={foto}
          set={setFoto}
          required
        />

        <ListForm valor={equipo} set={setEquipo} equipo={props.equipo} required />

        <BotonCrear texto="Crear" />
      </form>

      <form onSubmit={datosEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>

        <TextForm
          titulo="Título"
          placeholder="Ingresar título"
          valor={titulo}
          set={setTitulo}
          required
        />

        <TextForm
          type="color"
          titulo="Color de fondo"
          placeholder="Ingresar color de fondo"
          valor={destaque}
          set={setDestaque}
          required
        />

        <BotonCrear texto="Crear equipo" />
      </form>
    </section>
  )
}

export default Form
