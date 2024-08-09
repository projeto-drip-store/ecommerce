import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import InputForms from "../../Components/InputForms/InputForms";
import ResumoCompra from "../../Components/ResumoCompra/ResumoCompra"
import { CompraSucesso } from "../../Components/CompraSucesso/CompraSucesso"
import "./ConfirmarCompraPage.css"

function ConfirmarCompra({ multiploAtual }) {
  const frete = 20.00; // trocar por dinamico
  const desconto = 10.00; // trocar por dinamico
  return (
    <>
      <Header />
      <section className="section-confirmar-compra">
        <div className="aling-forms">
          <div className="section-criar-forms section-tirar-padding">
            <h1 className="titulo-input-forms">Finalizar Conta</h1>
            <div className="infomacoes-pessoais">
              <h4>Infomacoes Pessoais</h4>
              <hr />
              <InputForms
                titulo={'nome'}
                nome={'Nome completo*'}
                type={'text'}
                descricao={'Insira seu nome'}
              />
              <InputForms
                titulo={'cpf'}
                nome={'CPF*'}
                type={'text'}
                descricao={'Insira seu CPF'}
              />
              <InputForms
                titulo={'email'}
                nome={'E-mail*'}
                type={'email'}
                descricao={'Insira seu email'}
              />
              <InputForms
                titulo={'celular'}
                nome={'Celular*'}
                type={'text'}
                descricao={'Insira seu celular'}
              />
            </div>
            <div className="infomacoes-entrega">
              <h4>Infomacoes de Entrega</h4>
              <hr />
              <InputForms
                titulo={'endereco'}
                nome={'Endereco*'}
                type={'text'}
                descricao={'Insira seu endereco'}
              />
              <InputForms
                titulo={'bairro'}
                nome={'Bairro*'}
                type={'text'}
                descricao={'Insira seu bairro'}
              />
              <InputForms
                titulo={'cidade'}
                nome={'Cidade*'}
                type={'text'}
                descricao={'Insira seu cidade'}
              />
              <InputForms
                titulo={'cep'}
                nome={'CEP*'}
                type={'text'}
                descricao={'Insira seu CEP'}
              />
              <InputForms
                titulo={'complemento'}
                nome={'Complemento'}
                type={'text'}
                descricao={'Insira seu complemento'}
              />
            </div>
            <div className="criar-conta-forms button-confirmar-compra">
              <button type="button">Realizar Pagamento</button>
            </div>
          </div>
          <div className="align-resumo-compra">
            <ResumoCompra
              frete={frete}
              desconto={desconto}
              multiploAtual={multiploAtual}
            />
          </div>
        </div>
      </section>
      {/* function ResumoCompra({ frete, desconto, multiploAtual }) {
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
} */}
      <CompraSucesso />
      <Footer />
    </>
  );
}

export default ConfirmarCompra;
