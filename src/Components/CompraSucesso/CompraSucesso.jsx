import MinhasInformacoes from "../../Components/MinhasInformacoes/MinhasInformacoes";
import './CompraSucesso.css'


export function CompraSucesso() {
    return (
        <section className="meus-pedidos-page">
            <MinhasInformacoes
                nome={'Francisco Antonio Pereira'}
                cpf={'123485913-35'}
                email={'francisco@gmail.com'}
                celular={'(85) 5555-5555'}
                endereco={'Rua João Pessoa, 333'}
                bairro={'Centro'}
                cidade={'Fortaleza, Ceará'}
                cep={'433-8800'}
            />
            <hr />
            
        </section>
    )
}
