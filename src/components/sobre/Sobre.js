import Style from './Sobre.module.css'
import foto from '../../img/market-1.png'

function Sobre() {
    return (
        <section className={Style.sobre}>
            <div className={Style.caixa1}>
                <h1>
                    Uma conta digital totalmente
                    <br/>planejada para facilitar<br />
                    o seu dia a dia com as contas
                </h1>

                <p>
                    Descubra a agilidade que nossos serviços podem oferecer a você.
                    Experimente agora e sinta a diferença!
                </p>

                <div className={Style.botaoSaibaMais}>
                    Saiba Mais
                </div>
            </div>

            <div className={Style.caixa2}>
                <img src={foto} alt="" />
            </div>
        </section>
    )
}

export default Sobre;