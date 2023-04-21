import "./InputForm.css"

const InputForm = (props) => {
  const cambio = (event) => {
    props.set(event.target.value)
  }
  return (
    <div className="card-form">
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={cambio}
      />
    </div>
  )
}

export default InputForm
