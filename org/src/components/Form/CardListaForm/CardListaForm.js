import "./CardListaForm.css"

const CardListaForm = (props) => {
    const ListaEquipo = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="card-list-form">
        <label>Equipo</label>
        <select required={props.required}>
            <option value="" disabled selected>Selecciona un equipo</option>
            {ListaEquipo.map((equipo, i) => {
                return <option key={i}>{equipo}</option>
            })}
        </select>
    </div>
}

export default CardListaForm;