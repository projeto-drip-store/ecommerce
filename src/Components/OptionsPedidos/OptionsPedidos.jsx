import { Link } from "react-router-dom";
import "../OptionsPedidos/OptionsPedidos.css"

// eslint-disable-next-line react/prop-types
function OptionsPedidos() {

  return (
    <>
      <div className="options-pedidos">
          <div className="options-pedidos-align">
                    <Link to="/asd">Meu Perfil</Link>
                    <hr/>
                    <Link to="/Pedidos">Meus Pedidos</Link>
                    <hr/>
                    <Link to="/Informacoes">Minhas Informações</Link>
                    <hr/>
                    <Link to="/asd">Método de Pagamento</Link>
          </div>
      </div>
    </>
  );
}


export default OptionsPedidos
