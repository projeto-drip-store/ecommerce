import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OptionsPedidos from "../../Components/OptionsPedidos/OptionsPedidos";
import MinhasInformacoes from "../../Components/MinhasInformacoes/MinhasInformacoes";

import "./InformacoesPage.css";


import { Link } from "react-router-dom";

function Informacoes() {
  return (
    <>
      <Header />
      <section className="section-pedidos-page">
        <div className="option-pedidos-page">
          <OptionsPedidos />
        </div>
        <div className="meus-pedidos-page">
          <div className="texto-forms">
            <h4>Minhas Informações</h4>
            <Link to="/criarFormulario">editar</Link>
          </div>
          <MinhasInformacoes 
            nome={'Francisco Antonio Pereira'}
            cpf={'123485913-35'}
            email={'francisco@gmail.com'}
            celular={'(85) 5555-5555'}
            endereco={'Rua João Pessoa, 333'}
            bairro={'Centro'}
            cidade={'Fortaleza, Ceará'}
            cep={'433-8800'}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Informacoes;
