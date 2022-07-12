import './styles.css'
import icon from '../../assets/img/logo.svg'

function Header() {
    return (
        <div className="ds-logo-container">
            <img src={icon} alt="DSMeta" />
            <h1> DSMeta</h1>
            <p>
                Desenvolvido por
                <a href="https://www.instagram.com/devsuperior.ig/">@devsuperior.ig </a>
            </p>
        </div>
    )
}

export default Header
