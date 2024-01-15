import './header.css';
import logo_disneylandparis from './logo_disneylandparis.png';

export const Header = (props) => {
    return (
        <header className={'header img-'+props.bkgHeader}>
            <div className="block">
                <a className="logo" href="/" alt="Home">
                    <img src={logo_disneylandparis} className="logo-white" />
                </a>
                <a className="title" href="/" alt="Home">
                    <div className="item1">Rencontre ta</div>
                    <div className="item2">Souris</div>
                    <div className="item3">à Disneyland Paris</div>
                </a>
            </div>
        </header>
    )
}
