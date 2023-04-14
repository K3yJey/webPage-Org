import "./CardForm.css"

const CardForm = (props) => {
    return <div className="card-form">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} />
    </div>
}

export default CardForm;