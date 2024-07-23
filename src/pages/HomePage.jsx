import Header from "../Components/Header/Header"
import Carousel from "../Components/Carousel/Carousel"
import Footer from "../Components/Footer/Footer"
import Cards from "../Components/Cards/Cards"
import Cards2 from "../Components/Cards/Cards2"
import sapatoAzul from "../assets/img/sapato_card.png"
import flechaRosa from "../assets/img/flecha_icon.svg"
import "./HomePage.css"
import { Link } from "react-router-dom";
import { Destaque } from "../Components/Destaque/Destaque"

function Home() {

  return (
    <>
      <Header />
      <Carousel />
      <section className="colecao-destaque-icons">
        <div className="colecao-destaque-icons-escopo">
          <div className="titulo-colecao-destaque">
            <h1>Coleções em destaque</h1>
          </div>
          <div className="cards-colecao-destaque">
            <div className="blusa-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="calcas-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="bone-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="headphone-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
            <div className="tenis-destaque">
              <img src="" alt="blusa"/>
              <h4>Camisetas</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="container-produtos-em-alta">
        <div className="produtos-em-alta">
          <div className="topico-section">
            <h1>Produtos em alta</h1>
            <h2><Link to="/ProductList" className="link-ver-todos">Ver todos <img src={flechaRosa} alt="flecha" /></Link></h2>
          </div>
          <div className="produto-em-alta-cards">
            <Cards2 oferta="30" foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
            <Cards2 oferta="40" foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
            <Cards foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
            <Cards foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
          </div>
        </div>
        <div className="produtos-em-alta">
          <div className="produto-em-alta-cards">
            <Cards foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
            <Cards foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
            <Cards foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
            <Cards foto={sapatoAzul} titulo="Tênis" descricao="K-Swiss V8 - Masculino" valorantigo="200" valoratual="100" />
          </div>
        </div>
      </section>
      <Destaque/>
      <Footer />
    </>
  )
}

export default Home