import { Link } from "react-router-dom";
import "../ResumoCompra/ResumoCompra.css";

// eslint-disable-next-line react/prop-types
function ResumoCompra({subtotal, frete, desconto, total, parcela }) {
  return (
    <>
      <div className="resumo-cart-pedido">
        <div className="resumo-cart-pedido-info">
          <h3>RESUMO</h3>
          <hr/>
          <h4>Subtotal: <span>R$ {subtotal}</span></h4>
          <h4>Frete: <span>R$ {frete}</span></h4>
          <h4>Desconto: <span> R$ {desconto}</span></h4>
          <h2>Total <span>R$ {total}</span></h2>
          <h5>ou 10x de R$ {parcela} sem juros</h5>
          <button>Continuar</button>
        </div>
      </div>
    </>
  );
}

export default ResumoCompra;
