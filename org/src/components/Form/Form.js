import "./Form.css"
import Card_form from "../Card_form/Card_form.js"

const Form = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Card_form titulo="Nombre" />
            <Card_form titulo="Puesto" />
            <Card_form titulo="Foto" />
        </form>
    </section>
}

export default Form;