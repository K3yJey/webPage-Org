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
  const [colaborador, actualizarColaborador] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/K3yJey.png",
      nombre: "Kevin Madrid",
      puesto: "Developer",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/lpachecob.png",
      nombre: "Luis Pacheco",
      puesto: "Developer",
      fav: false
    }
  ])
  const [equipo, actualizarEquipo] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      fondo: "#d9f7e9",
      destaque: "#57c278",
      fav: ""
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
  const registrarColaborador = (colaboradores) => {
    //Spread operator -> Copia el arreglo
    actualizarColaborador([...colaborador, colaboradores])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const newColaborador = colaborador.filter(
      (colaboradores) => colaboradores.id !== id
    )
    actualizarColaborador(newColaborador)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const colorActualizar = equipo.map((equipo) => {
      if (equipo.id === id) {
        equipo.destaque = color
      }
      return equipo
    })
    actualizarEquipo(colorActualizar)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipo([...equipo, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    const likeColaborador = colaborador.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaborador(likeColaborador)
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
          crearEquipo={crearEquipo}
        />
      )}

      <Org mostrarForm={mostrarFormulario} />

      {equipo.map((lista) => {
        return (
          <Equipo
            key={lista.titulo}
            equipo={lista}
            colaborador={colaborador.filter(
              (colaboradores) => colaboradores.equipo === lista.titulo
              /*Filter -> Filtrar de colaborador para que solo aparezcan los
              lista.titulo que sea igual al de colaborador*/
            )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        )
      })}

      <Footer />
    </div>
  )
}

export default App
