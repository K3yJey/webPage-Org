import "./Equipo.css"
import Colaborador from "./Colaborador/Colaborador.jsx"

const Equipo = (props) => {
  //Destructuración
  const { titulo, fondo, destaque } = props.equipo
  const { colaborador, eliminarColaborador, actualizarColor } = props

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
          <h3 className="titulo" style={color}>
            {titulo}
          </h3>
          <input
            className="input-color"
            type="color"
            value={destaque}
            onChange={(evento) => {
              actualizarColor(evento.target.value, titulo)
            }}
          />

          <div className="colaboradores">
            {colaborador.map((colaborador, i) => {
              return (
                <Colaborador
                  key={i}
                  datos={colaborador}
                  destaque={destaque}
                  eliminarColaborador={eliminarColaborador}
                  actualizarColor={actualizarColor}
                />
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}

export default Equipo
