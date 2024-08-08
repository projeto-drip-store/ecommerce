import { Link } from "react-router-dom";
import "../ResumoCompra/ResumoCompra.css";

// eslint-disable-next-line react/prop-types
function ResumoCompra({subtotal, frete, desconto, total, parcela}) {
  return (
    <>
      <div className="resumo-cart-pedido">
        <div className="resumo-cart-pedido-info">
          <h3>RESUMO</h3>
          <hr/>
          <h4>Subtotal: <span>{subtotal}</span></h4>
          <h4>Frete: <span>{frete}</span></h4>
          <h4>Desconto: <span>{desconto}</span></h4>
          <h3>Total <span>{total}</span></h3>
          <h4>{parcela}</h4>
          <button><a>Continuar</a></button>
        </div>
      </div>
    </>
  );
}

export default ResumoCompra;
