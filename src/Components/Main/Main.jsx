import "../Main/Main.css";
import { Link, useNavigate } from "react-router-dom";
import gmail from "../../assets/img/gmail.svg";
import facebook from "../../assets/img/facebook.svg";
import sapatos from "../../assets/img/dois_tenis_nike.png";
import { apiRequest } from "../../Scripts/apiRequest";

function Main() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      console.log(data);
    
      const response = await apiRequest('/user/login', 'POST', data);

      if (!response.ok) {
        navigate("/", { replace: true });
      } else {
        console.log('Login falhou');
      }

    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <>
      <main>
        <form className="formulario card-formulario" onSubmit={handleLogin}>
          <div className="title">
            <h1>Acesse sua conta</h1>
            <p>
              Novo cliente? Então registre-se <Link to="/Registrar">aqui</Link>.
            </p>
          </div>
          <div className="conta">
            <h4>Login *</h4>
            <input type="text" placeholder="Insira seu login ou email" name="email" required />
            <h4>Senha *</h4>
            <input type="password" placeholder="Insira sua senha" name="senha" required />
            <Link to="/Error">Esqueci minha senha</Link>
            <div className="button-link-home btn-login">
              <button type="submit">Acessar Conta</button>
            </div>
          </div>
          <div className="outrologin">
            <p>Ou faça login com</p>
            <div className="img">
              <Link to="https://www.google.com/intl/pt-BR/gmail/about/">
                <img src={gmail} alt="gmail" />
              </Link>
              <Link to="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
              </Link>
            </div>
          </div>
        </form>
        <div className="fotoSapatos">
          <img src={sapatos} alt="Sapatos Nike" />
        </div>
      </main>
    </>
  );
}

export default Main;
