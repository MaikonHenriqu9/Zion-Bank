import Style from './AppBanco.module.css'
import celular from '../../img/app-smartphone.png'
import google from '../../img/icon-google.png'
import apple from '../../img/icon-apple.png'

function AppBanco() {
    return (
        <section className={Style.containerApp}>
            <div className={Style.caixa1}>
                <h1>
                    Faça parte do Zion Bank<br/>
                    e experimente a tranquilidade <br/>
                    em sua vida financeira.
                </h1>

                <div className={Style.containerBotoes}>
                        <button type="button" className={Style.btnGoogle}>
                            <img src={google} alt="" /> 
                            <p>Google</p>
                        </button>
                        <button type="button" className={Style.btnApple}>
                            <img src={apple} alt="" /> 
                            <p>Apple</p>
                        </button>
                </div>
            </div>


            <div className={Style.caixa2}>
                <img src={celular} alt="" />
            </div>
        </section>
    )
}

export default AppBanco;