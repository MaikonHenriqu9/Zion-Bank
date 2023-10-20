import Style from './Footer.module.css'
import icon_insta from '../../img/icon-insta.png'
import icon_linkedin from '../../img/icon-linkedin.png'
import icon_yt from '../../img/icon-youtube.png'
import icon_face from '../../img/icon-face.png'
import logo from '../../img/logo-banco-white.png'

export default function Footer() {
    return (
        <footer className={Style.containerFooter}>
            <div className={Style.caixa1}>
                <div className={Style.caixaAtendimento}>
                    <h3 className={Style.titulo}>Atendimento</h3>
                    <p>Canais de Atendimento</p>
                    <p>Dúvidas</p>
                    <p>Perguntas Frequentes</p>
                    <p>Serviços Online</p>
                </div>

                <div className={Style.caixaInstituicao}>
                    <h3 className={Style.titulo}>Instituição</h3>
                    <p>Sobre nós</p>
                    <p>Política de Dados</p>
                    <p>Política de Privacidade</p>
                </div>

                <div className={Style.caixaOutros}>
                    <h3 className={Style.titulo}>Outros</h3>
                    <p>Blog</p>
                    <p>Código de defesa do consumidor</p>
                    <p>Negocie a sua dívida</p>
                </div>
            </div>

            {/* Redes sociais */}
            <div className={Style.caixa2}>
                <div className={Style.caixaEsquerda}>
                    <img src={logo} alt="" />
                </div>

                <div className={Style.caixaDireita}>
                    <img src={icon_linkedin} alt="" />
                    <img src={icon_insta} alt="" />
                    <img src={icon_face} alt="" />
                    <img src={icon_yt} alt="" />
                </div>
            </div>

            {/* Endereço */}
            <div className={Style.caixa3}>
                <p>
                    R.Tito, 54 - Vila Romana, São Paulo - sp, 05051-000.0 2022<br />
                    BANCO Zion SA. CNPJ: 01.123.455/0001-99
                </p>
            </div>
        </footer>
    )
}