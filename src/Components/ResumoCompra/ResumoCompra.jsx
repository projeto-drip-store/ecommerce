import "../ResumoCompra/ResumoCompra.css";

// eslint-disable-next-line react/prop-types
function ResumoCompra({ frete, desconto, multiploAtual }) {
  const total = multiploAtual + frete - desconto;
  const parcela = total / 10;

  return (
    <div className="resumo-cart-pedido">
      <div className="resumo-cart-pedido-info">
        <h3>RESUMO</h3>
        <hr />
        <h4>Subtotal: <span>R$ {Number(multiploAtual).toFixed(2)}</span></h4>
        <h4>Frete: <span>R$ {frete.toFixed(2)}</span></h4>
        <h4>Desconto: <span>R$ {desconto.toFixed(2)}</span></h4>
        <h2>Total: <span>R$ {total.toFixed(2)}</span></h2>
        <h5>ou 10x de R$ {parcela.toFixed(2)} sem juros</h5>
        <button>Continuar</button>
      </div>
    </div>
  );
}
export default ResumoCompra;
