import "../MeuCarrinho/MeuCarrinho.css";
import sapato from "../../assets/img/tenis-nike-view.svg";
import { useState } from "react"

// eslint-disable-next-line react/prop-types
function MeuCarrinho({ descricao, cor, tamanho, valorAntigo, valorAtual, count, setCount, multiploAtual, contar }) {
  
  const [contador, setContador] = useState(count);
  const multiploAntigo = count * valorAntigo;
  // const multiploAtual = count * valorAtual;

  useState(() => {
    setContador(count);
  }, [count]);

  return (
    <div className="carrinho-pedidos">
      <div className="topico-pedidos">
        <h3>MEU CARRINHO</h3>
        <h4>QUANTIDADE</h4>
        <h4>UNITÁRIO</h4>
        <h4>TOTAL</h4>
      </div>
      <hr />
      <div className="descricao-pedidos">
        <div className="fundo-img-carrinho">
          <img src={sapato} alt="produto" />
        </div>
        <div className="info-pedidos-carrinho">
          <h5>{descricao}</h5>
          <h4>Cor: <span>{cor}</span></h4>
          <h6>Tamanho: <span>{tamanho}</span></h6>
        </div>
        <div className="quantidade-pedidos">
          <div className="contador-pedidos">
            <button onClick={() => setCount(count => count - 1) && setContador(count => count - 1)}>-</button>
            <h6>{contar}</h6>
            <button onClick={() => setCount(count => count + 1) && setContador(count => count + 1)}>+</button>
          </div>
          <a href="#remover">Remover item</a>
        </div>
        <div className="unitario-pedidos">
          <h3>R${valorAntigo.toFixed(2)}</h3>
          <h2>R${valorAtual.toFixed(2)}</h2>
        </div>
        <div className="total-pedidos">
          <h3>R${multiploAntigo.toFixed(2)}</h3> 
          <h2>R${multiploAtual.toFixed(2)}</h2>
        </div>
      </div>
      <hr />
      <div className="frete-pedidos">
        <div className="cupom-desconto">
          <h2>Cupom de desconto</h2>
          <div className="pesquisa-carrinho">
            <input placeholder="Insira seu código" />
            <button>OK</button>
          </div>
        </div>
        <div className="cupom-desconto">
          <h2>Calcular Frete</h2>
          <div className="pesquisa-carrinho">
            <input placeholder="Insira seu CEP" />
            <button>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeuCarrinho;