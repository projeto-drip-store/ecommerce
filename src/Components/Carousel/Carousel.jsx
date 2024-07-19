
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../Carousel/Carousel.css"
import sapato from "../../assets/img/sapato_carousel.svg"
import ilustracao from "../../assets/img/ornament.svg"


function Carousel() {
          return (
                    <>
                              <div class="carousel">
                                        <div id="carouselExampleDark" class="carousel carousel-dark slide">
                                                  <div class="carousel-indicators">
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active botao" aria-current="true" aria-label="Slide 1" ></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" class="botao"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" class="botao"></button>
                                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4" class="botao"></button>
                                                  </div>
                                                  <div class="carousel-inner">
                                                            <div class="carousel-item active hero" data-bs-interval="10000">
                                                                      <div className="texto-ofertas">
                                                                                <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                                                                                <h1 className="titulo">Queima de stoque Nike 🔥</h1>
                                                                                <p className="texto">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                                                                <button className="oferta">Ver Ofertas</button>
                                                                      </div>
                                                                      <div className="imagem-ilustrativa">
                                                                                <img src={sapato} class="d-block sapato" alt="sapato" />
                                                                                <img src={ilustracao} class="d-block ilustracao" alt="sapato" />
                                                                      </div>
                                                            </div>
                                                            <div class="carousel-item hero" data-bs-interval="2000">
                                                                       <div className="texto-ofertas">
                                                                                <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                                                                                <h1 className="titulo">Queima de stoque Nike 🔥</h1>
                                                                                <p className="texto">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                                                                <button className="oferta">Ver Ofertas</button>
                                                                      </div>
                                                                      <div className="imagem-ilustrativa">
                                                                                <img src={sapato} class="d-block sapato" alt="sapato" />
                                                                                <img src={ilustracao} class="d-block ilustracao" alt="sapato" />
                                                                      </div>
                                                            </div>
                                                            <div class="carousel-item hero">
                                                            <div className="texto-ofertas">
                                                                                <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                                                                                <h1 className="titulo">Queima de stoque Nike 🔥</h1>
                                                                                <p className="texto">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                                                                <button className="oferta">Ver Ofertas</button>
                                                                      </div>
                                                                      <div className="imagem-ilustrativa">
                                                                                <img src={sapato} class="d-block sapato" alt="sapato" />
                                                                                <img src={ilustracao} class="d-block ilustracao" alt="sapato" />
                                                                      </div>
                                                            </div>
                                                            <div class="carousel-item hero">
                                                            <div className="texto-ofertas">
                                                                                <h6 className="sub-titulo">Melhores ofertas personalizadas</h6>
                                                                                <h1 className="titulo">Queima de stoque Nike 🔥</h1>
                                                                                <p className="texto">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                                                                <button className="oferta">Ver Ofertas</button>
                                                                      </div>
                                                                      <div className="imagem-ilustrativa">
                                                                                <img src={sapato} class="d-block sapato" alt="sapato" />
                                                                                <img src={ilustracao} class="d-block ilustracao" alt="sapato" />
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                  </button>
                                                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                  </button>
                                        </div>
                              </div>
                    </>
          );
};

export default Carousel