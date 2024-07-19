import HeaderMenor from "../Components/HeaderMenor/HeaderMenor";
import Footer from "../Components/Footer/Footer";
import "../Components/Main/MainCriarConta.css";
import gmail from "../assets/img/gmail.svg";
import facebook from "../assets/img/facebook.svg";
import sapatos from "../assets/img/sapatosCriarConta.png";

function Criar() {

  return (
    <>
      <HeaderMenor />
      <main>
        <div class="formulario">
          <div class="title">
            <h1>Crie sua conta</h1>
            <p>Já possui uma conta? Entre <a href="./login.html">aqui</a>.</p>
          </div>
          <div class="conta">
            <h4>Email *</h4>
            <input type="email" placeholder="Insira seu email" />
            <button type="button">Criar Conta</button>
          </div>
          <div class="outrologin">
            <p>Ou faça login com</p>
            <div class="img">
              <a href="#"><img src={gmail} alt="gmail" /></a>
              <a href="#"><img src={facebook} alt="facebook" /></a>
            </div>
          </div>
        </div>
        <div class="fotoSapatos">
          <img src={sapatos} />
        </div>
      </main >
      <Footer />
    </>
  )
}

export default Criar