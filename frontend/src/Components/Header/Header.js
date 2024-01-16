import './header.css';
import { Logo } from './Logo.js';

export const Header = (props) => {
    return (
        <header className={'header img-'+props.bkgHeader}>
            <div className="block">
                <a className="logo" href="/" alt="Home"><Logo /></a>
                <a className="title" href="/" alt="Home">
                    <div className="item1">Rencontre ta</div>
                    <div className="item2">Souris</div>
                    <div className="item3">à Disneyland Paris</div>
                </a>
            </div>
        </header>
    )
}
