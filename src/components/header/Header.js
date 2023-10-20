import Style from './Header.module.css'
import logo from '../../img/logo-banco-white.png'

function Header(){
    return(
        <header className={Style.containerHeader}>
            <img src={logo} alt="" className={Style.logo}/>

            <nav className={Style.containerMenu}>
                <ul>
                    <li>Produtos</li>
                    <li>Atendimento</li>
                    <li>Perguntas</li>
                </ul>
            </nav>

            <div className={Style.botao}>
                <p>Login</p>
            </div>
        </header>
    )
}

export default Header;