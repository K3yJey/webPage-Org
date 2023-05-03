import "./TextForm.css"

const TextForm = (props) => {
  const { placeholder, required, valor } = props
  const { type = "text" } = props

  console.log(type)

  const cambio = (e) => {
    props.set(e.target.value)
  }

  return (
    <div className={`card card-${type}`}>
      <label>{props.titulo}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={cambio}
      />
    </div>
  )
}

export default TextForm
