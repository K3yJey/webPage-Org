import "./ListaForm.css";

const ListaForm = (props) => {
  const listaEquipo = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
  ];

  const cambio = (event) => {
    props.set(event.target.value);
  };

  return (
    <div className="card-list-form">
      <label>Equipo</label>
      <select required={props.required} value={props.valor} onChange={cambio}>
        <option value="" defaultValue="" disabled hidden>
          Selecciona un equipo
        </option>
        {listaEquipo.map((equipo, i) => {
          return (
            <option key={i} value={equipo}>
              {equipo}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ListaForm;
