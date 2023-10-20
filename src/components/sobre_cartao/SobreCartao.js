import Style from './SobreCartao.module.css'
import cartao from '../../img/cartao1.png'

function SobreCartao() {
    return (
        <section className={Style.containerCartao}>
            <div className={Style.caixa1}>
                <img src={cartao} alt="" />
            </div>

            <div className={Style.caixa2}>
                <h1>
                    Solicite seu cartão agora<br />
                    e aproveite todos os<br />
                    benefícios à sua disposição.
                </h1>

                <p>
                    Junte-se à nossa comunidade agora e obtenha seu cartão
                    para desfrutar de nossos serviços exclusivos.
                </p>

                <div className={Style.botaoSolicitarCartao}>
                    Solicitar Cartão
                </div>
            </div>
        </section>
    )
}

export default SobreCartao;