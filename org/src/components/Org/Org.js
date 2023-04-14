import {useState} from "react";
import "./Org.css"

const Org = () => {
    //Hooks - Estados
    //const [nombreVariable, funcionActualiza] = useState(valorInicial);
    const [mostrar, ocultar] = useState(true);

    const estadoBoton = () => {
        ocultar(!mostrar);
    }

    return <div className="div-org">
        <h3>Mi organización</h3>
        <img className="img-add" src="/img/add.png" alt="add" onClick={estadoBoton} />
    </div>
}

export default Org;