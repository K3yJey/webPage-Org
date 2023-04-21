import "./Org.css"

const Org = (props) => {
  //Hooks - Estados
  //const [nombreVariable, funcionActualiza] = useState(valorInicial);
  return (
    <div className="div-org">
      <h3 className="organizacion">Mi organización</h3>
      <img
        className="img-add"
        src="/img/add.png"
        alt="add"
        onClick={props.mostrarForm}
      />
    </div>
  )
}

export default Org
