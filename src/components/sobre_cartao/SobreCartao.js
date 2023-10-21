import Style from './SobreCartao.module.css'
import cartao from '../../img/cartao1.png'
import {React, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function SobreCartao() {

    useEffect(() => {
        AOS.init();
    }, [])

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