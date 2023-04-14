import "./Form.css"
import CardForm from "./CardForm/CardForm.js"
import CardListaForm from "./CardListaForm/CardListaForm.js";
import BotonCrear from "./BotonCrear/BotonCrear.js";

const Form = () => {

    const envioDatos = (event) => {
        event.preventDefault();
    }

    return <section className="formulario">
        <form onSubmit={envioDatos}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CardForm titulo="Nombre" placeholder={"Ingresar nombre"} required />
            <CardForm titulo="Puesto" placeholder={"Ingresar puesto"} required />
            <CardForm titulo="Foto" placeholder={"Ingresar enlace de foto"} required />
            <CardListaForm required />
            <BotonCrear texto="Crear" />
        </form>
    </section>
}

export default Form;