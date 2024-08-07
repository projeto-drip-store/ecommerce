// import { Link } from "react-router-dom";
import "../MinhasInformacoes/MinhasInformacoes.css"

// eslint-disable-next-line react/prop-types
function MinhasInformacoes({nome, cpf, email, celular, endereco, bairro, cidade, cep}) {

  return (
    <>
      <div className="minhas-informacoes">
        <hr />
        <div className="detalhe-minhas-informacoes">
          <h2>Informacoes Pessoais</h2>
          <h3>Nome: <span>{nome}</span></h3>
          <h3>CPF: <span>{cpf}</span></h3>
          <h3>Email: <span>{email}</span></h3>
          <h3>Celular: <span>{celular}</span></h3>
        </div>
        <hr />
        <div className="detalhe-minhas-informacoes">
          <h2>Informacoes de Entrega</h2>
          <h3>Endereço: <span>{endereco}</span></h3>
          <h3>Bairro: <span>{bairro}</span></h3>
          <h3>CIDADE: <span>{cidade}</span></h3>
          <h3>CEP: <span>{cep}</span></h3>
        </div>
      </div>
    </>
  );
}


export default MinhasInformacoes
