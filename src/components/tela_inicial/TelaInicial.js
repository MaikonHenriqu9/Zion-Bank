import Style from './TelaInicial.module.css'
import imagem from '../../img/imagem-1.png'

function TelaInicial() {
    return (
        <section className={Style.containerTelaInicial}>

            {/*Título e botão*/}
            <div className={Style.caixa1}>
                <h1>
                    Apenas aqui, você conquista <br/>
                    o controle absoluto <br/>
                    da sua vida financeira.                    
                </h1>

                <button className={Style.botao}>
                    <h3>Abra sua conta</h3>
                </button>
            </div>

            {/* Imagem */}
            <div className={Style.caixa2}>
                <img src={imagem} alt="" className={Style.imagem}/>
            </div>
        </section>
    )
}

export default TelaInicial;