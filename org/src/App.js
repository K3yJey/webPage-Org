import { useState } from "react"
import { v4 as uuid } from "uuid"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Form from "./components/Form/Form.jsx"
import Org from "./components/Org/Org.jsx"
import Equipo from "./components/Equipo/Equipo.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  const [mostrarForm, ocultarForm] = useState(false)
  const [colaboradores, actualizarColab] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/K3yJey.png",
      nombre: "Kevin Madrid",
      puesto: "Developer"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/lpachecob.png",
      nombre: "Luis Pacheco",
      puesto: "Developer"
    }
  ])
  const [equipo, actualizarEquipo] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      fondo: "#d9f7e9",
      destaque: "#57c278"
    },
    {
      id: uuid(),
      titulo: "Front End",
      fondo: "#e8f8ff",
      destaque: "#82cffa"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      fondo: "#f0f8e2",
      destaque: "#a6d157"
    },
    {
      id: uuid(),
      titulo: "Devops",
      fondo: "#fde7e8",
      destaque: "#e06b69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      fondo: "#fae9f5",
      destaque: "#db6ebf"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      fondo: "#fff5d9",
      destaque: "#ffba05"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      fondo: "#ffeedf",
      destaque: "#ff8a29"
    }
  ])

  const mostrarFormulario = () => {
    ocultarForm(!mostrarForm)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    //Spread operator -> Copia el arreglo
    actualizarColab([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("Eliminar")
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const colorActualizar = equipo.map((equipo) => {
      if (equipo.id === id) {
        equipo.destaque = color
      }
      return equipo
    })
    actualizarEquipo(colorActualizar)
  }

  //Ternario -> condicion ? Muestra : NoMuestra
  //Cortocircuito -> condicion && Muestra
  return (
    <div>
      <Header />

      {/*mostrarForm ? <Form /> : <></>*/}
      {mostrarForm && (
        <Form
          equipo={equipo.map((lista) => lista.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <Org mostrarForm={mostrarFormulario} />

      {equipo.map((lista) => {
        return (
          <Equipo
            key={lista.titulo}
            equipo={lista}
            colaborador={colaboradores.filter(
              (colaborador) => colaborador.equipo === lista.titulo
              /*Filter -> Filtrar de colaborador para que solo aparezcan los
              lista.titulo que sea igual al de colaborador*/
            )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
          />
        )
      })}

      <Footer />
    </div>
  )
}

export default App
