import { Link } from "react-router-dom";
import "../MeuCarrinho/MeuCarrinho.css"

// eslint-disable-next-line react/prop-types
function MeuCarrinho({descricao, cor, tamanho, valorAntigo, valorAtual}) {

  return (
    <>
      <div className="carrinho-pedidos">
        <div className="topico-pedidos">
          <h3>MEU CARRINHO</h3>
          <h4>QUANTIDADE</h4>
          <h4>UNITÁRIO</h4>
          <h4>TOTAL</h4>
        </div>
        <div className="descricao-pedidos">
          <img />
          <div className="info-pedidos-carrinho">
            <h5>{descricao}</h5>
            <h4>Cor: <span>{cor}</span></h4>
            <h4>Tamanho: <span>{tamanho}</span></h4>
          </div>
          <div className="quantidade-pedidos">
            <div className="contador-pedidos">
              <button>-</button>
              <p>{}</p>
              <button>+</button>
            </div>
            <a>Remover item</a>
          </div>
          <div className="unitario-pedidos">
            <h2>{valorAntigo}</h2>
            <h2>{valorAtual}</h2>
          </div>
          <div className="total-pedidos">
            <h2>{valorAntigo}</h2> {/*colocar alteração de valor*/}
            <h2>{valorAtual}</h2> {/*colocar alteração de valor*/}
          </div>
        </div>
        <div className="frete-pedidos">
          <div className="cupom-desconto">
              <h2>Cupom de desconto</h2>
              <div className="pesquisa-carrinho">
                <input placeholder="Insira seu código" />
                <button>OK</button>
              </div>
          </div>
          <div className="cupom-desconto">
              <h2>Cupom de desconto</h2>
              <div className="pesquisa-carrinho">
                <input placeholder="Insira seu CEP" />
                <button>OK</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default MeuCarrinho
