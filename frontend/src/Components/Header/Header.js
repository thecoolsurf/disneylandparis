import './header.css';
import logo_disneylandparis from './logo_disneylandparis.png';

export const Header = (props) => {
    return (
        <header className={'header img-'+props.bkgHeader}>
            <div className="block">
                <div className="logo-disneylandparis">
                    <img src={logo_disneylandparis} className="logo-white" />
                </div>
                <a className="title" href="/" alt="Disneyland Paris">
                    <div className="item1">Rencontre ta</div>
                    <div className="item2">Souris</div>
                    <div className="item1">à Disneyland Paris</div>
                    <div className="baseline">Vos attractions favorites en Click.</div>
                </a>
            </div>
        </header>
    )
}
