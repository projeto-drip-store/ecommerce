import ImageSapato from '../../assets/img/image.png'
import './Destaque.css'
export function Destaque() {
    return (
        <section className="topo">
            <div>
                <div className="Imagem">
                    <img src={ImageSapato} alt="" />
                </div>

                <div className="element">
                    <span className="texto1">Oferta especial</span>
                    <h1 className="titulo">Air Jordan edição de colecionador</h1>
                    <p className="titulo2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque odio voluptatum unde minus iure odit quae, veritatis exercitationem numquam quidem hic cum iste sit nemo! Quo perspiciatis deleniti ducimus eaque.</p>
                    <a href="#">Ver Oferta</a>
                </div>
            </div>

        </section>

    )
}

