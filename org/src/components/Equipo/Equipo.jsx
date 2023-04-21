import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.jsx"

const Equipo = (props) => {
  //Destructuración
  const { fondo, destaque, titulo } = props.equipo

  const bgc = {
    backgroundColor: fondo
  }

  const color = {
    borderColor: destaque
  }

  return (
    <section className="equipo" style={bgc}>
      <h3 style={color}>{titulo}</h3>
      <div className="colaboradores">
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  )
}

export default Equipo
