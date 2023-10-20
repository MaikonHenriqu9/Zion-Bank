import Style from './Servico.module.css'
import cartao from '../../img/icon-cartao.png'
import taxa from '../../img/icon-money.png'
import seguranca from '../../img/icon-security.png'
import foto from '../../img/pexels-photo-3206079.webp'

function Servicos() {
    return (
        <section className={Style.containerServicos}>
            {/* Foto de propaganda */}
            <div className={Style.caixa1}> </div>

            {/* Informações do Banco */}
            <div className={Style.caixa2}>
                <h1>
                    Serviços feitos para atender<br />
                    as suas necessidades
                </h1>

                <p>
                    Benefícios feitos exclusivamente para você
                </p>

                <div className={Style.containerInformacoes}>
                    <div className={Style.caixaCartao}>
                        <div className={Style.icon}>
                            <img src={cartao} alt="" />
                        </div>

                        <h4>
                            Cartão<br />
                            sem anuidade
                        </h4>
                    </div>

                    <div className={Style.caixaTaxa} >
                        <div className={Style.icon}>
                            <img src={taxa} alt="" />
                        </div>

                        <h4>
                            Taxa de saque<br />
                            totalmente
                            gratuito
                        </h4>
                    </div>

                    <div className={Style.caixaSeguranca}>
                        <div className={Style.icon}>
                            <img src={seguranca} alt="" />
                        </div>

                        <h4>
                            Transações
                            totalmentes
                            seguras
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicos;