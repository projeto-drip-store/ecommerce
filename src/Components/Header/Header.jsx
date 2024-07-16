import "../Header/Header.css"
import logo from '../../assets/img/logo.svg'
import carrinho from '../../assets/img/carrinho.svg'

function Header() {

  return (
    <>
      <header>
        <nav>
          <div className="navs">
            <div className="nav-header">
              <a href="#"><img src={ logo } alt="logo" /></a>
              <input type="text" placeholder="Pesquisar produto..." className="input-icon-search" />
              <a href="#">Cadastre-se</a>
              <button type="button">Entrar</button>
              <a href="#"><img src={ carrinho } alt="carrinho" className="icon-carrinho" /></a>
            </div>
            <div className="nav-footer">
              <li><a href="#" className="home">Home</a></li>
              <li><a href="#" className="produtos">Produtos</a></li>
              <li><a href="#" className="categorias">Categorias</a></li>
              <li><a href="#" className="pedidos">Meus Pedidos</a></li>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header