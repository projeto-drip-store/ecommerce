import { Link } from "react-router-dom";
import "../OptionsPedidos/OptionsPedidos.css"

// eslint-disable-next-line react/prop-types
function OptionsPedidos() {

  return (
    <>
      <div className="options-pedidos">
          <div className="options-pedidos-align">
                    <Link to="">Meu Perfil</Link>
                    <hr/>
                    <Link to="">Meus Pedidos</Link>
                    <hr/>
                    <Link to="">Minhas Informações</Link>
                    <hr/>
                    <Link to="">Método de Pagamento</Link>
          </div>
      </div>
    </>
  );
}


export default OptionsPedidos
