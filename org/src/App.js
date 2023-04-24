import { useState } from "react"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Form from "./components/Form/Form.jsx"
import Org from "./components/Org/Org.jsx"
import Equipo from "./components/Equipo/Equipo.jsx"

function App() {
  //Lista de equipos
  const listaEquipo = [
    {
      titulo: "Programación",
      fondo: "var(--fondo-programacion)",
      destaque: "var(--destaque-programacion)"
    },
    {
      titulo: "Front End",
      fondo: "var(--fondo-front_end)",
      destaque: "var(--destaque-front_end)"
    },
    {
      titulo: "Data Science",
      fondo: "var(--fondo-data_science)",
      destaque: "var(--destaque-data_science)"
    },
    {
      titulo: "Devops",
      fondo: "var(--fondo-dev_ops)",
      destaque: "var(--destaque-dev_ops)"
    },
    {
      titulo: "UX y Diseño",
      fondo: "var(--fondo-ux_diseño)",
      destaque: "var(--destaque-ux_diseño)"
    },
    {
      titulo: "Móvil",
      fondo: "var(--fondo-movil)",
      destaque: "var(--destaque-movil)"
    },
    {
      titulo: "Innovación y Gestión",
      fondo: "var(--fondo-innovacion_gestion)",
      destaque: "var(--destaque-innovacion_gestion)"
    }
  ]

  const [mostrarForm, ocultarForm] = useState(false)
  const [colaboradores, actualizarColab] = useState([])

  //Ternario -> condicion ? Muestra : NoMuestra
  //Cortocircuito -> condicion && Muestra
  const mostrarFormulario = () => {
    ocultarForm(!mostrarForm)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    //Spread operator -> Copia el arreglo
    actualizarColab([...colaboradores, colaborador])
  }

  return (
    <div>
      <Header />

      {/*mostrarForm ? <Form /> : <></>*/}
      {mostrarForm && (
        <Form
          equipo={listaEquipo.map((lista) => lista.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <Org mostrarForm={mostrarFormulario} />

      {listaEquipo.map((lista) => {
        return (
          <Equipo
            key={lista.titulo}
            equipo={lista}
            colaborador={colaboradores.filter(
              (colaborador) => colaborador.equipo === lista.titulo
            )}
          />
        )
      })}
    </div>
  )
}

export default App
