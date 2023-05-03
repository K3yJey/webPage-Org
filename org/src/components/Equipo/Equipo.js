import "./Equipo.css"
import hexToRgba from "hex-to-rgba"
import Colaborador from "./Colaborador/Colaborador.jsx"

const Equipo = (props) => {
  //Destructuración
  const { titulo, fondo, destaque, id } = props.equipo
  const { colaborador, eliminarColaborador, actualizarColor, like } = props

  const bgc = {
    backgroundColor: hexToRgba(destaque, 0.5)
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
              actualizarColor(evento.target.value, id)
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
                  like={like}
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
