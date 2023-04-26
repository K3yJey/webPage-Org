import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = (props) => {
  const { nombre, puesto, foto } = props.datos
  const { destaque, eliminarColaborador } = props

  const bgc = {
    backgroundColor: destaque
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle className="eliminar" onClick={eliminarColaborador} />
      <div className="encabezado" style={bgc}>
        <img src={foto} alt={"Img de " + nombre} />
      </div>

      <div className="info">
        <h4 style={{ color: "var(--color-azul)" }}>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  )
}

export default Colaborador
