import "../Main/Main.css"
import gmail from "../../assets/img/gmail.svg";
import facebook from "../../assets/img/facebook.svg";
import sapatos from "../../assets/img/sapatosCriarConta.png";


function Main() {

  return (
    <>
      <main>
        <div class="formulario">
          <div class="title">
            <h1>Acesse sua conta</h1>
            <p>Novo cliente? Então registre-se <a href="./index.html">aqui</a>.</p>
          </div>
          <div class="conta">
            <h4>Login *</h4>
            <input type="text" placeholder="Insira seu login ou email" />
            <h4>Senha *</h4>
            <input type="text" placeholder="Insira sua senha" />
            <a href="#">Esqueci minha senha</a>
            <button type="button">Acessar Conta</button>
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
      </main>
    </>
  )
}

export default Main