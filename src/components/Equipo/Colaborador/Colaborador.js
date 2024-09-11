import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = (props) => {
  const { nombre, puesto, foto, id, fav } = props.datos
  const { destaque, eliminarColaborador, like } = props

  const bgc = {
    backgroundColor: destaque
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="encabezado" style={bgc}>
        <img src={foto} alt={"Img de " + nombre} />
      </div>

      <div className="info">
        <h4 style={{ color: "var(--color-azul)" }}>{nombre}</h4>
        <h5>{puesto}</h5>

        {fav === true ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  )
}

export default Colaborador
