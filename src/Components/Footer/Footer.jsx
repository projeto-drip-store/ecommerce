import logoDigitalCollege from './assets/img/logoDigitalCollege.svg';
import iconFacebook from './assets/img/iconFacebook.svg';
import iconInstagram from './assets/img/iconInstagram.svg';
import iconTwitter from './assets/img/iconTwitter.svg';
import './Footer.css';

export function Footer() {
  return (
    <>
      <section id="contato">
      <div className="rodape">
        <div className="sobreIcones">
          <div className="sobre">
            <a href="#"><img src={logoDigitalCollege} alt="imagemlogo" /></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="icones">
            <a href="#"><img src={iconFacebook} alt="facebook" /></a>
            <a href="#"><img src={iconInstagram} alt="instagram" /></a>
            <a href="#"><img src={iconTwitter} alt="twitter" /></a>
          </div>
        </div>
        <div className="informacao">
          <div className="informacao1">
            <h4>Informação</h4>
            <ul>
              <li><a href="#">Sobre Drip Store</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li><a href="#">Meus Pedidos</a></li>
            </ul>
          </div>
          <div className="informacao2">
            <h4>Categorias</h4>
            <ul>
              <li><a href="#">Camisetas</a></li>
              <li><a href="#">Calças</a></li>
              <li><a href="#">Bonés</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Tênis</a></li>
            </ul>
          </div>
        </div>
        <div className="contatos">
          <h3>Contato</h3>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <h4>(85) 3051-3411</h4>
        </div>
      </div>
      <hr className="barra" />
      </section>
      <footer>
        <p>@ 2024 Digital College</p>
      </footer>
  </>
  );
};
