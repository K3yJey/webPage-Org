import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.jsx"

const Equipo = (props) => {
  //Destructuración
  const { fondo, destaque, titulo } = props.equipo
  const { colaborador } = props

  const bgc = {
    backgroundColor: fondo
  }

  const color = {
    borderColor: destaque
  }

  return (
    <>
      {colaborador.length > 0 && (
        <section className="equipo" style={bgc}>
          <h3 style={color}>{titulo}</h3>

          <div className="colaboradores">
            {colaborador.map((colaborador, i) => {
              return <Colaborador key={i} datos={colaborador} destaque={destaque} />
            })}
          </div>
        </section>
      )}
    </>
  )
}

export default Equipo
