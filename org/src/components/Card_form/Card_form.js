import "./Card_form.css"

const Card_form = (props) => {
    return <div className="card-form">
        <label>{props.titulo}</label>
        <input placeholder={"Ingresar " + props.titulo} />
    </div>
}

export default Card_form;