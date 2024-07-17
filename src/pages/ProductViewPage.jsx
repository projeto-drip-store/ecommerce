// import "../Header/Header.css";
// import logo from "../../assets/img/logo.svg";
// import carrinho from "../../assets/img/carrinho.svg";
import "../pages/ProductViewPage.css";
import fotoQuadrada from "../assets/img/example.jpeg";

function ProductPage() {
  return (
    <>
      <p>
        Home / Produtos / Tênis / Nike / Tenis Nike Revolution 6 Nature
        Masculino
      </p>
      <div className="product">
        <div>
          <img src={fotoQuadrada} alt="" className="carrosel" />
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
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
            </div>
            <div>
              <h6>cor</h6>
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
              <img src={fotoQuadrada} alt="foto quadrada" width={50} />
            </div>
          </div>
          <button>Comprar</button>
        </div>
      </div>
      <div className="outrosTenis">
        <img src={fotoQuadrada} alt="foto quadrada" width={150} />
        <img src={fotoQuadrada} alt="foto quadrada" width={150} />
        <img src={fotoQuadrada} alt="foto quadrada" width={150} />
        <img src={fotoQuadrada} alt="foto quadrada" width={150} />
        <img src={fotoQuadrada} alt="foto quadrada" width={150} />
      </div>
    </>
  );
}

export default ProductPage;
