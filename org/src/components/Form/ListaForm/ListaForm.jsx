import "./ListaForm.css"

const ListaForm = (props) => {
  const cambio = (event) => {
    props.set(event.target.value)
  }

  return (
    <div className="card-list-form">
      <label>Equipo</label>
      <select required={props.required} value={props.valor} onChange={cambio}>
        <option value="" defaultValue="" disabled hidden>
          Selecciona un equipo
        </option>
        {props.equipo.map((lista, i) => (
          <option key={i} value={lista}>
            {lista}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ListaForm
