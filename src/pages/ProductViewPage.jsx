import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import sapato_carrousel from "../assets/img/sapato_carousel.svg";
import "../assets/css/ProductViewPage.css";
//esse é o projeto atual
function ProductView() {
  return (
    <>
      <Header />
      <p>
        Home / Produtos / Tênis / Nike / Tenis Nike Revolution 6 Nature
        Masculino
      </p>
      <div className="product">
        <div>
          <img src={sapato_carrousel} alt="" className="carrosel" />
          <div className="outrosTenis">
            <img src={sapato_carrousel} alt="foto quadrada" width={150} />
            <img src={sapato_carrousel} alt="foto quadrada" width={150} />
            <img src={sapato_carrousel} alt="foto quadrada" width={150} />
            <img src={sapato_carrousel} alt="foto quadrada" width={150} />
            <img src={sapato_carrousel} alt="foto quadrada" width={150} />
          </div>
        </div>
        <div>
          <h3>Tenis Nike Revolution 6 Nature Masculino</h3>
          <p>Casual | Nike | REF:38416711</p>
          <p>
            R$ <span id="preco">219,90</span> <span id="riscado">219,00</span>
          </p>
          <h6>Descrição do produto</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos vitae
            quod labore dolorum ea! Alias fugiat nulla temporibus, tempore
            debitis nostrum expedita corporis corrupti magnam cum distinctio
            reprehenderit adipisci recusandae?
          </p>
          <div className="corTamanho">
            <h6>Tamanho</h6>
            <div>
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
            </div>
            <div>
              <h6>cor</h6>
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
              <img src={sapato_carrousel} alt="foto quadrada" width={50} />
            </div>
          </div>
          <button>Comprar</button>
        </div>
      </div>
      <section className="produtos_relacionados">
        <h5 className="produtos">Produtos relacionados</h5>
        <div className="cardpai">
          <div className="cards">
            <img src={sapato_carrousel} alt="foto quadrada" width={50} />
            <h2>Card</h2>
          </div>
          <div className="cards">
            <img src={sapato_carrousel} alt="foto quadrada" width={50} />
            <h2>Card</h2>
          </div>
          <div className="cards">
            <img src={sapato_carrousel} alt="foto quadrada" width={50} />
            <h2>Card</h2>
          </div>
          <div className="cards">
            <img src={sapato_carrousel} alt="foto quadrada" width={50} />
            <h2>Card</h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductView;
